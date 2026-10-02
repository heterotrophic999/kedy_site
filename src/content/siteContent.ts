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
    showAddons: false,
  },
  navigation: [
    { label: "О нас", href: "#why-us" },
    { label: "Аниматоры", href: "#animators" },
    { label: "Шоу", href: "#shows" },
    { label: "Пакеты", href: "#categories" },
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
      "Превращаем важный день в настоящее приключение — с любимыми героями, яркими шоу и заботой о каждой детали.",
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
      href: "#contacts",
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
        src: "/images/categories/addons.webp",
        alt: "Воздушные шары и праздничный декор",
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
      eyebrow: "Последние штрихи",
      title: "Сделать праздник ярче",
      description: "Добавьте детали, которые создадут атмосферу и останутся на красивых фотографиях.",
    },
  },
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
      id: "facepaint",
      title: "Аквагрим",
      description: "Безопасные краски и любимые образы",
      image: {
        src: "/images/addons/facepaint.webp",
        alt: "Яркий детский аквагрим",
        objectPosition: "center",
        aspectRatio: "1/1",
      },
    },
    {
      id: "pinata",
      title: "Пиньята",
      description: "Красивый сюрприз со сладким финалом",
      image: {
        src: "/images/addons/pinata.webp",
        alt: "Яркая праздничная пиньята",
        objectPosition: "center",
        aspectRatio: "1/1",
      },
    },
    {
      id: "photographer",
      title: "Фотограф",
      description: "Живые эмоции в каждом кадре",
      image: {
        src: "/images/addons/photographer.webp",
        alt: "Фотограф снимает детский праздник",
        objectPosition: "center",
        aspectRatio: "1/1",
      },
    },
    {
      id: "photzone",
      title: "Фотозона",
      description: "Декорации в теме вашего праздника",
      image: {
        src: "/images/addons/photzone.webp",
        alt: "Праздничная фотозона в розово-лиловых цветах",
        objectPosition: "center",
        aspectRatio: "1/1",
      },
    },
    {
      id: "balloons",
      title: "Воздушные шары",
      description: "Композиции, цифры и облака шаров",
      image: {
        src: "/images/addons/balloons.webp",
        alt: "Композиция из ярких воздушных шаров",
        objectPosition: "center",
        aspectRatio: "1/1",
      },
    },
    {
      id: "decor",
      title: "Декор",
      description: "Продуманное оформление каждой детали",
      image: {
        src: "/images/addons/decor.webp",
        alt: "Декор праздничного стола для ребёнка",
        objectPosition: "center",
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
