export type Locale = 'tr' | 'en' | 'ru'

export const dict = {
  tr: {
    hero: {
      tagline: 'Antalya • Profesyonel Ağaç Bakımı',
      cta: 'Ücretsiz Teklif Al',
      services: 'Hizmetlerimiz',
    },
    stats: {
      experience: 'Yıllık Deneyim',
      projects: 'Tamamlanan Proje',
      emergency: 'Acil Hizmet',
      satisfaction: 'Müşteri Memnuniyeti',
    },
    whyUs: {
      label: 'Neden CrownPro?',
      title: 'Farkımız Nedir',
      subtitle: "Antalya'nın en güvenilir ağaç bakım ekibi olarak, her projede mükemmeliyeti hedefliyoruz.",
      reasons: [
        {
          title: 'Tam Sigortalı',
          desc: 'Tüm ekibimiz ve işlemlerimiz tam sigorta kapsamındadır. Güvenli çalışma garantisi veriyoruz.',
        },
        {
          title: '7/24 Acil Hizmet',
          desc: 'Fırtına veya acil durumlarda 7 gün 24 saat yanınızdayız, gecikme olmadan müdahale ediyoruz.',
        },
        {
          title: 'Çevre Dostu',
          desc: 'Doğaya saygılı yöntemlerle çalışır, her müdahalede çevresel etkiyi minimize ederiz.',
        },
        {
          title: 'Şeffaf Fiyatlandırma',
          desc: 'Gizli ücret yok. İşe başlamadan önce net fiyat teklifi sunuyor, sözümüzün arkasında duruyoruz.',
        },
      ],
    },
    about: {
      label: 'Hakkımızda',
      title: 'Doğayla Uyumlu',
      titleHighlight: 'Profesyonel Ekip',
      description:
        "Antalya bölgesinde faaliyet gösteren CrownPro ekibi, ağaç tırmanıcılığı ve peyzaj hizmetlerinde uzmanlaşmış, sertifikalı profesyonellerden oluşmaktadır. Güvenlik, kalite ve çevreye saygı her şeyimizin önünde gelir.",
      highlights: [
        'Sertifikalı arborist ve ağaç tırmanıcıları',
        'Özel ekipman ve yüksek tırmanış teknikleri',
        'Her projede çevre dostu yöntemler',
        'Antalya geneline kesintisiz hizmet',
      ],
      experienceLabel: 'Yıllık Deneyim',
      cta: 'Daha Fazla Bilgi',
    },
    cta: {
      label: 'Hemen İletişime Geçin',
      title: 'Ağacınız İçin\nProfesyonel Yardım',
      subtitle: 'Ücretsiz keşif ve fiyat teklifi için hemen arayın. Antalya geneline 7/24 hizmet veriyoruz.',
      send: 'Mesaj Gönder',
    },
    services: {
      label: 'Ne Yapıyoruz',
      title: 'Hizmetlerimiz',
      subtitle: 'Antalya genelinde profesyonel ağaç bakımı, budama ve peyzaj hizmetleri sunuyoruz.',
      learnMore: 'Detaylı İncele →',
      viewAll: 'Tüm Hizmetleri Gör',
    },
    footer: {
      description:
        'Antalya bölgesinde faaliyet gösteren CrownPro ekibi, ağaç tırmanıcılığı ve peyzaj hizmetlerinde uzmanlaşmış, profesyonel bir ekiptir.',
      contact: 'İletişim',
      quickLinks: 'Hızlı Erişim',
      home: 'Ana Sayfa',
      services: 'Hizmetlerimiz',
      contactLink: 'İletişim',
      getQuote: 'Ücretsiz Teklif Al',
      follow: 'Bizi Takip Edin',
      rights: 'Tüm hakları saklıdır.',
      privacy: 'Gizlilik Politikası',
    },
    productList: {
      breadcrumbHome: 'Ana Sayfa',
      breadcrumbServices: 'Hizmetlerimiz',
      quickNav: 'Hızlı Erişim',
      location: 'Antalya',
      professional: 'Profesyonel Hizmet',
      getQuote: 'Bu Hizmet İçin Teklif Al',
      callNow: 'Hemen Ara',
      comingSoon: 'Çok Yakında',
      comingSoonBtn: 'Yakında Hizmetinizdeyiz',
      comingSoonNote: 'Bildirim almak için bizi arayabilirsiniz.',
      comingSoonBadge: 'Yakında',
    },
    serviceDetail: {
      breadcrumbHome: 'Ana Sayfa',
      breadcrumbServices: 'Hizmetlerimiz',
      getQuote: 'Bu Hizmet İçin Teklif Al',
      callNow: 'Hemen Ara',
      backToAll: 'Tüm Hizmetlerimize Dön',
      ctaTitle: 'Hizmetlerimiz Hakkında Bilgi Almak İster Misiniz?',
      ctaSubtitle: 'Ücretsiz keşif ve fiyat teklifi için hemen bizi arayın.',
      sendMessage: 'Mesaj Gönder',
    },
    productsPage: {
      heroTagline: 'Antalya • Profesyonel Hizmetler',
      heroTitle: 'Hizmetlerimiz',
      heroSubtitle: 'Ağaç bakımından peyzaja, profesyonel ekibimizle her işteyiz.',
    },
    contactPage: {
      heroTagline: 'Bize Ulaşın',
      heroTitle: 'İletişim',
      heroSubtitle: 'Sorularınız için bize ulaşın. En kısa sürede dönüş yapacağız.',
    },
    aboutPage: {
      heroTagline: 'Hikayemiz',
      heroTitle: 'Hakkımızda',
      heroSubtitle: 'Doğayla uyumlu, uzman ekibimizle tanışın.',
    },
    scroll: 'Scroll',
  },
  en: {
    hero: {
      tagline: 'Antalya • Professional Tree Care',
      cta: 'Get Free Quote',
      services: 'Our Services',
    },
    stats: {
      experience: 'Years of Experience',
      projects: 'Completed Projects',
      emergency: 'Emergency Service',
      satisfaction: 'Client Satisfaction',
    },
    whyUs: {
      label: 'Why CrownPro?',
      title: 'What Sets Us Apart',
      subtitle: "As Antalya's most trusted tree care team, we aim for excellence in every project.",
      reasons: [
        {
          title: 'Fully Insured',
          desc: 'Our entire team and all operations are fully insured. We guarantee safe working practices.',
        },
        {
          title: '24/7 Emergency Service',
          desc: 'We are available 24 hours a day, 7 days a week for storms or emergencies, responding without delay.',
        },
        {
          title: 'Eco-Friendly',
          desc: 'We work with nature-respecting methods and minimise environmental impact in every intervention.',
        },
        {
          title: 'Transparent Pricing',
          desc: 'No hidden fees. We provide a clear price quote before starting work and stand behind our word.',
        },
      ],
    },
    about: {
      label: 'About Us',
      title: 'In Harmony with Nature',
      titleHighlight: 'Professional Team',
      description:
        'The CrownPro team, based in the Antalya region, is a group of certified professionals specialising in tree climbing and landscaping services. Safety, quality, and respect for the environment are our top priorities.',
      highlights: [
        'Certified arborists and tree climbers',
        'Specialist equipment and high-altitude climbing techniques',
        'Eco-friendly methods on every project',
        'Continuous service throughout Antalya',
      ],
      experienceLabel: 'Years of Experience',
      cta: 'Learn More',
    },
    cta: {
      label: 'Get in Touch',
      title: 'Professional Help\nfor Your Trees',
      subtitle: 'Call us now for a free site visit and price quote. We serve all of Antalya 24/7.',
      send: 'Send a Message',
    },
    services: {
      label: 'What We Do',
      title: 'Our Services',
      subtitle: 'We provide professional tree care, pruning and landscaping services throughout Antalya.',
      learnMore: 'Learn More →',
      viewAll: 'View All Services',
    },
    footer: {
      description:
        'The CrownPro team, based in the Antalya region, is a professional team specialising in tree climbing and landscaping services.',
      contact: 'Contact',
      quickLinks: 'Quick Links',
      home: 'Home',
      services: 'Services',
      contactLink: 'Contact',
      getQuote: 'Get Free Quote',
      follow: 'Follow Us',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
    },
    productList: {
      breadcrumbHome: 'Home',
      breadcrumbServices: 'Our Services',
      quickNav: 'Quick Navigation',
      location: 'Antalya',
      professional: 'Professional Service',
      getQuote: 'Get a Quote for This Service',
      callNow: 'Call Now',
      comingSoon: 'Coming Soon',
      comingSoonBtn: 'Coming Soon',
      comingSoonNote: 'Call us to be notified when available.',
      comingSoonBadge: 'Soon',
    },
    serviceDetail: {
      breadcrumbHome: 'Home',
      breadcrumbServices: 'Our Services',
      getQuote: 'Get a Quote for This Service',
      callNow: 'Call Now',
      backToAll: 'Back to All Services',
      ctaTitle: 'Would You Like to Learn More About Our Services?',
      ctaSubtitle: 'Call us now for a free site visit and price quote.',
      sendMessage: 'Send a Message',
    },
    productsPage: {
      heroTagline: 'Antalya • Professional Services',
      heroTitle: 'Our Services',
      heroSubtitle: 'From tree care to landscaping, our professional team is here for every job.',
    },
    contactPage: {
      heroTagline: 'Reach Us',
      heroTitle: 'Contact',
      heroSubtitle: 'Get in touch with any questions. We will respond as soon as possible.',
    },
    aboutPage: {
      heroTagline: 'Our Story',
      heroTitle: 'About Us',
      heroSubtitle: 'Meet our expert team in harmony with nature.',
    },
    scroll: 'Scroll',
  },
  ru: {
    hero: {
      tagline: 'Анталья • Профессиональный уход за деревьями',
      cta: 'Получить бесплатную оценку',
      services: 'Наши услуги',
    },
    stats: {
      experience: 'Лет опыта',
      projects: 'Завершённых проектов',
      emergency: 'Экстренная служба',
      satisfaction: 'Удовлетворённость клиентов',
    },
    whyUs: {
      label: 'Почему CrownPro?',
      title: 'Наши преимущества',
      subtitle: 'Как самая надёжная команда по уходу за деревьями в Анталье, мы стремимся к совершенству в каждом проекте.',
      reasons: [
        {
          title: 'Полное страхование',
          desc: 'Вся наша команда и все работы застрахованы. Гарантируем безопасное выполнение работ.',
        },
        {
          title: 'Круглосуточная экстренная служба',
          desc: 'Мы доступны 24 часа в сутки, 7 дней в неделю в случае штормов или чрезвычайных ситуаций.',
        },
        {
          title: 'Экологичность',
          desc: 'Мы работаем с уважением к природе и минимизируем воздействие на окружающую среду.',
        },
        {
          title: 'Прозрачное ценообразование',
          desc: 'Никаких скрытых платежей. Мы предоставляем чёткую смету до начала работ.',
        },
      ],
    },
    about: {
      label: 'О нас',
      title: 'В гармонии с природой',
      titleHighlight: 'Профессиональная команда',
      description:
        'Команда CrownPro, базирующаяся в Анталье, — это группа сертифицированных профессионалов, специализирующихся на древолазании и ландшафтных услугах. Безопасность, качество и уважение к природе — наши главные приоритеты.',
      highlights: [
        'Сертифицированные арбористы и древолазы',
        'Специальное оборудование и техники работы на высоте',
        'Экологичные методы в каждом проекте',
        'Непрерывное обслуживание по всей Анталье',
      ],
      experienceLabel: 'Лет опыта',
      cta: 'Узнать больше',
    },
    cta: {
      label: 'Свяжитесь с нами',
      title: 'Профессиональная помощь\nдля ваших деревьев',
      subtitle: 'Звоните сейчас для бесплатного выезда и расчёта стоимости. Работаем по всей Анталье 24/7.',
      send: 'Отправить сообщение',
    },
    services: {
      label: 'Что мы делаем',
      title: 'Наши услуги',
      subtitle: 'Мы предоставляем профессиональные услуги по уходу за деревьями, обрезке и ландшафтному дизайну по всей Анталье.',
      learnMore: 'Подробнее →',
      viewAll: 'Все услуги',
    },
    footer: {
      description:
        'Команда CrownPro, базирующаяся в регионе Анталья, — профессиональная команда, специализирующаяся на древолазании и ландшафтных услугах.',
      contact: 'Контакты',
      quickLinks: 'Быстрые ссылки',
      home: 'Главная',
      services: 'Услуги',
      contactLink: 'Контакты',
      getQuote: 'Получить оценку',
      follow: 'Мы в соцсетях',
      rights: 'Все права защищены.',
      privacy: 'Политика конфиденциальности',
    },
    productList: {
      breadcrumbHome: 'Главная',
      breadcrumbServices: 'Наши услуги',
      quickNav: 'Быстрая навигация',
      location: 'Анталья',
      professional: 'Профессиональная услуга',
      getQuote: 'Получить оценку для этой услуги',
      callNow: 'Позвонить',
      comingSoon: 'Скоро',
      comingSoonBtn: 'Скоро в вашем распоряжении',
      comingSoonNote: 'Позвоните нам, чтобы получить уведомление.',
      comingSoonBadge: 'Скоро',
    },
    serviceDetail: {
      breadcrumbHome: 'Главная',
      breadcrumbServices: 'Наши услуги',
      getQuote: 'Получить оценку для этой услуги',
      callNow: 'Позвонить',
      backToAll: 'Назад ко всем услугам',
      ctaTitle: 'Хотите узнать больше о наших услугах?',
      ctaSubtitle: 'Звоните сейчас для бесплатного выезда и расчёта стоимости.',
      sendMessage: 'Отправить сообщение',
    },
    productsPage: {
      heroTagline: 'Анталья • Профессиональные услуги',
      heroTitle: 'Наши услуги',
      heroSubtitle: 'От ухода за деревьями до ландшафтного дизайна — наша профессиональная команда справится с любой задачей.',
    },
    contactPage: {
      heroTagline: 'Свяжитесь с нами',
      heroTitle: 'Контакты',
      heroSubtitle: 'Задайте любой вопрос. Мы ответим как можно скорее.',
    },
    aboutPage: {
      heroTagline: 'Наша история',
      heroTitle: 'О нас',
      heroSubtitle: 'Познакомьтесь с нашей экспертной командой, работающей в гармонии с природой.',
    },
    scroll: 'Прокрутить',
  },
} as const

export type Dict = typeof dict.tr

export function getT(locale: Locale): Dict {
  return dict[locale] as unknown as Dict
}
