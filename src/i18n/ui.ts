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
    "nav.neuropsychologie": "Neuropsychologie",
    "nav.about": "À propos",
    "nav.services": "Prestations",
    "nav.office": "Cabinet",
    "nav.contact": "Contact",
    "nav.legal": "Mentions légales",

    "footer.rpps": "RPPS 10111377833",
    "footer.profession": "Psychologue spécialisée en neuropsychologie",
    "footer.office_address": "14 rue Nicolo, 75116 Paris",
    "footer.copyright": "© 2026 Ekaterina Volova. Tous droits réservés.",
    "footer.legal_link": "Mentions légales & politique de confidentialité",

    "cta.book": "Réserver une consultation",
    "contact.title": "Contact - Ekaterina Volova, neuropsychologue",
    "contact.description": "Contacter le cabinet de neuropsychologie d'Ekaterina Volova à Paris 16e : téléphone, email, adresse et formulaire de question. Consultations en français, russe et anglais.",
    "contact.heading": "Contact",
    "contact.coords": "Coordonnées",
    "contact.form_heading": "Une question ?",
    "contact.form_intro": "Pour toute question ou demande de rendez-vous, écrivez-moi directement.",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Votre question",
    "contact.send": "Envoyer",
    "cabinet.pmr": "Cabinet en rez-de-chaussée, accessible PMR",
    "cabinet.hours": "Tous les jours (y compris le week-end), 10h - 19h",
    "contact.sending": "Envoi en cours...",
    "contact.success":
      "Votre message a bien été envoyé. Vous recevrez une réponse à l'adresse indiquée.",
    "contact.error":
      "L'envoi automatique a échoué : votre logiciel de messagerie va s'ouvrir avec votre message pré-rempli.",
    "cta.book_short": "Réserver",
    "cta.contact": "Me contacter",
    "cta.read_more": "En savoir plus",

    "lang.switch_to": "Changer de langue",
    "nav.languages": "Langues",

    "header.tagline": "Neuropsychologue à Paris",
    "header.menu_open": "Ouvrir le menu",
    "header.menu_close": "Fermer le menu",

    "footer.cabinet_label": "Cabinet",
    "footer.contact_label": "Prendre rendez-vous",
    "footer.opening_note": "Ouverture du cabinet le 15 juin 2026",

    "site.title": "Ekaterina Volova - Neuropsychologue à Paris 16e",
    "site.description":
      "Cabinet de neuropsychologie à Paris 16e. Bilans diagnostiques, remédiation et stimulation cognitive, suivi à 6 mois. Adultes 16 ans et plus, prise en charge en français, russe et anglais.",

    "home.h1": "Ekaterina Volova",
    "home.lede": "Psychologue spécialisée en neuropsychologie",
    "home.cta_primary": "Prendre rendez-vous",
    "home.cta_secondary": "Réserver une consultation",

    "home.hero.line1_pre": "Consultations pour ",
    "home.hero.line1_em": "adultes à partir de 16 ans",
    "home.hero.line2": "14 rue Nicolo, 75116 Paris",

    "home.who.title": "Pour qui je consulte",
    "home.who.intro":
      "Le cabinet accueille principalement une population adulte, à partir de 16 ans, dans le cadre de bilans neuropsychologiques diagnostiques et d'un accompagnement de remédiation ou de stimulation cognitive.",
    "home.who.indications_title": "Indications principales",
    "home.who.indications":
      "Maladies neurodégénératives (maladie d'Alzheimer, maladie de Parkinson, maladie à corps de Lewy, dégénérescence fronto-temporale, etc.). Pathologies neurologiques (sclérose en plaques, épilepsie, séquelles d'AVC, traumatismes crâniens). Troubles psychiatriques avec ou sans impact cognitif (dépression, anxiété, troubles post-traumatiques, troubles du comportement alimentaire, addictions). TDAH adulte.",
    "home.who.note":
      "Le cabinet ne propose pas de suivi psychothérapeutique long et n'exerce pas en pédiatrie générale francophone. Une exception est faite pour les bilans d'enfants russophones, ce segment étant peu couvert en Île-de-France.",

    "prestations.title": "Prestations et tarifs - Ekaterina Volova, neuropsychologue",
    "prestations.description": "Tarifs des bilans neuropsychologiques, remédiation cognitive et thérapies cognitivo-comportementales. Cabinet de neuropsychologie à Paris 16e.",

    "prestations.entretien_title": "Premier entretien clinique (obligatoire)",
    "prestations.entretien_desc": "Première consultation permettant de recueillir l'histoire clinique du patient (les antécédents médicaux et familiaux), le motif de consultation et les difficultés rencontrées au quotidien afin d'orienter l'évaluation neuropsychologique.",
    "prestations.entretien_price": "70 €",

    "prestations.bilans_title": "Bilans neuropsychologiques pour les adultes (à partir de 16 ans)",
    "prestations.bilan_1": "Bilan neuropsychologique complet",
    "prestations.bilan_1_desc": "Evaluation approfondie du fonctionnement cognitif réalisée à l'aide de différentes épreuves neuropsychologiques standardisées permettant d'explorer la mémoire, l'attention, les fonctions exécutives, le langage, les capacités visuoconstructives, visuospatiales, visuoperceptives, praxiques ainsi que la cognition sociale. Cette évaluation vise à objectiver et caractériser les difficultés rapportées par le patient et à préciser le profil cognitif observé.",
    "prestations.bilan_1_price": "450 €",
    "prestations.bilan_2": "Bilan neuropsychologique QI",
    "prestations.bilan_2_desc": "Evaluation du fonctionnement intellectuel global à l'aide d'outils standardisés tels que la WAIS-IV, permettant d'explorer différents indices cognitifs : compréhension verbale, raisonnement perceptif, mémoire de travail et vitesse de traitement. Ce bilan peut être réalisé dans le cadre d'un questionnement sur le haut potentiel intellectuel, ainsi qu'en présence de difficultés cognitives.",
    "prestations.bilan_2_price": "550 €",
    "prestations.bilan_3": "Bilan attentionnel dans un contexte TDA/H",
    "prestations.bilan_3_desc": "Evaluation des fonctions attentionnelles et exécutives réalisée à l'aide d'épreuves neuropsychologiques standardisées et d'échelles cliniques validées, dans le cadre d'une suspicion de trouble du déficit de l'attention avec ou sans hyperactivité (TDAH) chez l'adolescent à partir de 16 ans et l'adulte.",
    "prestations.bilan_3_price": "550 €",
    "prestations.bilan_4": "Bilan de suivi",
    "prestations.bilan_4_desc": "Evaluation réalisée à distance d'un premier bilan neuropsychologique (minimum 6 mois) afin d'apprécier l'évolution du fonctionnement cognitif au cours du temps. Le bilan de suivi permet de comparer les performances aux évaluations précédentes, d'objectiver une éventuelle évolution des troubles et d'adapter les recommandations de prise en charge en fonction du profil cognitif observé.",
    "prestations.bilan_4_price": "200 €",

    "prestations.remediation_title": "Remédiation et stimulation cognitive",
    "prestations.remediation_desc": "Séances de 45 minutes visant à travailler et stimuler certaines fonctions cognitives telles que la mémoire, l'attention, les fonctions exécutives ou la vitesse de traitement à l'aide d'exercices adaptés au profil et aux difficultés du patient. La prise en charge a pour objectif de renforcer les capacités cognitives préservées, développer des stratégies de compensation et améliorer le fonctionnement au quotidien.",
    "prestations.remediation_price": "65 €",

    "home.about.title": "Le cabinet",
    "home.about.desc": "Le cabinet accueille une population adulte à partir de 16 ans pour des bilans neuropsychologiques diagnostiques, un accompagnement en remédiation et stimulation cognitive. Les consultations sont proposées en français, en russe et en anglais.",
    "home.about.cta": "En savoir plus sur la neuropsychologie",

    "home.intro.title": "Qui suis-je ?",
    "home.intro.text":
      "Psychologue spécialisée en neuropsychologie, j'accompagne les adultes dans l'évaluation et la compréhension de leurs difficultés cognitives et psycho-affectives, à travers des bilans neuropsychologiques approfondis.",
    "home.intro.spec_1": "Bilan neuropsychologique",
    "home.intro.spec_2": "Troubles mnésiques",
    "home.intro.spec_3": "Troubles langagiers",
    "home.intro.spec_4": "Troubles attentionnels",
    "home.intro.spec_5": "AVC",
    "home.intro.spec_6": "Maladies neurodégénératives",
    "home.intro.spec_7": "Sclérose en plaques",
    "home.intro.spec_8": "TDAH adulte",
    "home.intro.spec_9": "Haut potentiel intellectuel",
    "home.intro.spec_10": "QI",
    "home.intro.spec_11": "Hydrocéphalie à pression normale",
    "home.intro.cta": "En savoir plus sur mon parcours",

    "home.tarifs.title": "Tarifs",
    "home.tarifs.cta": "Voir le détail des prestations",
    "home.price.bilan": "Bilan neuropsychologique",
    "home.price.diva": "Entretien diagnostique TDA/H (DIVA-5)",
    "home.price.diva_price": "550 €",
    "home.price.entretien": "Premier entretien clinique (obligatoire)",
    "home.price.attention": "Bilan attentionnel dans un contexte TDA/H",
    "home.price.iq": "Bilan neuropsychologique QI",
    "home.price.suivi": "Bilan de suivi",
    "home.cabinet.title": "Le cabinet",
    "home.cabinet.photo_placeholder": "Photo à venir",
    "home.cabinet.map_link": "Voir sur la carte",

    "home.remediation.title": "Qu'est-ce qu'une remédiation et stimulation cognitive ?",
    "home.remediation.desc": "La remédiation et la stimulation cognitives sont des prises en charge visant à travailler différentes fonctions cognitives telles que la mémoire, l'attention, les fonctions exécutives ou le langage à l'aide d'exercices adaptés au profil du patient. Elles ont pour objectif de renforcer les capacités préservées, développer des stratégies de compensation et favoriser le maintien de l'autonomie au quotidien.",

    "home.services.title": "Prestations",
    "home.services.s1_title": "Bilan diagnostique",
    "home.services.s1_desc":
      "Évaluation neuropsychologique approfondie, du recueil clinique à la restitution écrite et orale. Comprend un entretien initial, la passation des tests, l'analyse des résultats et un compte rendu détaillé transmis au médecin prescripteur.",
    "home.services.s1_price": "450 à 600 €",
    "home.services.s2_title": "Bilan de suivi à 6 mois",
    "home.services.s2_desc":
      "Réévaluation des fonctions cognitives à distance du bilan initial. Mêmes outils que le bilan diagnostique, focus sur l'évolution.",
    "home.services.s2_price": "200 €",
    "home.services.s3_title": "Remédiation et stimulation cognitive",
    "home.services.s3_desc":
      "Séances individuelles ciblant la mémoire, l'attention, les fonctions exécutives ou le langage. Indications conformes aux recommandations HAS : post-AVC chronique, TDAH adulte, traumatismes crâniens légers, troubles neurocognitifs liés au vieillissement.",
    "home.services.s3_price": "60 à 70 € par séance",
    "home.services.s4_title": "Thérapies cognitivo-comportementales",
    "home.services.s4_desc":
      "Approche TCC en supervision à partir d'avril 2027, dans le cadre de la formation accélérée à l'AFTCC. Indications : anxiété, dépression, troubles post-traumatiques, troubles du comportement alimentaire, addictions, TDAH adulte.",
    "home.services.s4_price": "75 € par séance",
    "home.services.note_supervised":
      "Pratique supervisée à compter d'avril 2027",
    "home.services.cta": "Voir les tarifs et le déroulé en détail",

    "home.process.title": "Comment se déroule un bilan",
    "home.process.step1_title": "Premier contact",
    "home.process.step1_desc":
      "Vous me contactez pour formuler votre demande, par formulaire ou orientation médicale. Un échange préalable permet de préciser le motif et de planifier le bilan adapté.",
    "home.process.step2_title": "Entretien initial",
    "home.process.step2_desc":
      "Une séance d'une heure pour recueillir votre histoire clinique, vos plaintes actuelles et votre contexte de vie. Nous définissons ensemble les axes du bilan.",
    "home.process.step3_title": "Passation des tests",
    "home.process.step3_desc":
      "Trois à cinq heures de passation, divisibles en deux séances si nécessaire. Tests cognitifs validés couvrant mémoire, attention, fonctions exécutives, langage, praxies, et cognition sociale selon les indications.",
    "home.process.step4_title": "Restitution",
    "home.process.step4_desc":
      "Une séance d'une heure pour vous présenter les résultats. Un compte rendu écrit détaillé est adressé au médecin prescripteur, avec votre accord.",

    "home.languages.title": "Trois langues d'accueil",
    "home.languages.fr": "Français — langue principale du cabinet et de la rédaction des comptes rendus.",
    "home.languages.ru": "Русский — langue maternelle de la praticienne, accueil et passation possibles.",
    "home.languages.en": "English — entretiens et bilans en anglais possibles sur demande.",

    "home.prescribers.title": "Vous êtes médecin ou prescripteur",
    "home.prescribers.desc":
      "Modèle d'ordonnance, exemple de compte rendu et parcours d'orientation détaillés.",
    "home.prescribers.cta": "Espace prescripteurs",

    "neuropsychologie.title":
      "La neuropsychologie et le bilan neuropsychologique - Ekaterina Volova",
    "neuropsychologie.description":
      "Qu'est-ce que la neuropsychologie, le bilan neuropsychologique et la remédiation cognitive ? Explications par Ekaterina Volova, psychologue spécialisée en neuropsychologie à Paris 16e.",

    "about.title":
      "À propos - Ekaterina Volova, psychologue spécialisée en neuropsychologie",
    "about.description":
      "Présentation d'Ekaterina Volova, psychologue spécialisée en neuropsychologie. Définition du bilan neuropsychologique, formation universitaire Paris 8, expérience à l'Hôpital Fondation Adolphe de Rothschild.",

    "about.eyebrow": "À propos",

    "about.section1_title": "Qu'est-ce que la neuropsychologie ?",
    "about.section1_p1":
      "La neuropsychologie est une discipline qui étudie les relations entre le cerveau, les fonctions cognitives et le comportement. Elle permet de mieux comprendre les difficultés mnésiques, attentionnelles, langagières, exécutives et émotionnelles, notamment dans le cadre de pathologies neurologiques, psychiatriques ou neurodéveloppementales.",

    "about.section2_title": "Qu'est-ce qu'un bilan neuropsychologique ?",
    "about.section2_p1":
      "Le bilan neuropsychologique est une évaluation détaillée du fonctionnement cognitif, comportemental et psycho-affectif d'une personne à un instant donné. Il vise à répondre à une question clinique précise : objectiver et caractériser une plainte cognitive, orienter vers un diagnostic différentiel, évaluer l'évolution des troubles ou identifier les répercussions fonctionnelles des difficultés observées. Il s'adresse aux adolescents à partir de 16 ans, aux adultes et aux personnes âgées présentant des troubles cognitifs, psycho-affectifs ou comportementaux, notamment dans le cadre de pathologies neurologiques, neurodéveloppementales ou psychiatriques, afin de mieux comprendre leur fonctionnement et d'orienter la prise en charge.",
    "about.section2_steps_intro": "Les trois étapes du bilan neuropsychologique :",
    "about.section2_step1_title": "Entretien clinique - <u>étape obligatoire</u>",
    "about.section2_step1_desc":
      "Première consultation d'environ une heure permettant de recueillir l'histoire clinique du patient, le motif de consultation et les difficultés rencontrées au quotidien afin d'orienter l'évaluation neuropsychologique.",
    "about.section2_step2_title": "Passation des épreuves",
    "about.section2_step2_desc":
      "Environ trois heures de passation de tests standardisés sélectionnés en fonction de la demande clinique, de l'âge et du niveau socioculturel du patient, afin d'obtenir une évaluation adaptée et approfondie du fonctionnement cognitif.",
    "about.section2_step3_title": "Restitution",
    "about.section2_step3_desc":
      "Une consultation d'environ une heure permettant de présenter et d'expliquer les résultats du bilan neuropsychologique et de répondre aux questions. Un compte rendu écrit détaillé ainsi que des propositions de prise en charge sont remis à l'issue du bilan.",

    "about.section3_title": "Formation et parcours",
    "about.section3_intro":
      "Inscrite au répertoire national des professionnels de santé sous le numéro RPPS : 10111377833. Profession réglementée par l'article 44 de la loi n° 85-772 du 25 juillet 1985 (titre de psychologue protégé).",

    "about.experience_title": "Expérience professionnelle",

    "about.exp_1_dates": "Juillet 2025 - Juin 2026",
    "about.exp_1_title": "Hôpital Fondation Adolphe de Rothschild, services de Neurologie et de Neurochirurgie",
    "about.exp_1_desc": "Réalisation de bilans neuropsychologiques auprès de patients présentant des pathologies neurologiques diverses (maladie d'Alzheimer, maladie de Parkinson, dégénérescence lobaire fronto-temporale, maladie à corps de Lewy, sclérose en plaques, atrophie multisystématisée, épilepsie, paralysie supranucléaire progressive, AVC...), ainsi que de bilans neuropsychologiques pré-opératoires (pré-stimulation cérébrale profonde dans le cadre de la maladie de Parkinson et pré-dérivation pour l'hydrocéphalie à pression normale), et participation aux réunions pluridisciplinaires.",

    "about.exp_2_dates": "Octobre 2024 - Mai 2025",
    "about.exp_2_title": "Hôpital Fondation Adolphe de Rothschild, service de Neurologie (Stage de 500h)",
    "about.exp_2_desc": "Réalisation de bilans neuropsychologiques, participation aux réunions pluridisciplinaires et aux ateliers d'éducation thérapeutique du patient.",

    "about.exp_3_dates": "Février - Avril 2024",
    "about.exp_3_title": "CH de Versailles, Hôpital Richaud, service d'Hôpital de Jour (Stage de 280h)",
    "about.exp_3_desc": "Réalisation de bilans neuropsychologiques auprès de la population âgée (> 65 ans) présentant diverses pathologies (oncologie, troubles mnésiques, maladie de Parkinson, AVC, troubles de l'équilibre), animation d'ateliers de stimulation cognitive et participation aux réunions pluridisciplinaires.",

    "about.exp_4_dates": "Février - Mars 2023",
    "about.exp_4_title": "EHPAD L'Ensolelhada (Stage de 70h)",
    "about.exp_4_desc": "Observation du travail du neuropsychologue auprès de personnes âgées atteintes de maladies neurodégénératives aux stades avancés et animation d'ateliers.",

    "about.exp_5_dates": "Septembre - Décembre 2019",
    "about.exp_5_title": "Fondations Malteser Hilfsdienst et Roditelsky Most (Stages)",
    "about.exp_5_desc": "Assistance aux psychologues cliniciens lors d'entretiens avec des familles en crise.",

    "about.education_title": "Formation",

    "about.edu_1_dates": "2023 - 2025",
    "about.edu_1_title": "Université Paris 8 Vincennes-Saint Denis - Master de psychologie,<br />parcours Neuropsychologie",
    "about.edu_1_desc": "<ul style='list-style:disc;padding-left:1.2em;color:var(--color-accent);font-size:0.875rem;text-align:justify'><li><span style='color:var(--color-ink-soft)'>Mémoire Master 2 : Changements du fonctionnement cognitif et de la qualité de vie chez les patients atteints de la maladie de Parkinson bénéficiant de la stimulation cérébrale profonde.</span></li><li><span style='color:var(--color-ink-soft)'>Mémoire Master 1 : Fonctions de la pensée future épisodique dans le vieillissement normal.</span></li></ul>",

    "about.edu_2_dates": "2020 - 2023",
    "about.edu_2_title": "Université Montpellier III Paul Valéry - Licence de psychologie",
    "about.edu_2_desc": "",

    "about.edu_3_dates": "2019 - 2020",
    "about.edu_3_title": "Université d'État de Saint-Pétersbourg - Spécialité de Psychologie clinique",
    "about.edu_3_desc": "",

    "about.edu_4_dates": "2014 - 2018",
    "about.edu_4_title": "Université d'État de Saint-Pétersbourg - Licence d'Économie",
    "about.edu_4_desc": "",

    "about.languages_note":
      "Pratique du bilan en français, en russe et en anglais.",

    "about.cta": "Réserver une consultation",

    "legal.title":
      "Mentions légales et politique de confidentialité - Ekaterina Volova",
    "legal.description":
      "Mentions légales, conditions d'utilisation et politique de confidentialité du site ekaterina-volova.com.",
    "legal.h1": "Mentions légales et politique de confidentialité",

    "legal.editor_title": "Éditeur du site",
    "legal.editor_intro":
      "Le site ekaterina-volova.com est édité par Ekaterina Volova, psychologue spécialisée en neuropsychologie.",

    "legal.editor_label_rpps": "RPPS",
    "legal.editor_label_siret": "SIRET",
    "legal.editor_label_ape": "Code APE",
    "legal.editor_label_address": "Cabinet",
    "legal.editor_label_phone": "Téléphone",
    "legal.editor_label_email": "Email",

    "legal.director_title": "Directrice de la publication",

    "legal.host_title": "Hébergeur",
    "legal.host_content":
      "Le site est hébergé par Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis.",

    "legal.ip_title": "Propriété intellectuelle",
    "legal.ip_content":
      "L'ensemble du contenu de ce site (textes, images, graphismes, logo, structure) est la propriété exclusive d'Ekaterina Volova, sauf mention contraire. Toute reproduction, représentation ou diffusion, en tout ou en partie, du contenu de ce site sur quelque support ou par tout procédé que ce soit est interdite sans l'autorisation préalable écrite d'Ekaterina Volova.",

    "legal.data_title": "Données personnelles et cookies",
    "legal.data_no_collection":
      "Ce site ne stocke aucune donnée personnelle. Les messages envoyés via le formulaire de question sont transmis directement par email à Ekaterina Volova au moyen du service d'envoi Resend (Resend, Inc., États-Unis) : ils ne sont ni stockés sur le site ni utilisés à d'autres fins. Le formulaire est protégé contre les robots par Cloudflare Turnstile, qui ne dépose aucun cookie. Aucun cookie ni traceur publicitaire n'est utilisé.",
    "legal.data_analytics":
      "La mesure d'audience est réalisée par Cloudflare Web Analytics, un outil respectueux de la vie privée qui ne dépose aucun cookie et ne collecte aucune donnée personnelle identifiante. Aucun consentement n'est requis conformément aux recommandations de la CNIL.",
    "legal.data_rights":
      "Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, contactez : volova.neuropsy@gmail.com.",

    "legal.liability_title": "Responsabilité",
    "legal.liability_content":
      "Ekaterina Volova s'efforce de fournir des informations exactes et à jour sur ce site. Toutefois, elle ne peut garantir l'exactitude, la complétude ou l'actualité des informations diffusées. Le contenu de ce site est fourni à titre informatif et ne saurait se substituer à un avis médical ou à une consultation professionnelle.",

    "legal.law_title": "Droit applicable",
    "legal.law_content":
      "Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.",

    "a11y.skip": "Aller au contenu",

    "notfound.title": "Page introuvable",
    "notfound.text":
      "La page que vous cherchez n'existe pas ou a été déplacée.",
    "notfound.cta": "Retour à l'accueil",
  },
  ru: {
    "nav.home": "Главная",
    "nav.neuropsychologie": "Нейропсихология",
    "nav.about": "Обо мне",
    "nav.services": "Услуги",
    "nav.office": "Кабинет",
    "nav.contact": "Контакты",
    "nav.legal": "Правовая информация",

    "footer.rpps": "RPPS 10111377833",
    "footer.profession": "Психолог, специалист по нейропсихологии",
    "footer.office_address": "14 rue Nicolo, 75116 Paris",
    "footer.copyright": "© 2026 Екатерина Волова. Все права защищены.",
    "footer.legal_link": "Правовая информация и политика конфиденциальности",

    "cta.book": "Записаться на консультацию",
    "contact.title": "Контакты - Екатерина Волова, нейропсихолог",
    "contact.description": "Связаться с кабинетом нейропсихологии Екатерины Воловой в 16 округе Парижа: телефон, email, адрес и форма для вопроса. Консультации на французском, русском и английском.",
    "contact.heading": "Контакты",
    "contact.coords": "Контакты",
    "contact.form_heading": "Есть вопрос?",
    "contact.form_intro": "По любому вопросу или для записи на приём напишите мне напрямую.",
    "contact.name": "Имя",
    "contact.email": "Email",
    "contact.message": "Ваш вопрос",
    "contact.send": "Отправить",
    "cabinet.pmr": "Кабинет на первом этаже, доступен для маломобильных людей",
    "cabinet.hours": "Ежедневно (включая выходные), 10:00 - 19:00",
    "contact.sending": "Отправка...",
    "contact.success":
      "Ваше сообщение успешно отправлено. Ответ придёт на указанный адрес.",
    "contact.error":
      "Автоматическая отправка не удалась: откроется ваша почтовая программа с заполненным сообщением.",
    "cta.book_short": "Записаться",
    "cta.contact": "Связаться со мной",
    "cta.read_more": "Подробнее",

    "lang.switch_to": "Сменить язык",
    "nav.languages": "Языки",

    "header.tagline": "Нейропсихолог в Париже",
    "header.menu_open": "Открыть меню",
    "header.menu_close": "Закрыть меню",

    "footer.cabinet_label": "Кабинет",
    "footer.contact_label": "Записаться на приём",
    "footer.opening_note": "Открытие кабинета 15 июня 2026 года",

    "site.title": "Екатерина Волова - Нейропсихолог в Париже, 16 округ",
    "site.description":
      "Кабинет нейропсихологии в 16 округе Парижа. Диагностические обследования, когнитивная реабилитация и стимуляция, контрольное обследование через 6 месяцев. Взрослые с 16 лет, приём на французском, русском и английском языках.",

    "home.h1": "Екатерина Волова",
    "home.lede": "Нейропсихолог",
    "home.cta_primary": "Записаться на приём",
    "home.cta_secondary": "Записаться на консультацию",

    "home.hero.line1_pre": "Консультации для ",
    "home.hero.line1_em": "взрослых с 16 лет",
    "home.hero.line2": "14 rue Nicolo, 75116 Paris",

    "home.who.title": "Кому я могу помочь",
    "home.who.intro":
      "Кабинет принимает преимущественно взрослых пациентов с 16 лет в рамках диагностических нейропсихологических обследований и сопровождения по программам когнитивной реабилитации и стимуляции.",
    "home.who.indications_title": "Основные показания",
    "home.who.indications":
      "Нейродегенеративные заболевания (болезнь Альцгеймера, болезнь Паркинсона, болезнь с тельцами Леви, лобно-височная дегенерация и др.). Неврологические патологии (рассеянный склероз, эпилепсия, последствия инсульта, черепно-мозговые травмы). Психиатрические расстройства с когнитивным компонентом или без него (депрессия, тревожные расстройства, посттравматические расстройства, расстройства пищевого поведения, зависимости). СДВГ у взрослых.",
    "home.who.note":
      "Кабинет не проводит длительную психотерапевтическую работу и не специализируется на детской франкоязычной практике. Исключение составляют обследования русскоязычных детей, так как этот сегмент мало охвачен в регионе Иль-де-Франс.",

    "prestations.title": "Услуги и тарифы - Екатерина Волова, нейропсихолог",
    "prestations.description": "Тарифы на нейропсихологические обследования, когнитивную реабилитацию и когнитивно-поведенческую терапию. Кабинет нейропсихологии в 16 округе Парижа.",

    "prestations.entretien_title": "Первичное клиническое интервью (обязательно)",
    "prestations.entretien_desc": "Первичная консультация, позволяющая собрать клиническую историю пациента (медицинский и семейный анамнез), причину обращения и повседневные трудности с целью определения направления нейропсихологической оценки.",
    "prestations.entretien_price": "70 €",

    "prestations.bilans_title": "Нейропсихологические обследования для взрослых (с 16 лет)",
    "prestations.bilan_1": "Полное нейропсихологическое обследование",
    "prestations.bilan_1_desc": "Углублённая оценка когнитивного функционирования с помощью различных стандартизированных нейропсихологических проб, позволяющая исследовать память, внимание, исполнительные функции, речь, зрительно-конструктивные, зрительно-пространственные, зрительно-перцептивные и праксические способности, а также социальное познание. Данная оценка направлена на объективизацию и характеристику трудностей, о которых сообщает пациент, и на уточнение наблюдаемого когнитивного профиля.",
    "prestations.bilan_1_price": "450 €",
    "prestations.bilan_2": "Нейропсихологическое обследование IQ",
    "prestations.bilan_2_desc": "Оценка общего интеллектуального функционирования с помощью стандартизированных инструментов, таких как WAIS-IV, позволяющая исследовать различные когнитивные индексы: вербальное понимание, перцептивное мышление, рабочую память и скорость обработки информации. Данное обследование может быть проведено в рамках вопроса о высоком интеллектуальном потенциале, а также при наличии когнитивных трудностей.",
    "prestations.bilan_2_price": "550 €",
    "prestations.bilan_3": "Обследование внимания в контексте СДВГ",
    "prestations.bilan_3_desc": "Оценка функций внимания и исполнительных функций с помощью стандартизированных нейропсихологических проб и валидированных клинических шкал в рамках подозрения на синдром дефицита внимания с гиперактивностью или без неё (СДВГ) у подростков с 16 лет и взрослых.",
    "prestations.bilan_3_price": "550 €",
    "prestations.bilan_4": "Контрольное обследование",
    "prestations.bilan_4_desc": "Обследование, проводимое через определённое время после первичного нейропсихологического обследования (минимум 6 месяцев) с целью оценки динамики когнитивного функционирования. Контрольное обследование позволяет сопоставить результаты с предыдущими оценками, объективизировать возможную эволюцию нарушений и адаптировать рекомендации по дальнейшему сопровождению в соответствии с наблюдаемым когнитивным профилем.",
    "prestations.bilan_4_price": "200 €",

    "prestations.remediation_title": "Когнитивная реабилитация и стимуляция",
    "prestations.remediation_desc": "Сеансы продолжительностью 45 минут, направленные на тренировку и стимуляцию определённых когнитивных функций, таких как память, внимание, исполнительные функции или скорость обработки информации, с помощью упражнений, адаптированных к профилю и трудностям пациента. Цель сопровождения - укрепить сохранные когнитивные способности, выработать компенсаторные стратегии и улучшить повседневное функционирование.",
    "prestations.remediation_price": "65 €",

    "home.about.title": "Кабинет",
    "home.about.desc": "Кабинет принимает взрослых пациентов с 16 лет для диагностических нейропсихологических обследований, сопровождения по программам когнитивной реабилитации и стимуляции. Консультации проводятся на французском, русском и английском языках.",
    "home.about.cta": "Подробнее о нейропсихологии",

    "home.intro.title": "Кто я?",
    "home.intro.text":
      "Нейропсихолог, я помогаю взрослым оценить и лучше понять их когнитивные и психоэмоциональные трудности с помощью комплексного нейропсихологического обследования.",
    "home.intro.spec_1": "Нейропсихологическое обследование",
    "home.intro.spec_2": "Нарушения памяти",
    "home.intro.spec_3": "Нарушения речи",
    "home.intro.spec_4": "Нарушения внимания",
    "home.intro.spec_5": "Инсульт",
    "home.intro.spec_6": "Нейродегенеративные заболевания",
    "home.intro.spec_7": "Рассеянный склероз",
    "home.intro.spec_8": "СДВГ у взрослых",
    "home.intro.spec_9": "Высокий интеллектуальный потенциал",
    "home.intro.spec_10": "IQ",
    "home.intro.spec_11": "Нормотензивная гидроцефалия",
    "home.intro.cta": "Подробнее о моём пути",

    "home.tarifs.title": "Тарифы",
    "home.tarifs.cta": "Подробнее об услугах",
    "home.price.bilan": "Комплексное нейропсихологическое обследование",
    "home.price.diva": "Клиническое интервью для диагностики СДВГ у взрослых (DIVA-5)",
    "home.price.diva_price": "550 €",
    "home.price.entretien": "Первичная обязательная консультация",
    "home.price.attention": "Когнитивное обследование при подозрении на СДВГ",
    "home.price.iq": "Оценка интеллектуальных способностей (IQ)",
    "home.price.suivi": "Повторное нейропсихологическое обследование",
    "home.cabinet.title": "Кабинет",
    "home.cabinet.photo_placeholder": "Фото скоро",
    "home.cabinet.map_link": "Открыть на карте",

    "home.remediation.title": "Что такое когнитивная реабилитация и стимуляция?",
    "home.remediation.desc": "Когнитивная реабилитация и стимуляция - это виды помощи, направленные на тренировку различных когнитивных функций, таких как память, внимание, исполнительные функции или речь, с помощью упражнений, адаптированных к профилю пациента. Их цель - укрепить сохранные способности, выработать компенсаторные стратегии и способствовать поддержанию самостоятельности в повседневной жизни.",

    "home.services.title": "Услуги",
    "home.services.s1_title": "Диагностическое обследование",
    "home.services.s1_desc":
      "Углублённая нейропсихологическая оценка от клинического сбора данных до устного и письменного заключения. Включает начальное интервью, проведение тестов, анализ результатов и подробный отчёт, передаваемый направляющему врачу.",
    "home.services.s1_price": "450–600 €",
    "home.services.s2_title": "Контрольное обследование через 6 месяцев",
    "home.services.s2_desc":
      "Повторная оценка когнитивных функций через определённое время после первичного обследования. Используются те же инструменты, акцент на динамике.",
    "home.services.s2_price": "200 €",
    "home.services.s3_title": "Когнитивная реабилитация и стимуляция",
    "home.services.s3_desc":
      "Индивидуальные занятия, направленные на память, внимание, исполнительные функции или речь. Показания согласно рекомендациям HAS: хронический постинсультный период, СДВГ у взрослых, лёгкие черепно-мозговые травмы, возрастные когнитивные нарушения.",
    "home.services.s3_price": "60–70 € за сеанс",
    "home.services.s4_title": "Когнитивно-поведенческая терапия",
    "home.services.s4_desc":
      "Подход КПТ с супервизией с апреля 2027 года, в рамках ускоренного обучения в AFTCC. Показания: тревога, депрессия, посттравматические расстройства, расстройства пищевого поведения, зависимости, СДВГ у взрослых.",
    "home.services.s4_price": "75 € за сеанс",
    "home.services.note_supervised":
      "Практика под супервизией с апреля 2027 года",
    "home.services.cta": "Подробнее о тарифах и порядке консультаций",

    "home.process.title": "Как проходит обследование",
    "home.process.step1_title": "Первый контакт",
    "home.process.step1_desc":
      "Вы связываетесь со мной для формулировки вашего запроса — через форму или по направлению врача. Предварительное общение позволяет уточнить причину обращения и спланировать соответствующее обследование.",
    "home.process.step2_title": "Первичное интервью",
    "home.process.step2_desc":
      "Сеанс продолжительностью один час для сбора клинического анамнеза, текущих жалоб и контекста вашей жизни. Совместно определяем направления обследования.",
    "home.process.step3_title": "Проведение тестов",
    "home.process.step3_desc":
      "От трёх до пяти часов тестирования, при необходимости разбитого на два сеанса. Валидированные когнитивные тесты, охватывающие память, внимание, исполнительные функции, речь, праксис и социальное познание в зависимости от показаний.",
    "home.process.step4_title": "Заключение",
    "home.process.step4_desc":
      "Сеанс продолжительностью один час для представления результатов. Подробный письменный отчёт направляется лечащему врачу с вашего согласия.",

    "home.languages.title": "Три языка приёма",
    "home.languages.fr": "Français — основной язык кабинета и составления заключений.",
    "home.languages.ru": "Русский — родной язык практикующего специалиста, возможны приём и проведение тестов.",
    "home.languages.en": "English — собеседования и обследования на английском возможны по запросу.",

    "home.prescribers.title": "Вы врач или направляющий специалист",
    "home.prescribers.desc":
      "Образец направления, пример заключения и подробный порядок направления пациентов.",
    "home.prescribers.cta": "Раздел для направляющих специалистов",

    "neuropsychologie.title":
      "Нейропсихология и нейропсихологическое обследование - Екатерина Волова",
    "neuropsychologie.description":
      "Что такое нейропсихология, нейропсихологическое обследование и когнитивная реабилитация? Объяснения Екатерины Воловой, психолога-нейропсихолога в 16 округе Парижа.",

    "about.title":
      "Обо мне - Екатерина Волова, психолог-нейропсихолог",
    "about.description":
      "Представление Екатерины Воловой, психолога, специалиста по нейропсихологии. Определение нейропсихологического обследования, образование в Университете Paris 8, опыт работы в больнице Fondation Adolphe de Rothschild.",

    "about.eyebrow": "Обо мне",

    "about.section1_title": "Что такое нейропсихология?",
    "about.section1_p1":
      "Нейропсихология - это дисциплина, изучающая взаимосвязь между мозгом, когнитивными функциями и поведением. Она позволяет лучше понять мнестические, аттенционные, речевые, исполнительные и эмоциональные трудности, в частности при неврологических, психиатрических или нейроразвитийных патологиях.",

    "about.section2_title": "Что такое нейропсихологическое обследование?",
    "about.section2_p1":
      "Нейропсихологическое обследование - это подробная оценка когнитивного, поведенческого и психоэмоционального функционирования человека в определённый момент времени. Оно направлено на ответ на конкретный клинический вопрос: объективировать и охарактеризовать когнитивные жалобы, помочь в дифференциальной диагностике, оценить динамику нарушений или выявить функциональные последствия наблюдаемых трудностей. Оно предназначено для детей, подростков, взрослых и пожилых людей с когнитивными, психоэмоциональными или поведенческими нарушениями, в частности при неврологических, нейроразвитийных или психиатрических патологиях, с целью лучше понять их функционирование и определить направление помощи.",
    "about.section2_steps_intro": "Три этапа нейропсихологического обследования :",
    "about.section2_step1_title": "Клиническое интервью - <u>обязательный этап</u>",
    "about.section2_step1_desc":
      "Первичная консультация продолжительностью около часа, позволяющая собрать клиническую историю пациента, причину обращения и повседневные трудности для определения направления нейропсихологической оценки.",
    "about.section2_step2_title": "Проведение тестов",
    "about.section2_step2_desc":
      "Около трёх часов проведения стандартизированных тестов, подобранных с учётом клинического запроса, возраста и социокультурного уровня пациента, для получения адаптированной и углублённой оценки когнитивного функционирования.",
    "about.section2_step3_title": "Заключение",
    "about.section2_step3_desc":
      "Консультация продолжительностью около часа, позволяющая представить и объяснить результаты нейропсихологического обследования и ответить на вопросы. По итогам обследования выдаётся подробное письменное заключение и предложения по дальнейшему сопровождению.",

    "about.section3_title": "Образование и опыт",
    "about.section3_intro":
      "Внесена в Национальный реестр специалистов здравоохранения Франции под номером RPPS : 10111377833. Профессия регулируется статьёй 44 закона № 85-772 от 25 июля 1985 года (защищённое звание психолога).",

    "about.experience_title": "Профессиональный опыт",

    "about.exp_1_dates": "Июль 2025 - июнь 2026",
    "about.exp_1_title": "Больница Fondation Adolphe de Rothschild, отделения неврологии и нейрохирургии",
    "about.exp_1_desc": "Проведение нейропсихологических обследований пациентов с различными неврологическими патологиями (болезнь Альцгеймера, болезнь Паркинсона, лобно-височная дегенерация, болезнь с тельцами Леви, рассеянный склероз, мультисистемная атрофия, эпилепсия, прогрессирующий супрануклеарный паралич, инсульт...), предоперационных нейропсихологических обследований (перед глубокой стимуляцией мозга при болезни Паркинсона и перед шунтированием при нормотензивной гидроцефалии) и участие в мультидисциплинарных совещаниях.",

    "about.exp_2_dates": "Октябрь 2024 - май 2025",
    "about.exp_2_title": "Hôpital Fondation Adolphe de Rothschild, отделение неврологии (стажировка 500ч)",
    "about.exp_2_desc": "Проведение нейропсихологических обследований, участие в мультидисциплинарных совещаниях и в программах терапевтического обучения пациентов.",

    "about.exp_3_dates": "Февраль - апрель 2024",
    "about.exp_3_title": "CH de Versailles, Hôpital Richaud, гериатрический дневной стационар (стажировка 280ч)",
    "about.exp_3_desc": "Проведение нейропсихологических обследований пожилых пациентов (> 65 лет) с различными патологиями (онкология, нарушения памяти, болезнь Паркинсона, инсульт, нарушения равновесия), проведение занятий по когнитивной стимуляции и участие в мультидисциплинарных совещаниях.",

    "about.exp_4_dates": "Февраль - март 2023",
    "about.exp_4_title": "EHPAD L'Ensolelhada (стажировка 70ч)",
    "about.exp_4_desc": "Наблюдение за работой нейропсихолога с пожилыми людьми с нейродегенеративными заболеваниями на поздних стадиях и проведение занятий.",

    "about.exp_5_dates": "Сентябрь - декабрь 2019",
    "about.exp_5_title": "Фонды Malteser Hilfsdienst и Родительский Мост (стажировки)",
    "about.exp_5_desc": "Ассистирование клиническим психологам при проведении интервью с семьями в кризисных ситуациях.",

    "about.education_title": "Образование",

    "about.edu_1_dates": "2023 - 2025",
    "about.edu_1_title": "Университет Paris 8 Vincennes-Saint Denis - Магистратура по психологии,<br />направление Нейропсихология",
    "about.edu_1_desc": "<ul style='list-style:disc;padding-left:1.2em;color:var(--color-accent);font-size:0.875rem;text-align:justify'><li><span style='color:var(--color-ink-soft)'>Диссертация Master 2 : Изменения когнитивного функционирования и качества жизни у пациентов с болезнью Паркинсона при глубокой стимуляции мозга.</span></li><li><span style='color:var(--color-ink-soft)'>Диссертация Master 1 : Функции эпизодического мышления о будущем при нормальном старении.</span></li></ul>",

    "about.edu_2_dates": "2020 - 2023",
    "about.edu_2_title": "Université Montpellier III Paul Valéry - Бакалавриат по психологии",
    "about.edu_2_desc": "",

    "about.edu_3_dates": "2019 - 2020",
    "about.edu_3_title": "Санкт-Петербургский государственный университет - Специализация по клинической психологии",
    "about.edu_3_desc": "",

    "about.edu_4_dates": "2014 - 2018",
    "about.edu_4_title": "Санкт-Петербургский государственный университет - Бакалавриат по экономике",
    "about.edu_4_desc": "",

    "about.languages_note":
      "Обследование проводится на французском, русском и английском языках.",

    "about.cta": "Записаться на консультацию",

    "legal.title":
      "Правовая информация и политика конфиденциальности - Екатерина Волова",
    "legal.description":
      "Правовая информация, условия использования и политика конфиденциальности сайта ekaterina-volova.com.",
    "legal.h1": "Правовая информация и политика конфиденциальности",

    "legal.editor_title": "Издатель сайта",
    "legal.editor_intro":
      "Сайт ekaterina-volova.com издается Екатериной Воловой, психологом, специалистом по нейропсихологии.",

    "legal.editor_label_rpps": "RPPS",
    "legal.editor_label_siret": "SIRET",
    "legal.editor_label_ape": "Код APE",
    "legal.editor_label_address": "Кабинет",
    "legal.editor_label_phone": "Телефон",
    "legal.editor_label_email": "Email",

    "legal.director_title": "Директор публикации",

    "legal.host_title": "Хостинг",
    "legal.host_content":
      "Сайт размещен на серверах Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, США.",

    "legal.ip_title": "Интеллектуальная собственность",
    "legal.ip_content":
      "Все содержание данного сайта (тексты, изображения, графика, логотип, структура) является исключительной собственностью Екатерины Воловой, если не указано иное. Любое воспроизведение, представление или распространение, полностью или частично, содержания данного сайта на любом носителе или любым способом запрещено без предварительного письменного разрешения Екатерины Воловой.",

    "legal.data_title": "Персональные данные и файлы cookie",
    "legal.data_no_collection":
      "Данный сайт не хранит никаких персональных данных. Сообщения, отправленные через форму вопроса, передаются напрямую по электронной почте Екатерине Воловой через сервис отправки Resend (Resend, Inc., США): они не сохраняются на сайте и не используются в иных целях. Форма защищена от роботов с помощью Cloudflare Turnstile, который не использует файлы cookie. Файлы cookie и рекламные трекеры не используются.",
    "legal.data_analytics":
      "Измерение посещаемости осуществляется с помощью Cloudflare Web Analytics - инструмента, уважающего конфиденциальность, который не использует файлы cookie и не собирает идентифицирующие персональные данные. Согласие пользователя не требуется в соответствии с рекомендациями CNIL.",
    "legal.data_rights":
      "В соответствии с Общим регламентом по защите данных (RGPD) и законом об информатике и свободах от 6 января 1978 года с изменениями, вы имеете право на доступ, исправление и удаление касающихся вас данных. Для реализации этого права обращайтесь: volova.neuropsy@gmail.com.",

    "legal.liability_title": "Ответственность",
    "legal.liability_content":
      "Екатерина Волова прилагает все усилия для предоставления точной и актуальной информации на данном сайте. Тем не менее, она не может гарантировать точность, полноту или актуальность распространяемой информации. Содержание данного сайта предоставляется в информационных целях и не может заменить медицинскую консультацию или профессиональную помощь.",

    "legal.law_title": "Применимое право",
    "legal.law_content":
      "Настоящая правовая информация регулируется французским законодательством. В случае спора компетентными являются исключительно французские суды.",

    "a11y.skip": "Перейти к содержанию",

    "notfound.title": "Страница не найдена",
    "notfound.text":
      "Страница, которую вы ищете, не существует или была перемещена.",
    "notfound.cta": "Вернуться на главную",
  },
  en: {
    "nav.home": "Home",
    "nav.neuropsychologie": "Neuropsychology",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.office": "Office",
    "nav.contact": "Contact",
    "nav.legal": "Legal notice",

    "footer.rpps": "RPPS 10111377833",
    "footer.profession": "Psychologist specialising in neuropsychology",
    "footer.office_address": "14 rue Nicolo, 75116 Paris",
    "footer.copyright": "© 2026 Ekaterina Volova. All rights reserved.",
    "footer.legal_link": "Legal notice and privacy policy",

    "cta.book": "Book a consultation",
    "contact.title": "Contact - Ekaterina Volova, neuropsychologist",
    "contact.description": "Get in touch with Ekaterina Volova's neuropsychology practice in Paris 16th: phone, email, address and question form. Consultations in French, Russian and English.",
    "contact.heading": "Contact",
    "contact.coords": "Contact details",
    "contact.form_heading": "A question?",
    "contact.form_intro": "For any question or to request an appointment, write to me directly.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Your question",
    "contact.send": "Send",
    "cabinet.pmr": "Ground-floor practice, wheelchair accessible",
    "cabinet.hours": "Every day (including weekends), 10:00 - 19:00",
    "contact.sending": "Sending...",
    "contact.success":
      "Your message has been sent. You will receive a reply at the address provided.",
    "contact.error":
      "Automatic sending failed: your email client will open with your message pre-filled.",
    "cta.book_short": "Book",
    "cta.contact": "Get in touch",
    "cta.read_more": "Learn more",

    "lang.switch_to": "Change language",
    "nav.languages": "Languages",

    "header.tagline": "Neuropsychologist in Paris",
    "header.menu_open": "Open menu",
    "header.menu_close": "Close menu",

    "footer.cabinet_label": "Office",
    "footer.contact_label": "Book an appointment",
    "footer.opening_note": "Office opens on 15 June 2026",

    "site.title": "Ekaterina Volova - Neuropsychologist in Paris 16th",
    "site.description":
      "Neuropsychology practice in Paris 16th. Diagnostic assessments, cognitive remediation and stimulation, 6-month follow-up. Adults 16 and older, consultations in French, Russian and English.",

    "home.h1": "Ekaterina Volova",
    "home.lede": "Neuropsychologist",
    "home.cta_primary": "Book an appointment",
    "home.cta_secondary": "Book a consultation",

    "home.hero.line1_pre": "Consultations for ",
    "home.hero.line1_em": "adults aged 16 and over",
    "home.hero.line2": "14 rue Nicolo, 75116 Paris",

    "home.who.title": "Who I see",
    "home.who.intro":
      "The practice mainly welcomes an adult population, aged 16 and older, for diagnostic neuropsychological assessments and accompaniment in cognitive remediation or stimulation.",
    "home.who.indications_title": "Main indications",
    "home.who.indications":
      "Neurodegenerative diseases (Alzheimer's disease, Parkinson's disease, dementia with Lewy bodies, frontotemporal degeneration, etc.). Neurological conditions (multiple sclerosis, epilepsy, stroke sequelae, traumatic brain injury). Psychiatric disorders with or without cognitive impact (depression, anxiety, post-traumatic disorders, eating disorders, addictions). Adult ADHD.",
    "home.who.note":
      "The practice does not offer long-term psychotherapeutic follow-up and does not work in general French-speaking paediatrics. An exception is made for Russian-speaking children, as this segment is poorly served in the Île-de-France region.",

    "prestations.title": "Services and fees - Ekaterina Volova, neuropsychologist",
    "prestations.description": "Fees for neuropsychological assessments, cognitive remediation and cognitive behavioural therapy. Neuropsychology practice in Paris 16th.",

    "prestations.entretien_title": "Initial clinical interview (mandatory)",
    "prestations.entretien_desc": "Initial consultation to gather the patient's clinical history (medical and family background), the reason for consultation and everyday difficulties in order to guide the neuropsychological assessment.",
    "prestations.entretien_price": "€70",

    "prestations.bilans_title": "Neuropsychological assessments for adults (aged 16 and over)",
    "prestations.bilan_1": "Comprehensive neuropsychological assessment",
    "prestations.bilan_1_desc": "In-depth assessment of cognitive functioning using various standardised neuropsychological tests exploring memory, attention, executive functions, language, visuoconstructive, visuospatial, visuoperceptive and praxic abilities, as well as social cognition. This assessment aims to objectify and characterise the difficulties reported by the patient and to clarify the observed cognitive profile.",
    "prestations.bilan_1_price": "€450",
    "prestations.bilan_2": "IQ neuropsychological assessment",
    "prestations.bilan_2_desc": "Assessment of overall intellectual functioning using standardised tools such as the WAIS-IV, exploring different cognitive indices: verbal comprehension, perceptual reasoning, working memory and processing speed. This assessment can be carried out in the context of questions about high intellectual potential, as well as in the presence of cognitive difficulties.",
    "prestations.bilan_2_price": "€550",
    "prestations.bilan_3": "Attentional assessment in the context of ADHD",
    "prestations.bilan_3_desc": "Assessment of attentional and executive functions using standardised neuropsychological tests and validated clinical scales, in the context of a suspected attention deficit hyperactivity disorder (ADHD) in adolescents aged 16 and over and adults.",
    "prestations.bilan_3_price": "€550",
    "prestations.bilan_4": "Follow-up assessment",
    "prestations.bilan_4_desc": "Assessment carried out some time after an initial neuropsychological assessment (minimum 6 months) to evaluate the evolution of cognitive functioning over time. The follow-up assessment compares performance with previous evaluations, objectifies any changes in difficulties and adapts care recommendations based on the observed cognitive profile.",
    "prestations.bilan_4_price": "€200",

    "prestations.remediation_title": "Cognitive remediation and stimulation",
    "prestations.remediation_desc": "45-minute sessions aimed at exercising and stimulating specific cognitive functions such as memory, attention, executive functions or processing speed, using exercises tailored to the patient's profile and difficulties. The goal is to strengthen preserved cognitive abilities, develop compensatory strategies and improve everyday functioning.",
    "prestations.remediation_price": "€65",

    "home.intro.title": "Who am I?",
    "home.intro.text":
      "A psychologist specialising in neuropsychology, I support adults in assessing and understanding their cognitive and psycho-affective difficulties through in-depth neuropsychological assessments.",
    "home.intro.spec_1": "Neuropsychological assessment",
    "home.intro.spec_2": "Memory disorders",
    "home.intro.spec_3": "Language disorders",
    "home.intro.spec_4": "Attention disorders",
    "home.intro.spec_5": "Stroke",
    "home.intro.spec_6": "Neurodegenerative diseases",
    "home.intro.spec_7": "Multiple sclerosis",
    "home.intro.spec_8": "Adult ADHD",
    "home.intro.spec_9": "High intellectual potential",
    "home.intro.spec_10": "IQ",
    "home.intro.spec_11": "Normal pressure hydrocephalus",
    "home.intro.cta": "More about my background",

    "home.tarifs.title": "Fees",
    "home.tarifs.cta": "See full service details",
    "home.price.bilan": "Neuropsychological assessment",
    "home.price.diva": "ADHD diagnostic interview (DIVA-5)",
    "home.price.diva_price": "€550",
    "home.price.entretien": "Initial clinical interview (mandatory)",
    "home.price.attention": "Attentional assessment in the context of ADHD",
    "home.price.iq": "IQ neuropsychological assessment",
    "home.price.suivi": "Follow-up assessment",
    "home.cabinet.title": "The practice",
    "home.cabinet.photo_placeholder": "Photo coming soon",
    "home.cabinet.map_link": "View on map",

    "home.remediation.title": "What is cognitive remediation and stimulation?",
    "home.remediation.desc": "Cognitive remediation and stimulation are interventions aimed at exercising various cognitive functions such as memory, attention, executive functions or language, using exercises tailored to the patient's profile. Their goal is to strengthen preserved abilities, develop compensatory strategies and support the maintenance of everyday independence.",

    "home.services.title": "Services",
    "home.services.s1_title": "Diagnostic assessment",
    "home.services.s1_desc":
      "In-depth neuropsychological evaluation, from clinical history-taking to written and oral feedback. Includes an initial interview, test administration, analysis of results and a detailed report sent to the referring physician.",
    "home.services.s1_price": "€450 to €600",
    "home.services.s2_title": "6-month follow-up assessment",
    "home.services.s2_desc":
      "Re-evaluation of cognitive function some time after the initial assessment. Same tools as the diagnostic assessment, focus on evolution.",
    "home.services.s2_price": "€200",
    "home.services.s3_title": "Cognitive remediation and stimulation",
    "home.services.s3_desc":
      "Individual sessions targeting memory, attention, executive function or language. Indications follow French HAS recommendations: chronic post-stroke, adult ADHD, mild traumatic brain injury, age-related neurocognitive disorders.",
    "home.services.s3_price": "€60 to €70 per session",
    "home.services.s4_title": "Cognitive behavioural therapy",
    "home.services.s4_desc":
      "CBT approach under supervision from April 2027, as part of the AFTCC accelerated training. Indications: anxiety, depression, post-traumatic disorders, eating disorders, addictions, adult ADHD.",
    "home.services.s4_price": "€75 per session",
    "home.services.note_supervised":
      "Supervised practice from April 2027",
    "home.services.cta": "See full rates and consultation process",

    "home.process.title": "How an assessment unfolds",
    "home.process.step1_title": "First contact",
    "home.process.step1_desc":
      "You reach out to formulate your request, by form or medical referral. A preliminary exchange clarifies the reason and helps plan the appropriate assessment.",
    "home.process.step2_title": "Initial interview",
    "home.process.step2_desc":
      "A one-hour session to gather your clinical history, current concerns and life context. Together we define the focus of the assessment.",
    "home.process.step3_title": "Test administration",
    "home.process.step3_desc":
      "Three to five hours of testing, splittable across two sessions if needed. Validated cognitive tests covering memory, attention, executive function, language, praxis and social cognition depending on indications.",
    "home.process.step4_title": "Feedback",
    "home.process.step4_desc":
      "A one-hour session to present the results. A detailed written report is sent to the referring physician with your consent.",

    "home.languages.title": "Three languages of practice",
    "home.languages.fr": "Français — main language of the practice and of written reports.",
    "home.languages.ru": "Русский — practitioner's native language, consultations and test administration possible.",
    "home.languages.en": "English — interviews and assessments in English available on request.",

    "home.prescribers.title": "You are a physician or referrer",
    "home.prescribers.desc":
      "Referral letter template, sample assessment report and detailed referral pathway.",
    "home.prescribers.cta": "Referrers section",

    "neuropsychologie.title":
      "Neuropsychology and the neuropsychological assessment - Ekaterina Volova",
    "neuropsychologie.description":
      "What is neuropsychology, the neuropsychological assessment and cognitive remediation? Explained by Ekaterina Volova, psychologist specialising in neuropsychology in Paris 16th.",

    "about.title":
      "About - Ekaterina Volova, psychologist specialising in neuropsychology",
    "about.description":
      "Introduction to Ekaterina Volova, psychologist specialising in neuropsychology. Definition of the neuropsychological assessment, university training at Paris 8, experience at the Adolphe de Rothschild Foundation Hospital.",

    "about.eyebrow": "About",

    "about.section1_title": "What is neuropsychology?",
    "about.section1_p1":
      "Neuropsychology is a discipline that studies the relationships between the brain, cognitive functions and behaviour. It helps to better understand memory, attentional, language, executive and emotional difficulties, particularly in the context of neurological, psychiatric or neurodevelopmental conditions.",

    "about.section2_title": "What is a neuropsychological assessment?",
    "about.section2_p1":
      "A neuropsychological assessment is a detailed evaluation of a person's cognitive, behavioural and psycho-affective functioning at a given point in time. It aims to answer a precise clinical question: objectifying and characterising a cognitive complaint, guiding differential diagnosis, tracking the evolution of difficulties or identifying the functional impact of observed problems. It is intended for adolescents aged 16 and over, adults and older people with cognitive, psycho-affective or behavioural difficulties, particularly in the context of neurological, neurodevelopmental or psychiatric conditions, in order to better understand their functioning and guide care.",
    "about.section2_steps_intro": "The three stages of the neuropsychological assessment:",
    "about.section2_step1_title": "Clinical interview - <u>mandatory step</u>",
    "about.section2_step1_desc":
      "An initial consultation of approximately one hour to gather the patient's clinical history, the reason for referral and everyday difficulties in order to guide the neuropsychological assessment.",
    "about.section2_step2_title": "Test administration",
    "about.section2_step2_desc":
      "Approximately three hours of standardised tests selected according to the clinical question, the patient's age and sociocultural level, in order to obtain an adapted and thorough evaluation of cognitive functioning.",
    "about.section2_step3_title": "Feedback",
    "about.section2_step3_desc":
      "A consultation of approximately one hour to present and explain the results of the neuropsychological assessment and answer questions. A detailed written report along with care recommendations are provided at the end of the assessment.",

    "about.section3_title": "Training and experience",
    "about.section3_intro":
      "Listed in the French national directory of health professionals under RPPS number: 10111377833. A regulated profession under article 44 of French law no. 85-772 of 25 July 1985 (protected title of psychologist).",

    "about.experience_title": "Professional experience",

    "about.exp_1_dates": "July 2025 - June 2026",
    "about.exp_1_title": "Adolphe de Rothschild Foundation Hospital, Departments of Neurology and Neurosurgery",
    "about.exp_1_desc": "Neuropsychological assessments of patients with various neurological conditions (Alzheimer's disease, Parkinson's disease, frontotemporal lobar degeneration, Lewy body disease, multiple sclerosis, multiple system atrophy, epilepsy, progressive supranuclear palsy, stroke...), preoperative neuropsychological assessments (before deep brain stimulation for Parkinson's disease and before shunting for normal pressure hydrocephalus) and participation in multidisciplinary meetings.",

    "about.exp_2_dates": "October 2024 - May 2025",
    "about.exp_2_title": "Hôpital Fondation Adolphe de Rothschild, Department of Neurology (500h internship)",
    "about.exp_2_desc": "Neuropsychological assessments, participation in multidisciplinary meetings and therapeutic patient education workshops.",

    "about.exp_3_dates": "February - April 2024",
    "about.exp_3_title": "CH de Versailles, Hôpital Richaud, geriatric day hospital (280h internship)",
    "about.exp_3_desc": "Neuropsychological assessments of elderly patients (> 65 years) with various conditions (oncology, memory disorders, Parkinson's disease, stroke, balance disorders), cognitive stimulation workshops and participation in multidisciplinary meetings.",

    "about.exp_4_dates": "February - March 2023",
    "about.exp_4_title": "EHPAD L'Ensolelhada (70h internship)",
    "about.exp_4_desc": "Observation of neuropsychological work with elderly patients with advanced-stage neurodegenerative diseases and workshop facilitation.",

    "about.exp_5_dates": "September - December 2019",
    "about.exp_5_title": "Malteser Hilfsdienst and Roditelsky Most foundations (Internships)",
    "about.exp_5_desc": "Assistance to clinical psychologists during interviews with families in crisis.",

    "about.education_title": "Education",

    "about.edu_1_dates": "2023 - 2025",
    "about.edu_1_title": "Université Paris 8 Vincennes-Saint Denis - Master's in Psychology,<br />Neuropsychology track",
    "about.edu_1_desc": "<ul style='list-style:disc;padding-left:1.2em;color:var(--color-accent);font-size:0.875rem;text-align:justify'><li><span style='color:var(--color-ink-soft)'>Master 2 thesis: Changes in cognitive functioning and quality of life in Parkinson's disease patients receiving deep brain stimulation.</span></li><li><span style='color:var(--color-ink-soft)'>Master 1 thesis: Functions of episodic future thinking in normal ageing.</span></li></ul>",

    "about.edu_2_dates": "2020 - 2023",
    "about.edu_2_title": "Université Montpellier III Paul Valéry - Bachelor's degree in Psychology",
    "about.edu_2_desc": "",

    "about.edu_3_dates": "2019 - 2020",
    "about.edu_3_title": "Saint Petersburg State University - Specialisation in Clinical Psychology",
    "about.edu_3_desc": "",

    "about.edu_4_dates": "2014 - 2018",
    "about.edu_4_title": "Saint Petersburg State University - Bachelor's degree in Economics",
    "about.edu_4_desc": "",

    "about.languages_note":
      "Assessments are conducted in French, Russian and English.",

    "about.cta": "Book a consultation",

    "legal.title":
      "Legal notice and privacy policy - Ekaterina Volova",
    "legal.description":
      "Legal notice, terms of use and privacy policy for ekaterina-volova.com.",
    "legal.h1": "Legal notice and privacy policy",

    "legal.editor_title": "Site publisher",
    "legal.editor_intro":
      "The website ekaterina-volova.com is published by Ekaterina Volova, psychologist specialising in neuropsychology.",

    "legal.editor_label_rpps": "RPPS",
    "legal.editor_label_siret": "SIRET",
    "legal.editor_label_ape": "APE code",
    "legal.editor_label_address": "Office",
    "legal.editor_label_phone": "Phone",
    "legal.editor_label_email": "Email",

    "legal.director_title": "Publication director",

    "legal.host_title": "Hosting provider",
    "legal.host_content":
      "The website is hosted by Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, United States.",

    "legal.ip_title": "Intellectual property",
    "legal.ip_content":
      "All content on this website (text, images, graphics, logo, structure) is the exclusive property of Ekaterina Volova, unless otherwise stated. Any reproduction, representation or distribution, in whole or in part, of the content of this website on any medium or by any means is prohibited without the prior written consent of Ekaterina Volova.",

    "legal.data_title": "Personal data and cookies",
    "legal.data_no_collection":
      "This website does not store any personal data. Messages sent via the question form are forwarded directly by email to Ekaterina Volova using the Resend sending service (Resend, Inc., United States): they are neither stored on the website nor used for any other purpose. The form is protected against robots by Cloudflare Turnstile, which does not set any cookies. No cookies or advertising trackers are used.",
    "legal.data_analytics":
      "Audience measurement is carried out by Cloudflare Web Analytics, a privacy-respecting tool that does not use cookies and does not collect any personally identifiable data. No user consent is required in accordance with CNIL recommendations.",
    "legal.data_rights":
      "In accordance with the General Data Protection Regulation (GDPR) and the French Data Protection Act of 6 January 1978 as amended, you have the right to access, rectify and delete data concerning you. To exercise this right, contact: volova.neuropsy@gmail.com.",

    "legal.liability_title": "Liability",
    "legal.liability_content":
      "Ekaterina Volova endeavours to provide accurate and up-to-date information on this website. However, she cannot guarantee the accuracy, completeness or currency of the information provided. The content of this website is for informational purposes only and does not constitute medical advice or a substitute for professional consultation.",

    "legal.law_title": "Applicable law",
    "legal.law_content":
      "These legal notices are governed by French law. In the event of a dispute, the French courts shall have sole jurisdiction.",

    "a11y.skip": "Skip to content",

    "notfound.title": "Page not found",
    "notfound.text":
      "The page you are looking for does not exist or has been moved.",
    "notfound.cta": "Back to home",
  },
} as const;

export type TranslationKey = keyof (typeof ui)["fr"];
