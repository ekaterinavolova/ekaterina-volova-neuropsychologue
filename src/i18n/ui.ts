/**
 * Dictionnaires de traduction pour les éléments UI globaux
 * (navigation, footer, boutons, libellés génériques).
 *
 * Le contenu de chaque page (textes longs, prestations, etc.) est dans des
 * fichiers Markdown séparés sous `src/content/`.
 */

export const languages = {
  fr: "Français",
  ru: "Русский",
  en: "English",
} as const;

export const defaultLang = "fr" as const;

export type Lang = keyof typeof languages;

export const ui = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.services": "Prestations",
    "nav.office": "Cabinet",
    "nav.contact": "Contact",
    "nav.legal": "Mentions légales",

    "footer.rpps": "RPPS 10111377833",
    "footer.profession": "Psychologue spécialisée en neuropsychologie",
    "footer.office_address": "Cabinet Via SANA Parmentier, 4 rue Pierre Levée, 75011 Paris",
    "footer.copyright": "© 2026 Ekaterina Volova. Tous droits réservés.",
    "footer.legal_link": "Mentions légales & politique de confidentialité",

    "cta.book": "Prendre rendez-vous",
    "cta.contact": "Me contacter",
    "cta.read_more": "En savoir plus",

    "lang.switch_to": "Changer de langue",

    "header.tagline": "Neuropsychologue à Paris",
    "header.menu_open": "Ouvrir le menu",
    "header.menu_close": "Fermer le menu",

    "footer.cabinet_label": "Cabinet",
    "footer.contact_label": "Prendre rendez-vous",
    "footer.opening_note": "Ouverture du cabinet le 15 juin 2026",

    "site.title": "Ekaterina Volova - Neuropsychologue à Paris 11e",
    "site.description":
      "Cabinet de neuropsychologie à Paris 11e. Bilans diagnostiques, remédiation et stimulation cognitive, suivi à 6 mois. Adultes 16 ans et plus, prise en charge en français, russe et anglais.",
  },
  ru: {
    "nav.home": "Главная",
    "nav.about": "Обо мне",
    "nav.services": "Услуги",
    "nav.office": "Кабинет",
    "nav.contact": "Контакт",
    "nav.legal": "Правовая информация",

    "footer.rpps": "RPPS 10111377833",
    "footer.profession": "Психолог, специалист по нейропсихологии",
    "footer.office_address": "Кабинет Via SANA Parmentier, 4 rue Pierre Levée, 75011 Paris",
    "footer.copyright": "© 2026 Екатерина Волова. Все права защищены.",
    "footer.legal_link": "Правовая информация и политика конфиденциальности",

    "cta.book": "Записаться на приём",
    "cta.contact": "Связаться со мной",
    "cta.read_more": "Подробнее",

    "lang.switch_to": "Сменить язык",

    "header.tagline": "Нейропсихолог в Париже",
    "header.menu_open": "Открыть меню",
    "header.menu_close": "Закрыть меню",

    "footer.cabinet_label": "Кабинет",
    "footer.contact_label": "Записаться на приём",
    "footer.opening_note": "Открытие кабинета 15 июня 2026 года",

    "site.title": "Екатерина Волова - Нейропсихолог в Париже, 11 округ",
    "site.description":
      "Кабинет нейропсихологии в 11 округе Парижа. Диагностические обследования, когнитивная реабилитация и стимуляция, контрольное обследование через 6 месяцев. Взрослые с 16 лет, приём на французском, русском и английском языках.",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.office": "Office",
    "nav.contact": "Contact",
    "nav.legal": "Legal notice",

    "footer.rpps": "RPPS 10111377833",
    "footer.profession": "Psychologist specialising in neuropsychology",
    "footer.office_address": "Via SANA Parmentier office, 4 rue Pierre Levée, 75011 Paris",
    "footer.copyright": "© 2026 Ekaterina Volova. All rights reserved.",
    "footer.legal_link": "Legal notice and privacy policy",

    "cta.book": "Book an appointment",
    "cta.contact": "Get in touch",
    "cta.read_more": "Learn more",

    "lang.switch_to": "Change language",

    "header.tagline": "Neuropsychologist in Paris",
    "header.menu_open": "Open menu",
    "header.menu_close": "Close menu",

    "footer.cabinet_label": "Office",
    "footer.contact_label": "Book an appointment",
    "footer.opening_note": "Office opens on 15 June 2026",

    "site.title": "Ekaterina Volova - Neuropsychologist in Paris 11th",
    "site.description":
      "Neuropsychology practice in Paris 11th. Diagnostic assessments, cognitive remediation and stimulation, 6-month follow-up. Adults 16 and older, consultations in French, Russian and English.",
  },
} as const;

export type TranslationKey = keyof (typeof ui)["fr"];
