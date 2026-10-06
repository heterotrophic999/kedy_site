export type ImageContent = {
  src: string;
  alt: string;
  objectPosition: string;
  aspectRatio: `${number}/${number}`;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: ImageContent;
  tag?: string;
  href: string;
  cta: string;
};

export type PackageItem = {
  id: string;
  number: string;
  icon: string;
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  optionsTitle?: string;
  options?: string[];
  gift: string;
  badge?: string;
  buttonLabel: string;
  href: string;
};

export const siteContent = {
  brand: {
    name: "КЕДЫ",
    tagline: "агентство детских праздников",
    logo: {
      src: "/images/brand/kedy-logo-transparent.png",
      alt: "КЕДЫ — организация детских праздников",
    },
  },
  features: {
    showAddons: true,
  },
  navigation: [
    { label: "О нас", href: "#why-us" },
    { label: "Аниматоры", href: "#animators" },
    { label: "Шоу", href: "#shows" },
    { label: "Пакеты", href: "#packages" },
    { label: "Вечеринки", href: "#parties" },
    { label: "Дополнения", href: "#addons" },
    { label: "Контакты", href: "#contacts" },
  ],
  header: {
    cta: "Заказать праздник",
    menuLabel: "Меню",
    openMenuLabel: "Открыть меню",
    closeMenuLabel: "Закрыть меню",
    homeLabel: "КЕДЫ — на главную",
  },
  images: {
    fallback: "/images/fallback.webp",
  },
  hero: {
    title: "Детские праздники в Новосибирске",
    titleLead: "Детские праздники",
    titleAccent: "в Новосибирске",
    description:
      "Детские праздники, которые дети потом обсуждают неделю\nАниматоры, шоу и готовые программы в Новосибирске.\nПодберём праздник под возраст ребёнка и ваш бюджет.",
    primaryCta: { label: "Выбрать программу", href: "#categories" },
    secondaryCta: { label: "Получить консультацию", href: "#contacts" },
    image: {
      src: "/images/hero/hero-pink-animator.webp",
      alt: "Аниматор в розовом костюме с микрофоном проводит детский праздник",
      objectPosition: "center top",
      aspectRatio: "5/4",
    } satisfies ImageContent,
    imageNote: "Эмоции, которые хочется сохранить",
  },
  categoriesIntro: {
    eyebrow: "Выберите формат",
    title: "С чего начнём праздник?",
    description: "Собрали всё самое интересное — от встречи с любимым героем до праздника под ключ.",
  },
  categories: [
    {
      id: "cat-animators",
      title: "Аниматоры",
      description: "Любимые герои оживают",
      href: "#animators",
      image: {
        src: "/images/categories/animators.jpg",
        alt: "Аниматор с праздничным тортом для детей",
        objectPosition: "center 35%",
        aspectRatio: "4/3",
      },
    },
    {
      id: "cat-packages",
      title: "Пакетные предложения",
      description: "Готовый праздник без хлопот",
      href: "#packages",
      image: {
        src: "/images/categories/packages.jpg",
        alt: "Дети и аниматор на праздничной программе",
        objectPosition: "center",
        aspectRatio: "4/3",
      },
    },
    {
      id: "cat-shows",
      title: "Шоу-программы",
      description: "Зрелищно и удивительно",
      href: "#shows",
      image: {
        src: "/images/categories/show-programs.jpg",
        alt: "Яркая шоу-программа для детей",
        objectPosition: "center 40%",
        aspectRatio: "4/3",
      },
    },
    {
      id: "cat-parties",
      title: "Вечеринки",
      description: "Когда обычный праздник уже мал",
      href: "#parties",
      image: {
        src: "/images/categories/parties.jpg",
        alt: "Весёлая вечеринка для детей старше восьми лет",
        objectPosition: "center",
        aspectRatio: "4/3",
      },
    },
    {
      id: "cat-addons",
      title: "Дополнения",
      description: "Ещё больше ярких деталей",
      href: "#addons",
      image: {
        src: "/images/categories/addons-games.jpg",
        alt: "Ведущая рядом с большой игрой в крестики-нолики",
        objectPosition: "center",
        aspectRatio: "4/3",
      },
    },
  ],
  whyUs: {
    eyebrow: "КЕДЫ — это про заботу",
    title: "Почему именно мы?",
    description: "Берём на себя организацию, а вам оставляем самое важное — радоваться вместе с ребёнком.",
  },
  benefits: [
    {
      id: "professionals",
      icon: "sparkles",
      title: "Профессиональные аниматоры",
      description: "Артисты с опытом, которые умеют увлечь и малышей, и ребят постарше.",
      accent: "pink",
    },
    {
      id: "personal",
      icon: "heart",
      title: "Индивидуальный подход",
      description: "Подстраиваем сценарий под интересы, возраст и характер именинника.",
      accent: "purple",
    },
    {
      id: "safe",
      icon: "shield",
      title: "Безопасность",
      description: "Используем проверенный реквизит и бережно вовлекаем каждого ребёнка.",
      accent: "yellow",
    },
    {
      id: "service",
      icon: "magic",
      title: "Комплексный сервис",
      description: "Программа, шоу, декор и фотограф — всё соберём в одном месте.",
      accent: "lime",
    },
  ],
  sections: {
    packages: {
      eyebrow: "Готовые решения",
      title: "ПАКЕТЫ УСЛУГ",
      description: "Выберите подходящий формат — программу и детали праздника мы уже продумали за вас.",
    },
    animators: {
      eyebrow: "Знакомьтесь",
      title: "Любимые герои уже готовы к празднику",
      description: "Яркие костюмы, живые сценарии и настоящая магия встречи с персонажем.",
      noteTitle: "Не нашли любимого персонажа?",
      noteText: "Напишите нам — мы обязательно подберём героя, который сделает праздник по-настоящему особенным.",
      noteCta: "Написать нам",
    },
    parties: {
      eyebrow: "Для тех, кто уже подрос",
      title: "Вечеринки",
      description: "Драйвовые форматы без скучных конкурсов — с музыкой, челленджами и общением.",
    },
    shows: {
      eyebrow: "Больше удивления",
      title: "Шоу-программы",
      description: "Эффектное дополнение, которое собирает вокруг себя и детей, и взрослых.",
    },
    addons: {
      eyebrow: "Ещё больше впечатлений",
      title: "Дополнительные услуги",
      description: "Добавьте к программе яркие детали, которые сделают праздник ещё интереснее.",
    },
  },
  packages: [
    {
      id: "light",
      number: "01",
      icon: "🟢",
      title: "ЛАЙТ",
      subtitle: "Первый праздник с любимым героем",
      price: "4 000 ₽",
      duration: "45 минут",
      description: "Отличный вариант.",
      features: [
        "Герой на выбор",
        "Игровая программа — 45 минут",
        "Тематический реквизит",
        "Музыкальное сопровождение",
        "Игры и танцы с детьми",
      ],
      gift: "Шарики-фигурки для гостей",
      buttonLabel: "Выбрать «Лайт»",
      href: "#contacts",
    },
    {
      id: "standard",
      number: "02",
      icon: "⭐",
      title: "СТАНДАРТ",
      subtitle: "Больше времени — больше впечатлений",
      price: "5 000 ₽",
      duration: "60 минут",
      description: "Полноценная часовая программа с любимым героем, играми, танцами и особенным сюрпризом для именинника.",
      features: [
        "Герой на выбор",
        "Игровая программа — 60 минут",
        "Тематический реквизит",
        "Музыкальное сопровождение",
        "Задания, состязания и танцы",
        "Секретный подарок имениннику",
      ],
      gift: "Шарики-фигурки для гостей",
      badge: "ХИТ",
      buttonLabel: "Выбрать «Стандарт»",
      href: "#contacts",
    },
    {
      id: "bright",
      number: "03",
      icon: "🔥",
      title: "ЯРКИЙ",
      subtitle: "Анимация + настоящее шоу",
      price: "7 500 ₽",
      duration: "90 минут",
      description: "Для тех, кому хочется не просто аниматора, а большого праздника с ярким финалом.",
      features: [
        "Герой или вечеринка на выбор — 60 минут",
        "Тематический реквизит",
        "Музыкальное сопровождение",
        "Секретный подарок имениннику",
        "Шоу на выбор — 30 минут",
      ],
      optionsTitle: "Можно выбрать шоу:",
      options: ["🫧 Мини-шоу мыльных пузырей", "🧪 Научное шоу", "⭐ Гигантские подушки"],
      gift: "Смонтированный видеоролик с праздника\nШарики-фигурки всем гостям",
      badge: "ВЫГОДНО",
      buttonLabel: "Хочу яркий праздник",
      href: "#contacts",
    },
    {
      id: "all-inclusive",
      number: "04",
      icon: "👑",
      title: "ВСЁ ВКЛЮЧЕНО",
      subtitle: "Максимум впечатлений за один праздник",
      price: "10 000 ₽",
      duration: "120 минут",
      description: "Два часа развлечений, в которых мы уже собрали всё необходимое для большого праздника.",
      features: [
        "Герой или вечеринка на выбор — 60 минут",
        "Тематический реквизит",
        "Музыкальное сопровождение",
        "Секретный подарок имениннику",
        "Шоу на выбор — 30 минут",
        "Блеск-тату — 30 минут",
      ],
      gift: "Смонтированный видеоролик с праздника\nШарики-фигурки всем гостям",
      badge: "МАКСИМУМ ВПЕЧАТЛЕНИЙ",
      buttonLabel: "Хочу всё включено",
      href: "#contacts",
    },
    {
      id: "trendy",
      number: "05",
      icon: "⚡",
      title: "ТРЕНДОВЫЙ",
      subtitle: "Для тех, кто уже вырос из обычных аниматоров",
      price: "6 000 ₽",
      duration: "70 минут",
      description: "Драйвовый формат для детей постарше: музыка, челленджи, общение и программа без ощущения «детского утренника».",
      features: [
        "Вечеринка на выбор — 70 минут",
        "Тематическая программа",
        "Музыкальное сопровождение",
        "Челленджи, игры и задания в стиле выбранной вечеринки",
      ],
      optionsTitle: "Вечеринка на выбор:",
      options: ["💗 Девчачий чат", "⚡ Челлендж-пати", "🖤 НЕ ИГРЫ", "🌈 Яркий бум"],
      gift: "Смонтированный видеоролик с вечеринки",
      badge: "ДЛЯ ДЕТЕЙ ПОСТАРШЕ",
      buttonLabel: "Выбрать вечеринку",
      href: "#contacts",
    },
  ] satisfies PackageItem[],
  animators: [
    {
      id: "fairy",
      title: "Фея",
      description: "Волшебные задания, танцы и немного сказочной пыльцы для исполнения желаний.",
      tag: "Хит",
      href: "#contacts",
      cta: "Позвать героя",
      image: {
        src: "/images/animators/fairy.webp",
        alt: "Аниматор в образе сказочной феи",
        objectPosition: "center top",
        aspectRatio: "4/5",
      },
    },
    {
      id: "kitty",
      title: "Кошечка",
      description: "Весёлые игры, дружные приключения и маленькие открытия для всей компании.",
      href: "#contacts",
      cta: "Позвать героя",
      image: {
        src: "/images/animators/kitty.webp",
        alt: "Аниматор в образе весёлой кошечки",
        objectPosition: "center top",
        aspectRatio: "4/5",
      },
    },
    {
      id: "hello-kitty",
      title: "Китти",
      description: "Милое розовое приключение с играми, танцами и сюрпризами для маленьких модниц.",
      href: "#contacts",
      cta: "Позвать героя",
      image: {
        src: "/images/animators/kitty-room.png",
        alt: "Аниматор в образе Китти в розовой комнате",
        objectPosition: "center top",
        aspectRatio: "4/5",
      },
    },
    {
      id: "elsa",
      title: "Снежная",
      description: "Ледяное волшебство, снежные испытания и сказочное приключение для юных мечтателей.",
      tag: "Любимый герой",
      href: "#contacts",
      cta: "Позвать героя",
      image: {
        src: "/images/animators/elza.webp",
        alt: "Аниматор в образе Эльзы",
        objectPosition: "center top",
        aspectRatio: "4/5",
      },
    },
    {
      id: "taba-lapka",
      title: "Таба-лапка",
      description: "Пушистое приключение с танцами, играми и заданиями для самой дружной команды.",
      href: "#contacts",
      cta: "Позвать героя",
      image: {
        src: "/images/animators/taba-lapka.webp",
        alt: "Аниматор программы Таба-лапка",
        objectPosition: "center top",
        aspectRatio: "4/5",
      },
    },
    {
      id: "unicorn",
      title: "Единорожка",
      description: "Радужное путешествие с чудесами, танцами и добрыми заданиями.",
      href: "#contacts",
      cta: "Позвать героя",
      image: {
        src: "/images/animators/unicorn-medium.webp",
        alt: "Аниматор в сказочном образе единорожки",
        objectPosition: "center top",
        aspectRatio: "4/5",
      },
    },
    {
      id: "skye",
      title: "Скай",
      description: "Отважная спасательная миссия с весёлыми играми и заданиями для юных героев.",
      href: "#contacts",
      cta: "Позвать героя",
      image: {
        src: "/images/animators/skye-tower-v2.png",
        alt: "Аниматор в образе Скай из команды спасателей",
        objectPosition: "center top",
        aspectRatio: "4/5",
      },
    },
    {
      id: "superheroes",
      title: "Супер герои",
      description: "Смелые испытания, командные миссии и настоящее приключение для юных супергероев.",
      href: "#contacts",
      cta: "Позвать героя",
      image: {
        src: "/images/animators/superheroes-ladybug.png",
        alt: "Аниматор в образе супергероини на фоне Парижа",
        objectPosition: "center top",
        aspectRatio: "4/5",
      },
    },
  ] satisfies ServiceItem[],
  parties: [
    {
      id: "pajama",
      title: "ДЕВЧАЧИЙ ЧАТ",
      description: "Уютный девичник с играми, бьюти-баром, музыкой и секретами.",
      href: "#contacts",
      cta: "Хочу вечеринку",
      image: {
        src: "/images/parties/devchachiy-chat.webp",
        alt: "Девчачий чат с праздничным персонажем",
        objectPosition: "center",
        aspectRatio: "4/3",
      },
    },
    {
      id: "tiktok",
      title: "Челлендж-пати",
      description: "Тренды, командные задания, съёмка роликов и настоящий контент-драйв.",
      tag: "Хит",
      href: "#contacts",
      cta: "Хочу вечеринку",
      image: {
        src: "/images/parties/challenge-party.webp",
        alt: "Ведущая программы Челлендж-пати",
        objectPosition: "center",
        aspectRatio: "4/3",
      },
    },
    {
      id: "music",
      title: "НЕ ИГРЫ",
      description: "Для истинных ценителей испытаний!",
      href: "#contacts",
      cta: "Хочу вечеринку",
      image: {
        src: "/images/parties/ne-igry.webp",
        alt: "Ведущая программы НЕ ИГРЫ",
        objectPosition: "center",
        aspectRatio: "4/3",
      },
    },
    {
      id: "trash",
      title: "ЯРКИЙ БУМ",
      description: "Безумно весёлые задания, конфетти и легальное праздничное хулиганство.",
      href: "#contacts",
      cta: "Хочу вечеринку",
      image: {
        src: "/images/parties/yarkiy-bum.webp",
        alt: "Ведущая программы ЯРКИЙ БУМ",
        objectPosition: "center",
        aspectRatio: "4/3",
      },
    },
  ] satisfies ServiceItem[],
  shows: [
    {
      id: "bubbles",
      title: "Мини-шоу мыльных пузырей",
      description: "Гигантские пузыри, сияющие тоннели и ребёнок внутри волшебной сферы.",
      href: "#contacts",
      cta: "Узнать подробнее",
      image: {
        src: "/images/shows/bubbles-new.webp",
        alt: "Большие мыльные пузыри на детском шоу",
        objectPosition: "center",
        aspectRatio: "4/3",
      },
    },
    {
      id: "science-show",
      title: "Научное шоу",
      description: "Яркие эксперименты, удивительные открытия и безопасная наука, которую можно потрогать руками.",
      tag: "Вау-эффект",
      href: "#contacts",
      cta: "Узнать подробнее",
      image: {
        src: "/images/shows/science-show-v2.webp",
        alt: "Ведущая проводит научный эксперимент вместе с ребёнком",
        objectPosition: "center",
        aspectRatio: "4/3",
      },
    },
    {
      id: "giant-pillows",
      title: "Гигантские подушки",
      description: "Воздушные звёзды, мягкие баттлы и море движения — безопасное веселье для всей компании.",
      href: "#contacts",
      cta: "Узнать подробнее",
      image: {
        src: "/images/shows/giant-pillows-v2.webp",
        alt: "Дети играют с гигантскими воздушными подушками",
        objectPosition: "center",
        aspectRatio: "4/3",
      },
    },
    {
      id: "sparkling",
      title: "Блестящее",
      description: "Устраиваем яркое бумажное шоу с вихрем конфетти, музыкой и весёлой дискотекой для незабываемого праздника.",
      href: "#contacts",
      cta: "Узнать подробнее",
      image: {
        src: "/images/shows/sparkling.webp",
        alt: "Блестящая творческая программа для детей",
        objectPosition: "center",
        aspectRatio: "4/3",
      },
    },
  ] satisfies ServiceItem[],
  addons: [
    {
      id: "coronation",
      title: "Коронация",
      description: "Торжественный момент для главного героя праздника",
      image: {
        src: "/images/addons/coronation.png",
        alt: "Фея вручает королевскую подушку юной принцессе на коронации",
        objectPosition: "center",
        aspectRatio: "1/1",
      },
    },
    {
      id: "glitter-tattoo",
      title: "Блеск-тату",
      description: "Сияющие рисунки на коже с безопасным глиттером",
      image: {
        src: "/images/addons/glitter-tattoo.png",
        alt: "Набор цветного глиттера и трафаретов для блеск-тату",
        objectPosition: "center",
        aspectRatio: "1/1",
      },
    },
    {
      id: "balloon-figures",
      title: "Шарики-фигурки",
      description: "Забавные фигурки из шаров для каждого гостя",
      image: {
        src: "/images/addons/balloon-figures.png",
        alt: "Разноцветные фигурки животных, цветка и сердца из воздушных шаров",
        objectPosition: "center",
        aspectRatio: "1/1",
      },
    },
    {
      id: "pinata",
      title: "Пиньята",
      description: "Красивый сюрприз со сладким финалом",
      image: {
        src: "/images/addons/pinata-party.png",
        alt: "Дети играют с яркой праздничной пиньятой",
        objectPosition: "center 35%",
        aspectRatio: "1/1",
      },
    },
  ],
  contact: {
    eyebrow: "Давайте устроим праздник",
    title: "Расскажите, что любит ваш ребёнок",
    description:
      "Подберём программу, героев и дополнения под возраст, интересы и ваш бюджет. Ответим в рабочее время в течение 20 минут.",
  },
  contacts: {
    phone: "+7 960 960 2652",
    phoneHref: "tel:+79609602652",
    city: "Новосибирск и ближайший пригород",
  },
  socials: [
    { id: "vk", label: "ВКонтакте", href: "https://vk.ru/lkobrucheva" },
    { id: "telegram", label: "Telegram", href: "https://t.me/kobrucheva" },
    { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/qr/Y2LCONT5J7CMH1" },
    { id: "max", label: "MAX", href: "https://max.ru/u/f9LHodD0cOKZrJDMzWf0cgozMqPx4s2B01k9x9URSadS1snZyPfrRPuU4zE" },
  ],
  footer: {
    note: "Праздники, в которые хочется возвращаться.",
    copyright: `© ${new Date().getFullYear()} КЕДЫ. Все права защищены.`,
  },
} as const;
