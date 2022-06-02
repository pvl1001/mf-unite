module.exports = {
   android_tv: {
      id: "eq-android-tv",
      name: "Android TV",
      mark: [
         {
            text: "Год сериалов в подарок",
            color: "var(--mf-fiolet)"
         },
         {
            text: "Рассрочка",
            color: "var(--mf-blue)"
         }
      ],
      text: "Играйте в игры, смотрите видео, слушайте...",
      params: [
         {
            icon: "fiolet_googleplay.svg",
            text: "1000+ приложений в Google Play"
         },
         {
            icon: "fiolet_4k.svg",
            text: "Поддержка 4K UHD и HDR"
         },
         {
            icon: "fiolet_voice-message.svg",
            text: "Голосовое управление"
         },
         {
            icon: "fiolet_video.svg",
            text: "Google Chromecast"
         }
      ],
      img: "pristavka.webp",
      price: 199,
      dataView: "androidtv",
      plan: {
         "24": 249,
         "36": 169
      },
      link: 'https://home.megafon.ru/uploads/manuals/ATV_KM8.pdf'
   },
   fr100: {
      id: "eq-FR100-1",
      name: "Роутер FR100-1",
      speed: "(100 Мбит/с)",
      mark: [
         {
            text: "до 70 м2",
            color: "var(--mf-orange)"
         },
         {
            text: "Рассрочка",
            color: "var(--mf-blue)"
         }
      ],
      text: "Мощный Wi-Fi-роутер для стабильного интернета...",
      params: [
         {
            icon: "fiolet_speed.svg",
            text: "Скорость до 100 Мбит/с"
         },
         {
            icon: "fiolet_hertz.svg",
            text: "Диапазон частот 2,4 и 5 ГГц"
         },
         {
            icon: "fiolet_mobile-internet.svg",
            text: "Возможность подключения 4G"
         },
         {
            icon: "fiolet_zone.svg",
            text: "Зона покрытия до 70 м<sup>2</sup>"
         },
         {
            icon: "fiolet_settings.svg",
            text: "Лёгкость настройки"
         },
         {
            icon: "fiolet_block.svg",
            text: "Родительский контроль"
         }
      ],
      img: "fr100.webp",
      price: 55,
      dataView: "fr100",
      plan: {
         "24": 149,
         "36": 99
      },
      link: 'https://home.megafon.ru/uploads/manuals/MegaFon%20FR100.pdf'
   },
   fr1000: {
      id: "eq-FR1000-2",
      name: "Роутер FR1000-2",
      speed: "(1 Гбит/с)",
      mark: [
         {
            text: "более 70 м2",
            color: "var(--mf-orange)"
         },
         {
            text: "Рассрочка",
            color: "var(--mf-blue)"
         }
      ],
      text: "Высокоскоростной Wi‑Fi‑роутер для стабильного интернета...",
      params: [
         {
            icon: "fiolet_speed.svg",
            text: "Скорость до 1 Гбит/с"
         },
         {
            icon: "fiolet_hertz.svg",
            text: "Диапазон частот 2,4 и 5 ГГц"
         },
         {
            icon: "fiolet_mobile-internet.svg",
            text: "Возможность подключения 4G"
         },
         {
            icon: "fiolet_zone.svg",
            text: "Зона покрытия более 70 м<sup>2</sup>"
         },
         {
            icon: "fiolet_router.svg",
            text: "4 внешние антенны MU‑MIMO"
         },
         {
            icon: "fiolet_block.svg",
            text: "Родительский контроль"
         }
      ],
      img: "fr1000-2.webp",
      price: 88,
      dataView: "fr10002",
      plan: {
         "24": 199,
         "36": 129
      },
      link: 'https://home.megafon.ru/uploads/manuals/MegaFon%20FR1000-2.pdf'
   },
   mftv: {
      id: "eq-MFTV",
      name: "ТВ-приставка МегаФон ТВ",
      mark: [
         {
            text: "Рассрочка",
            color: "var(--mf-blue)"
         }
      ],
      text: "Управляйте эфиром, перематывайте, ставьте на паузу...",
      params: [
         {
            icon: "fiolet_umnyj-dom.svg",
            text: "Работает везде, где есть интернет"
         },
         {
            icon: "fiolet_4k.svg",
            text: "Поддерживает видео UHD и HD"
         },
         {
            icon: "fiolet_wi-fi.svg",
            text: "Подключается через Wi‑Fi"
         },
         {
            icon: "fiolet_pult.svg",
            text: "Управляется Bluetooth‑пультом"
         }
      ],
      img: "tv_new.webp",
      price: 99,
      dataView: "mftv",
      plan: {
         "24": 239,
         "36": 159
      },
      link: 'https://home.megafon.ru/uploads/manuals/MegaFon%20M8S%20PRO.pdf'
   },
   almond: {
      id: "eq-almond",
      name: `Роутер Almond с функцией <nobr>Умный дом</nobr>`,
      mark: [
         {
            text: "Умный дом",
            color: "var(--mf-fiolet)"
         },
         {
            text: "Рассрочка",
            color: "var(--mf-blue)"
         }
      ],
      text: "Wi-Fi-роутер Almond с системой охраны дома...",
      params: [
         "Настройте за несколько секунд",
         "Управляйте Wi-Fi через приложение",
         "Объедините устройства в умный дом",
         "Получайте сигналы, если в дом кто-то проникнет"
      ],
      img: "almond.webp",
      price: "от 229",
      icons: [
         {
            icon: "settings",
            text: "Настройте за несколько секунд"
         },
         {
            icon: "phone",
            text: "Управляйте Wi-Fi через приложение"
         },
         {
            icon: "safety",
            text: "Объедините устройства в умный дом"
         },
         {
            icon: "message",
            text: "Получайте сигналы,<br> если в дом кто-то проникнет"
         }
      ],
      dataView: "almond",
      routers: [
         {
            id: "almond-0",
            name: "Роутер Almond 3",
            img: "Almond-3_about.webp",
            params: [
               {
                  icon: "speed-2_w.svg",
                  text: "Скорость <br> до 300 Мбит/с"
               },
               {
                  icon: "zone-24_w.svg",
                  text: "Зона покрытия <br> до 120 м<sup>2</sup>"
               },
               {
                  icon: "hertz_24_w.svg",
                  text: "Диапазоны частот <br> 2,4 и 5 Ггц"
               }
            ],
            price: 229,
            totalPrice: 0,
            cnt: 1,
            status: false
         },
         {
            id: "almond-1",
            name: "Роутер Almond 3S",
            img: "Almond-3S_about.webp",
            params: [
               {
                  icon: "speed-2_w.svg",
                  text: "Скорость <br> до 300 Мбит/с"
               },
               {
                  icon: "Whats-left_24.svg",
                  text: "Встроенный <br> аккумулятор"
               },
               {
                  icon: "zone-24_w.svg",
                  text: "Зона покрытия <br> до 120 м<sup>2</sup>"
               },
               {
                  icon: "Sim-card_24.svg",
                  text: "LTE <br> резервирование"
               },
               {
                  icon: "hertz_24_w.svg",
                  text: "Диапазоны частот <br> 2,4 и 5 Ггц"
               }
            ],
            price: 339,
            totalPrice: 0,
            cnt: 1,
            status: false
         }
      ],
      sensors: [
         {
            id: "sensor-0",
            name: "Wi-Fi камера",
            img: "Wi-Fi-kamera_about.webp",
            desc: "Наблюдайте за происходящим дома в реальном времени, где бы вы ни были",
            price: 120,
            totalPrice: 0,
            cnt: 1,
            status: false
         },
         {
            id: "sensor-1",
            name: "Датчик движения",
            img: "Datchik-dvizheniya_about.webp",
            desc: "Будьте в курсе любых передвижений в доме",
            price: 50,
            totalPrice: 0,
            cnt: 1,
            status: false
         },
         {
            id: "sensor-2",
            name: "Датчик открытия и закрытия",
            img: "Datchik-otkrytiya-i-zakrytiya_about.webp",
            desc: "Будьте в курсе всех незваных гостей",
            price: 50,
            totalPrice: 0,
            cnt: 1,
            status: false
         },
         {
            id: "sensor-3",
            name: "Датчик протечки воды",
            img: "Datchik-protechki-vody_about.webp",
            desc: "Узнавайте даже о незаметных протечках, чтобы вовремя их устранять",
            price: 50,
            totalPrice: 0,
            cnt: 1,
            status: false
         }
      ],
      banners: [
         {
            "class": "easy",
            img: "pic_1.webp",
            alt: "Умный дом",
            title: "Умный <span>дом</span>",
            text: "Сервис, который заботится о самом главном: безопасности и удобстве вашего дома. Все устройства\n                     подключаются к роутеру и образуют единую экосистему, которая реагирует на всё, что происходит дома."
         },
         {
            "class": "smartphone",
            img: "pic_4.webp",
            alt: "Оповещения из дома",
            title: "Оповещения <nobr><span>из дома</span></nobr>",
            text: "Установите датчики открытия двери, протечки воды или движения и получите push-уведомление на\n                     смартфон при срабатывании, где бы вы ни находились. Посмотрите прямую трансляцию с камеры и\n                     убедитесь, что дома всё в порядке."
         },
         {
            "class": "their",
            img: "pic_3.webp",
            alt: "Родительский контроль",
            title: "Родительский <br><span>контроль</span>",
            text: "Управляйте доступом всей семьи к интернету и легко контролируйте подключённые к сети устройства."
         },
         {
            "class": "around",
            imgMob: "pic_5_mob.webp",
            img: "pic_5.webp",
            alt: "Интернет во всём доме",
            title: "Интернет <nobr><span>во всём доме</span></nobr>",
            text: "Один роутер покрывает площадь до 120 кв. м. Для покрытия большей площади объедините несколько\n                     роутеров Almond в единую сеть без проводов."
         },
         {
            "class": "habits",
            img: "pic_2.webp",
            alt: "Всегда на связи",
            title: "Всегда <nobr><span>на связи</span></nobr>",
            text: "Если в доме начнутся перебои с электричеством, роутер Almond 3S продолжит работать благодаря\n                     встроенному аккумулятору и сохранит доступ в интернет, подключившись к мобильной сети LTE."
         }
      ]
   },
   sim: {
      id: "equipment-sim",
      oldPrice: 650,
      price: 390
   },
   router_4g: {
      id: "eq-unite",
      name: "4G Wi-Fi-роутер",
      params: [
         {
            icon: "fiolet_speed.svg",
            text: "Скорость до 150 Мбит/с"
         },
         {
            icon: "fiolet_hertz.svg",
            text: "Wi-Fi 2,4 и 5 ГГц"
         },
         {
            icon: "fiolet_zone.svg",
            text: "Уверенный сигнал и большая зона покрытия"
         },
         {
            icon: "fiolet_settings.svg",
            text: "Простое подключение до 50 пользователей"
         },
         {
            icon: "fiolet_razmer.svg",
            text: "Компактные размеры"
         }
      ],
      img: "router_info.webp",
      price: 200,
      dataView: "router-4g"
   }
}