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

    "home.banner": "Le cabinet ouvre ses portes le 15 juin 2026.",
    "home.h1": "Cabinet de neuropsychologie à Paris 11e",
    "home.lede":
      "Bilans neuropsychologiques diagnostiques, remédiation et stimulation cognitive pour adultes. Cabinet d'Ekaterina Volova, psychologue spécialisée en neuropsychologie, à Paris 11e. Consultations en français, russe et anglais.",
    "home.cta_primary": "Prendre rendez-vous",
    "home.cta_secondary": "Découvrir les prestations",

    "home.who.title": "Pour qui je consulte",
    "home.who.intro":
      "Le cabinet accueille principalement une population adulte, à partir de 16 ans, dans le cadre de bilans neuropsychologiques diagnostiques et d'un accompagnement de remédiation ou de stimulation cognitive.",
    "home.who.indications_title": "Indications principales",
    "home.who.indications":
      "Maladies neurodégénératives (maladie d'Alzheimer, maladie de Parkinson, maladie à corps de Lewy, dégénérescence fronto-temporale, etc.). Pathologies neurologiques (sclérose en plaques, épilepsie, séquelles d'AVC, traumatismes crâniens). Troubles psychiatriques avec ou sans impact cognitif (dépression, anxiété, troubles post-traumatiques, troubles du comportement alimentaire, addictions). TDAH adulte.",
    "home.who.note":
      "Le cabinet ne propose pas de suivi psychothérapeutique long et n'exerce pas en pédiatrie générale francophone. Une exception est faite pour les bilans d'enfants russophones, ce segment étant peu couvert en Île-de-France.",

    "home.services.title": "Quatre prestations",
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

    "home.banner": "Кабинет открывает свои двери 15 июня 2026 года.",
    "home.h1": "Кабинет нейропсихологии в Париже, 11 округ",
    "home.lede":
      "Диагностические нейропсихологические обследования, когнитивная реабилитация и стимуляция для взрослых. Кабинет Екатерины Воловой, психолога-специалиста по нейропсихологии, в 11 округе Парижа. Приём на французском, русском и английском языках.",
    "home.cta_primary": "Записаться на приём",
    "home.cta_secondary": "Ознакомиться с услугами",

    "home.who.title": "Кому я могу помочь",
    "home.who.intro":
      "Кабинет принимает преимущественно взрослых пациентов с 16 лет в рамках диагностических нейропсихологических обследований и сопровождения по программам когнитивной реабилитации и стимуляции.",
    "home.who.indications_title": "Основные показания",
    "home.who.indications":
      "Нейродегенеративные заболевания (болезнь Альцгеймера, болезнь Паркинсона, болезнь с тельцами Леви, лобно-височная дегенерация и др.). Неврологические патологии (рассеянный склероз, эпилепсия, последствия инсульта, черепно-мозговые травмы). Психиатрические расстройства с когнитивным компонентом или без него (депрессия, тревожные расстройства, посттравматические расстройства, расстройства пищевого поведения, зависимости). СДВГ у взрослых.",
    "home.who.note":
      "Кабинет не проводит длительную психотерапевтическую работу и не специализируется на детской франкоязычной практике. Исключение составляют обследования русскоязычных детей, так как этот сегмент мало охвачен в регионе Иль-де-Франс.",

    "home.services.title": "Четыре направления",
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

    "home.banner": "The practice opens on 15 June 2026.",
    "home.h1": "Neuropsychology practice in Paris 11th",
    "home.lede":
      "Diagnostic neuropsychological assessments, cognitive remediation and stimulation for adults. Practice of Ekaterina Volova, psychologist specialising in neuropsychology, in the 11th arrondissement of Paris. Consultations in French, Russian and English.",
    "home.cta_primary": "Book an appointment",
    "home.cta_secondary": "Discover the services",

    "home.who.title": "Who I see",
    "home.who.intro":
      "The practice mainly welcomes an adult population, aged 16 and older, for diagnostic neuropsychological assessments and accompaniment in cognitive remediation or stimulation.",
    "home.who.indications_title": "Main indications",
    "home.who.indications":
      "Neurodegenerative diseases (Alzheimer's disease, Parkinson's disease, dementia with Lewy bodies, frontotemporal degeneration, etc.). Neurological conditions (multiple sclerosis, epilepsy, stroke sequelae, traumatic brain injury). Psychiatric disorders with or without cognitive impact (depression, anxiety, post-traumatic disorders, eating disorders, addictions). Adult ADHD.",
    "home.who.note":
      "The practice does not offer long-term psychotherapeutic follow-up and does not work in general French-speaking paediatrics. An exception is made for Russian-speaking children, as this segment is poorly served in the Île-de-France region.",

    "home.services.title": "Four offerings",
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
  },
} as const;

export type TranslationKey = keyof (typeof ui)["fr"];
