import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;

const FRAME_W = 220;
const FRAME_H = 293;
const FRAME_X = 880;
const FRAME_Y = 168;
const FRAME_PAD = 8;
const PHOTO_W = FRAME_W - FRAME_PAD * 2;
const PHOTO_H = FRAME_H - FRAME_PAD * 2;

const portrait = await sharp("src/assets/portrait-ekaterina.png")
  .resize({ width: PHOTO_W, height: PHOTO_H, fit: "cover", position: "top" })
  .toBuffer();

const bg = Buffer.from(
  `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#4A6A82"/>
        <stop offset="40%" stop-color="#3A5A72"/>
        <stop offset="100%" stop-color="#2E4A62"/>
      </linearGradient>
    </defs>

    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

    <!-- decorative border -->
    <rect x="60" y="60" width="${WIDTH - 120}" height="${HEIGHT - 120}" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

    <!-- photo frame mat -->
    <rect x="${FRAME_X}" y="${FRAME_Y}" width="${FRAME_W}" height="${FRAME_H}" fill="#e8ecf0"/>
    <rect x="${FRAME_X + 4}" y="${FRAME_Y + 4}" width="${FRAME_W - 8}" height="${FRAME_H - 8}" fill="none" stroke="rgba(26,26,46,0.1)" stroke-width="0.5"/>

    <!-- name -->
    <text x="100" y="250" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-style="italic" font-weight="400" fill="white" letter-spacing="-1">
      Ekaterina Volova
    </text>

    <!-- profession -->
    <text x="100" y="320" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="18" font-weight="300" fill="rgba(255,255,255,0.7)" letter-spacing="4">
      PSYCHOLOGUE SPECIALISEE EN NEUROPSYCHOLOGIE
    </text>

    <!-- separator -->
    <rect x="100" y="350" width="80" height="1.5" fill="rgba(255,255,255,0.3)"/>

    <!-- location -->
    <text x="100" y="400" font-family="Georgia, 'Times New Roman', serif" font-size="24" font-style="italic" font-weight="400" fill="rgba(255,255,255,0.55)">
      Paris 16e
    </text>

    <!-- RPPS -->
    <text x="100" y="510" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="14" font-weight="400" fill="rgba(255,255,255,0.3)" letter-spacing="2">
      RPPS 10111377833
    </text>

    <!-- website -->
    <text x="${WIDTH - 100}" y="510" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="14" font-weight="400" fill="rgba(255,255,255,0.3)" letter-spacing="1" text-anchor="end">
      ekaterina-volova.com
    </text>
  </svg>`
);

await sharp(bg)
  .composite([
    { input: portrait, left: FRAME_X + FRAME_PAD, top: FRAME_Y + FRAME_PAD },
  ])
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile("public/og-image.jpg");

console.log("OG image generated: public/og-image.jpg (1200x630)");
