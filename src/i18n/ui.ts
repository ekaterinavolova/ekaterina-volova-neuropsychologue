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
    "footer.office_address": "14 rue Nicolo, 75116 Paris",
    "footer.copyright": "© 2026 Ekaterina Volova. Tous droits réservés.",
    "footer.legal_link": "Mentions légales & politique de confidentialité",

    "cta.book": "Réserver une consultation",
    "cta.book_short": "Réserver",
    "cta.contact": "Me contacter",
    "cta.read_more": "En savoir plus",

    "lang.switch_to": "Changer de langue",

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

    "about.title":
      "À propos - Ekaterina Volova, psychologue spécialisée en neuropsychologie",
    "about.description":
      "Présentation d'Ekaterina Volova, psychologue spécialisée en neuropsychologie. Définition du bilan neuropsychologique, formation universitaire Paris 8, expérience à l'Hôpital Fondation Adolphe de Rothschild.",

    "about.eyebrow": "À propos",

    "about.section1_title": "Qu'est-ce que la neuropsychologie ?",
    "about.section1_p1":
      "La neuropsychologie est une discipline de la psychologie qui étudie les relations entre le cerveau et les fonctions mentales : mémoire, attention, langage, raisonnement, perception, émotions, comportement. Elle étudie les liens entre les troubles cognitifs, émotionnels et comportementaux et le dysfonctionnement des structures cérébrales.",

    "about.section2_title": "Qu'est-ce qu'un bilan neuropsychologique ?",
    "about.section2_p1":
      "Le bilan neuropsychologique est une évaluation détaillée du fonctionnement cognitif, comportemental et émotionnel d'une personne, à un moment donné de sa vie. Il vise à répondre à une question clinique précise formulée par le médecin prescripteur : caractériser une plainte mnésique, objectiver l'impact d'une pathologie connue, orienter vers un diagnostic différentiel, évaluer l'évolution dans le temps.",
    "about.section2_p2":
      "Il explore plusieurs domaines cognitifs : la mémoire (épisodique, de travail, sémantique), l'attention, les fonctions exécutives (planification, inhibition, flexibilité), le langage, les capacités visuoperceptives et visuoconstructives, la cognition sociale, ainsi que les aspects thymiques et comportementaux.",

    "about.section2_steps_intro": "Le bilan se déroule en trois étapes :",
    "about.section2_step1_title": "Entretien clinique initial",
    "about.section2_step1_desc":
      "Une séance d'environ une heure consacrée au recueil de l'anamnèse, des plaintes actuelles, du contexte de vie et de la demande.",
    "about.section2_step2_title": "Passation des tests",
    "about.section2_step2_desc":
      "Trois à cinq heures de tests standardisés validés scientifiquement, sélectionnés selon les indications cliniques. La passation peut être divisée en deux séances en fonction de la fatigabilité.",
    "about.section2_step3_title": "Restitution",
    "about.section2_step3_desc":
      "Une séance dédiée à la présentation orale des résultats, puis un compte rendu écrit détaillé adressé au médecin prescripteur, avec recommandations cliniques concrètes.",

    "about.section2_p3":
      "Le bilan neuropsychologique s'adresse à toute personne présentant une plainte cognitive, dans un contexte de pathologie neurologique ou psychiatrique, ou face à un changement subjectif inquiétant. Il peut également être proposé en suivi, pour mesurer l'évolution dans le temps.",

    "about.section3_title": "Formation et parcours",
    "about.section3_intro":
      "Inscrite au répertoire national des professionnels de santé sous le numéro RPPS 10111377833. Profession réglementée par l'article 44 de la loi n° 85-772 du 25 juillet 1985 (titre de psychologue protégé).",

    "about.timeline_1_dates": "2023 - 2025",
    "about.timeline_1_title": "Master 2 Neuropsychologie",
    "about.timeline_1_desc": "Université Paris 8 Vincennes-Saint Denis",

    "about.timeline_2_dates": "2025 - 2026",
    "about.timeline_2_title": "Hôpital Fondation Adolphe de Rothschild",
    "about.timeline_2_desc":
      "Fédération de Neurologie, Unité Cognition et Neurovision Adulte",

    "about.timeline_3_dates": "Dès octobre 2026",
    "about.timeline_3_title": "Formation TCC accélérée",
    "about.timeline_3_desc":
      "AFTCC - Association Française de Thérapie Cognitive et Comportementale",

    "about.languages_note":
      "Pratique du bilan en français, en russe (langue maternelle) et en anglais (niveau C1).",

    "about.cta": "Réserver une consultation",
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
    "footer.office_address": "14 rue Nicolo, 75116 Paris",
    "footer.copyright": "© 2026 Екатерина Волова. Все права защищены.",
    "footer.legal_link": "Правовая информация и политика конфиденциальности",

    "cta.book": "Записаться на консультацию",
    "cta.book_short": "Записаться",
    "cta.contact": "Связаться со мной",
    "cta.read_more": "Подробнее",

    "lang.switch_to": "Сменить язык",

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

    "about.title":
      "Обо мне - Екатерина Волова, психолог-нейропсихолог",
    "about.description":
      "Представление Екатерины Воловой, психолога, специалиста по нейропсихологии. Определение нейропсихологического обследования, образование в Университете Paris 8, опыт работы в больнице Fondation Adolphe de Rothschild.",

    "about.eyebrow": "Обо мне",

    "about.section1_title": "Что такое нейропсихология?",
    "about.section1_p1":
      "Нейропсихология - раздел психологии, изучающий взаимосвязь между мозгом и психическими функциями: памятью, вниманием, речью, мышлением, восприятием, эмоциями и поведением. Она изучает связи между когнитивными, эмоциональными и поведенческими нарушениями и дисфункцией структур головного мозга.",

    "about.section2_title": "Что такое нейропсихологическое обследование?",
    "about.section2_p1":
      "Нейропсихологическое обследование - это подробная оценка когнитивного, поведенческого и эмоционального функционирования человека в определённый момент его жизни. Оно направлено на ответ на конкретный клинический вопрос, сформулированный направляющим врачом: охарактеризовать жалобы на память, объективировать влияние известной патологии, помочь в дифференциальной диагностике, оценить динамику во времени.",
    "about.section2_p2":
      "Оно охватывает несколько когнитивных областей: память (эпизодическую, рабочую, семантическую), внимание, исполнительные функции (планирование, торможение, гибкость), речь, зрительно-пространственные и зрительно-конструктивные способности, социальное познание, а также эмоциональные и поведенческие аспекты.",

    "about.section2_steps_intro": "Обследование проходит в три этапа:",
    "about.section2_step1_title": "Первичное клиническое интервью",
    "about.section2_step1_desc":
      "Сеанс продолжительностью около часа, посвящённый сбору анамнеза, текущих жалоб, контекста жизни и формулировке запроса.",
    "about.section2_step2_title": "Проведение тестов",
    "about.section2_step2_desc":
      "От трёх до пяти часов тестирования стандартизированными и научно валидированными методиками, выбранными в соответствии с клиническими показаниями. Тестирование может быть разделено на два сеанса с учётом утомляемости.",
    "about.section2_step3_title": "Заключение",
    "about.section2_step3_desc":
      "Сеанс, посвящённый устному представлению результатов, после чего направляющему врачу передаётся подробное письменное заключение с конкретными клиническими рекомендациями.",

    "about.section2_p3":
      "Нейропсихологическое обследование рекомендуется людям с когнитивными жалобами на фоне неврологической или психиатрической патологии, а также при появлении тревожных субъективных изменений. Оно также может быть предложено в виде контрольного обследования для оценки динамики.",

    "about.section3_title": "Образование и опыт",
    "about.section3_intro":
      "Внесена в Национальный реестр специалистов здравоохранения Франции под номером RPPS 10111377833. Профессия регулируется статьёй 44 закона № 85-772 от 25 июля 1985 года (защищённое звание психолога).",

    "about.timeline_1_dates": "2023 - 2025",
    "about.timeline_1_title": "Магистратура (Master 2), Нейропсихология",
    "about.timeline_1_desc": "Университет Paris 8 Vincennes-Saint Denis",

    "about.timeline_2_dates": "2025 - 2026",
    "about.timeline_2_title": "Больница Fondation Adolphe de Rothschild",
    "about.timeline_2_desc":
      "Отделение неврологии, подразделение когнитивных функций и нейровизуальных нарушений у взрослых",

    "about.timeline_3_dates": "С октября 2026",
    "about.timeline_3_title": "Ускоренное обучение КПТ",
    "about.timeline_3_desc":
      "AFTCC - Французская ассоциация когнитивно-поведенческой терапии",

    "about.languages_note":
      "Обследование проводится на французском, русском (родной язык) и английском (уровень C1).",

    "about.cta": "Записаться на консультацию",
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
    "footer.office_address": "14 rue Nicolo, 75116 Paris",
    "footer.copyright": "© 2026 Ekaterina Volova. All rights reserved.",
    "footer.legal_link": "Legal notice and privacy policy",

    "cta.book": "Book a consultation",
    "cta.book_short": "Book",
    "cta.contact": "Get in touch",
    "cta.read_more": "Learn more",

    "lang.switch_to": "Change language",

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

    "about.title":
      "About - Ekaterina Volova, psychologist specialising in neuropsychology",
    "about.description":
      "Introduction to Ekaterina Volova, psychologist specialising in neuropsychology. Definition of the neuropsychological assessment, university training at Paris 8, experience at the Adolphe de Rothschild Foundation Hospital.",

    "about.eyebrow": "About",

    "about.section1_title": "What is neuropsychology?",
    "about.section1_p1":
      "Neuropsychology is a branch of psychology that studies the relationships between the brain and mental functions: memory, attention, language, reasoning, perception, emotion and behaviour. It studies the links between cognitive, emotional and behavioural disorders and dysfunction of cerebral structures.",

    "about.section2_title": "What is a neuropsychological assessment?",
    "about.section2_p1":
      "A neuropsychological assessment is a detailed evaluation of a person's cognitive, behavioural and emotional functioning at a specific moment in life. Its purpose is to answer a precise clinical question raised by the referring physician: characterising a memory complaint, objectifying the impact of a known condition, supporting differential diagnosis, or measuring change over time.",
    "about.section2_p2":
      "It explores several cognitive domains: memory (episodic, working, semantic), attention, executive function (planning, inhibition, flexibility), language, visuoperceptual and visuoconstructive abilities, social cognition, as well as mood and behavioural aspects.",

    "about.section2_steps_intro": "The assessment unfolds in three stages:",
    "about.section2_step1_title": "Initial clinical interview",
    "about.section2_step1_desc":
      "A one-hour session dedicated to gathering the clinical history, current concerns, life context and specific request.",
    "about.section2_step2_title": "Test administration",
    "about.section2_step2_desc":
      "Three to five hours of standardised, scientifically validated tests, selected according to the clinical indications. Testing can be split across two sessions depending on fatigue.",
    "about.section2_step3_title": "Feedback",
    "about.section2_step3_desc":
      "A session dedicated to the oral presentation of the results, followed by a detailed written report sent to the referring physician with concrete clinical recommendations.",

    "about.section2_p3":
      "A neuropsychological assessment is intended for anyone presenting a cognitive complaint, in the context of a neurological or psychiatric condition, or in response to a worrying subjective change. It can also be proposed as a follow-up to track evolution over time.",

    "about.section3_title": "Training and experience",
    "about.section3_intro":
      "Listed in the French national directory of health professionals under RPPS number 10111377833. A regulated profession under article 44 of French law no. 85-772 of 25 July 1985 (protected title of psychologist).",

    "about.timeline_1_dates": "2023 - 2025",
    "about.timeline_1_title": "Master's degree in Neuropsychology",
    "about.timeline_1_desc": "Université Paris 8 Vincennes-Saint Denis",

    "about.timeline_2_dates": "2025 - 2026",
    "about.timeline_2_title": "Adolphe de Rothschild Foundation Hospital",
    "about.timeline_2_desc":
      "Federation of Neurology, Adult Cognition and Neurovision Unit",

    "about.timeline_3_dates": "From October 2026",
    "about.timeline_3_title": "Accelerated CBT training",
    "about.timeline_3_desc":
      "AFTCC - French Association of Cognitive and Behavioural Therapy",

    "about.languages_note":
      "Assessments are conducted in French, Russian (native language) and English (C1 level).",

    "about.cta": "Book a consultation",
  },
} as const;

export type TranslationKey = keyof (typeof ui)["fr"];
