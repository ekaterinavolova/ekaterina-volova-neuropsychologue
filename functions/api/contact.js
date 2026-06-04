// Cloudflare Pages Function : relais du formulaire de question vers l'email de Kate.
// POST /api/contact { name, email, message, website (honeypot), turnstileToken }
// Rien n'est stocke : verification Turnstile puis envoi via Resend, c'est tout.
//
// Variables d'environnement (Cloudflare Pages > Settings > Environment variables) :
// - RESEND_API_KEY        (secret)  cle API Resend, permission "Sending access"
// - TURNSTILE_SECRET_KEY  (secret)  cle secrete du widget Turnstile
// Sans ces variables (dev local), la cle de test Turnstile "toujours valide" est
// utilisee et l'envoi Resend echoue proprement (le front bascule en mailto).

const TO_EMAIL = "volova.neuropsy@gmail.com";
const FROM_EMAIL = "Site web <contact@ekaterina-volova.com>";
// Cle de test officielle Cloudflare : valide toujours (jamais utilisee en prod).
const TURNSTILE_TEST_SECRET = "1x0000000000000000000000000000000AA";

const MAX_NAME = 200;
const MAX_EMAIL = 320;
const MAX_MESSAGE = 5000;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  const name = (data.name || "").toString().trim();
  const email = (data.email || "").toString().trim();
  const message = (data.message || "").toString().trim();
  const honeypot = (data.website || "").toString().trim();
  const turnstileToken = (data.turnstileToken || "").toString();

  // Honeypot : un humain ne remplit jamais ce champ cache.
  // On repond "ok" pour ne pas donner d'indice au bot.
  if (honeypot) {
    return json({ ok: true });
  }

  if (!name || !email || !message) {
    return json({ ok: false, error: "missing_fields" }, 400);
  }
  if (
    name.length > MAX_NAME ||
    email.length > MAX_EMAIL ||
    message.length > MAX_MESSAGE ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return json({ ok: false, error: "invalid_fields" }, 400);
  }

  // Verification anti-bot Cloudflare Turnstile.
  const turnstileSecret = env.TURNSTILE_SECRET_KEY || TURNSTILE_TEST_SECRET;
  const verifyRes = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: turnstileSecret,
        response: turnstileToken,
        remoteip: request.headers.get("CF-Connecting-IP") || undefined,
      }),
    },
  );
  const verify = await verifyRes.json();
  if (!verify.success) {
    return json({ ok: false, error: "turnstile_failed" }, 403);
  }

  if (!env.RESEND_API_KEY) {
    return json({ ok: false, error: "not_configured" }, 503);
  }

  // Envoi via Resend : pur relais, aucune copie conservee cote site.
  const sendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: email,
      subject: `Question via le site - ${name}`,
      text: `${message}\n\n--\n${name}\n${email}`,
    }),
  });

  if (!sendRes.ok) {
    return json({ ok: false, error: "send_failed" }, 502);
  }

  return json({ ok: true });
}
