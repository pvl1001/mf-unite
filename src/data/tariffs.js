module.exports = [
   {
      group: "#ДляДома",
      id: "internet",
      tariffId: 4271,
      dataView: "internet",
      name: "Интернет",
      marks: null,
      sale: "Скидка 40% на SIM-карты",
      speed: 100,
      oldPrice: null,
      price: 399,
      iconInfo: false,
      rentDevice: [
         {
            text: "Аренда ТВ-приставки",
            price: "0"
         },
         {
            text: "Аренда Android TV",
            price: 199
         },
         {
            text: "Аренда Wi-Fi роутера <nobr>(1 Гбит/с)</nobr>",
            price: "0"
         }
      ],
      get infoModal() {
         return [
            {
               title: "Домашний интернет",
               icon: "wi-fi_bold.svg",
               options: [
                  {
                     name: "Скорость",
                     description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                     value: this.speed + " Мбит/с"
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "Безлимитно"
                  }
               ]
            }
         ]
      },
      equipments: [
         {
            id: "eq-android-tv",
            name: "Android TV",
            mark: "ГОД СЕРИАЛОВ В ПОДАРОК",
            text: "Играйте в игры, смотрите видео, слушайте музыку и общайтесь с друзьями без каких-либо ограничений. Наслаждайтесь реалистичным качеством картинки.",
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
            }
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1",
            speed: "(100 Мбит/с)",
            mark: "РАССРОЧКА",
            text: "Мощный Wi-Fi роутер для стабильного интернета в любом уголке вашего дома. Привезем и настроим бесплатно.",
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
            }
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2",
            speed: "(1 Гбит/с)",
            mark: "РАССРОЧКА",
            text: "Высокоскоростной Wi‑Fi‑роутер для стабильного интернета. Ловит по всему дому. Бесплатная доставка и настройка.",
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
            dataView: "fr1000",
            plan: {
               "24": 199,
               "36": 129
            }
         },
         {
            id: "eq-almond",
            name: "Роутер Almond с функцией <nobr>Умный дом</nobr>",
            text: "Wi-Fi роутер Almond с системой охраны дома.",
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
            ]
         }
      ]
   },
   {
      group: "#ДляДома",
      id: "vse",
      tariffId: 4273,
      dataView: "vse",
      name: "Всё",
      marks: [
         "Акция"
      ],
      sale: "Скидка 40% на SIM-карты",
      speed: 200,
      tvId: 6,
      tvLength: "165 каналов",
      oldPrice: 550,
      price: 275,
      iconInfo: true,
      rentDevice: [
         {
            text: "Аренда ТВ-приставки",
            price: 159
         },
         {
            text: "Аренда Android TV",
            price: 199
         },
         {
            text: "Аренда Wi-Fi роутера <nobr>(1 Гбит/с)</nobr>",
            price: 99
         }
      ],
      get infoModal() {
         return [
            {
               title: "Домашний интернет",
               icon: "wi-fi_bold.svg",
               options: [
                  {
                     name: "Скорость",
                     description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                     value: this.speed + " Мбит/с"
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "Безлимитно"
                  }
               ]
            },
            {
               title: "ТВ",
               icon: "TV_bold.svg",
               options: [
                  {
                     name: "Мегафон ТВ",
                     description: "",
                     value: this.tvLength
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "Безлимитно"
                  }
               ]
            }
         ]
      },
      equipments: [
         {
            id: "eq-android-tv",
            name: "Android TV",
            mark: "ГОД СЕРИАЛОВ В ПОДАРОК",
            text: "Играйте в игры, смотрите видео, слушайте музыку и общайтесь с друзьями без каких-либо ограничений. Наслаждайтесь реалистичным качеством картинки.",
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
            }
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1",
            speed: "(100 Мбит/с)",
            mark: "РАССРОЧКА",
            text: "Мощный Wi-Fi роутер для стабильного интернета в любом уголке вашего дома. Привезем и настроим бесплатно.",
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
            }
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2",
            speed: "(1 Гбит/с)",
            mark: "РАССРОЧКА",
            text: "Высокоскоростной Wi‑Fi‑роутер для стабильного интернета. Ловит по всему дому. Бесплатная доставка и настройка.",
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
            dataView: "fr1000",
            plan: {
               "24": 199,
               "36": 129
            }
         },
         {
            id: "eq-MFTV",
            name: "ТВ-приставка МегаФон ТВ",
            mark: "РАССРОЧКА",
            text: "Управляйте эфиром, перематывайте, ставьте на паузу – смотрите как удобно и когда удобно.",
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
            }
         }
      ]
   },
   {
      group: "#ДляДома",
      id: "turbo",
      tariffId: 4276,
      dataView: "turbo",
      name: "Турбо",
      marks: [
         "Акция",
         "Роутер в подарок"
      ],
      sale: "Скидка 40% на SIM-карты",
      speed: 500,
      price: 500,
      rentDevice: [
         {
            text: "Аренда ТВ-приставки",
            price: "0"
         },
         {
            text: "Аренда Android TV",
            price: 199
         },
         {
            text: "Аренда Wi-Fi роутера <nobr>(1 Гбит/с)</nobr>",
            price: "0"
         }
      ],
      get infoModal() {
         return [
            {
               title: "Домашний интернет",
               icon: "wi-fi_bold.svg",
               options: [
                  {
                     name: "Скорость",
                     description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                     value: this.speed + " Мбит/с"
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "Безлимитно"
                  }
               ]
            }
         ]
      },
      equipments: [
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2",
            speed: "(1 Гбит/с)",
            mark: "",
            text: "Высокоскоростной Wi‑Fi‑роутер для стабильного интернета. Ловит по всему дому. Бесплатная доставка и настройка.",
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
            price: null,
            dataView: "fr1000",
            plan: ""
         }
      ]
   },
   {
      group: "#ДляДома",
      id: "maximum",
      tariffId: 4275,
      dataView: "maximum",
      name: "Максимум",
      sale: "Скидка 40% на SIM-карты",
      speed: 500,
      tvId: 7,
      tvLength: "235 каналов",
      price: 950,
      rentDevice: [
         {
            text: "Аренда ТВ-приставки",
            price: 159
         },
         {
            text: "Аренда Android TV",
            price: 199
         },
         {
            text: "Аренда Wi-Fi роутера <nobr>(100 Мбит/с)</nobr>",
            price: 55
         }
      ],
      get infoModal() {
         return [
            {
               title: "Домашний интернет",
               icon: "wi-fi_bold.svg",
               options: [
                  {
                     name: "Скорость",
                     description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                     value: this.speed + " Мбит/с"
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "Безлимитно"
                  }
               ]
            },
            {
               title: "ТВ",
               icon: "TV_bold.svg",
               options: [
                  {
                     name: "Мегафон ТВ",
                     description: "",
                     value: this.tvLength
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "Безлимитно"
                  }
               ]
            }
         ]
      },
      equipments: [
         {
            id: "eq-android-tv",
            name: "Android TV",
            mark: "ГОД СЕРИАЛОВ В ПОДАРОК",
            text: "Играйте в игры, смотрите видео, слушайте музыку и общайтесь с друзьями без каких-либо ограничений. Наслаждайтесь реалистичным качеством картинки.",
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
            }
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1",
            speed: "(100 Мбит/с)",
            mark: "РАССРОЧКА",
            text: "Мощный Wi-Fi роутер для стабильного интернета в любом уголке вашего дома. Привезем и настроим бесплатно.",
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
            price: 10,
            dataView: "fr100",
            plan: null
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2",
            speed: "(1 Гбит/с)",
            mark: "РАССРОЧКА",
            text: "Высокоскоростной Wi‑Fi‑роутер для стабильного интернета. Ловит по всему дому. Бесплатная доставка и настройка.",
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
            price: 10,
            dataView: "fr1000",
            plan: null
         },
         {
            id: "eq-MFTV",
            name: "ТВ-приставка МегаФон ТВ",
            mark: "РАССРОЧКА",
            text: "Управляйте эфиром, перематывайте, ставьте на паузу – смотрите как удобно и когда удобно.",
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
            price: 10,
            dataView: "mftv",
            plan: null
         },
         {
            id: "eq-almond",
            name: "Роутер Almond с функцией <nobr>Умный дом</nobr>",
            text: "Wi-Fi роутер Almond с системой охраны дома.",
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
            ]
         }
      ]
   },
   {
      group: "Объединяй!",
      id: "for-their",
      tariffId: 5330,
      dataView: "their",
      name: "Для своих",
      mark: "Акция",
      speed: 500,
      web: 50,
      min: 2100,
      sale: "Скидка 40% на SIM-карты",
      infoProgress: [
         {
            title: "Мобильный интернет",
            value: "50 ГБ"
         },
         {
            title: "Звонки",
            value: "2100 минут"
         },
         {
            title: "Домашний&nbsp;<br>интернет",
            value: "500 Мбит/с"
         }
      ],
      mftv: [
         {
            name: "START",
            icon: "start",
            desc: "START подарил зрителям «Содержанок», «Бывших», «257 причин, чтобы жить», «Вампиров средней полосы», «Текст» и другие сериалы и фильмы, перевернувшие представление о том, каким может быть российский контент. Новинки кино и сериалов каждую неделю, эксклюзивные премьеры хитов проката — всё это START."
         },
         {
            name: "Мировое кино",
            icon: "mf-tv",
            desc: "Пакет «Мировое кино». 3478 фильмов, 729 сериалов."
         }
      ],
      tvId: 3,
      tvLength: "165 каналов",
      oldPrice: 1300,
      price: 650,
      iconInfo: true,
      youtube: true,
      rentDevice: [
         {
            text: "Аренда ТВ-приставки",
            price: "0"
         },
         {
            text: "Аренда Android TV",
            price: 199
         },
         {
            text: "Аренда Wi-Fi роутера <nobr>(1 Гбит/с)</nobr>",
            price: "0"
         }
      ],
      get infoModal() {
         return [
            {
               title: "Мобильная связь",
               icon: "mob_bold.svg",
               options: [
                  {
                     name: "Мобильный интернет",
                     description: "",
                     value: this.web + " ГБ"
                  },
                  {
                     name: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
                     description: "",
                     value: "Безлимитно"
                  },
                  {
                     name: "Звонки на номера МегаФона России",
                     description: "Не расходуют пакет минут",
                     value: "Безлимитно"
                  },
                  {
                     name: "Звонки на мобильные номера других операторов России",
                     description: "",
                     value: this.min + " минут"
                  },
                  {
                     name: "Интернет на социальные сети и YouTube",
                     description: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе. <br>Эти приложения не расходуют интернет по тарифу: WhatsApp, Viber, Telegram, eMotion, Facebook Messenger, ТамТам, Snapchat.",
                     value: "Безлимитно"
                  },
                  {
                     name: "SMS на номера России",
                     value: "50 сообщений"
                  }
               ]
            },
            {
               title: "Интернет",
               icon: "wi-fi_bold.svg",
               options: [
                  {
                     name: "Скорость",
                     description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                     value: this.speed + " Мбит/с"
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "Безлимитно"
                  }
               ]
            },
            {
               title: "ТВ",
               icon: "TV_bold.svg",
               options: [
                  {
                     name: "Мегафон ТВ",
                     description: "",
                     value: this.tvLength
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "Безлимитно"
                  }
               ]
            }
         ]
      },
      equipments: [
         {
            id: "eq-android-tv",
            name: "Android TV",
            mark: "ГОД СЕРИАЛОВ В ПОДАРОК",
            text: "Играйте в игры, смотрите видео, слушайте музыку и общайтесь с друзьями без каких-либо ограничений. Наслаждайтесь реалистичным качеством картинки.",
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
            }
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1",
            speed: "(100 Мбит/с)",
            mark: "РАССРОЧКА",
            text: "Мощный Wi-Fi роутер для стабильного интернета в любом уголке вашего дома. Привезем и настроим бесплатно.",
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
            price: "0",
            dataView: "fr100",
            plan: null
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2",
            speed: "(1 Гбит/с)",
            mark: "РАССРОЧКА",
            text: "Высокоскоростной Wi‑Fi‑роутер для стабильного интернета. Ловит по всему дому. Бесплатная доставка и настройка.",
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
            price: "0",
            dataView: "fr1000",
            plan: null
         },
         {
            id: "eq-MFTV",
            name: "ТВ-приставка МегаФон ТВ",
            mark: "РАССРОЧКА",
            text: "Управляйте эфиром, перематывайте, ставьте на паузу – смотрите как удобно и когда удобно.",
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
            price: "0",
            dataView: "mftv",
            plan: null
         },
         {
            id: "eq-almond",
            name: "Роутер Almond с функцией <nobr>Умный дом</nobr>",
            text: "Wi-Fi роутер Almond с системой охраны дома.",
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
            ]
         },
         {
            id: "equipment-sim",
            oldPrice: 650,
            price: 390
         }
      ]
   },
   {
      group: "Объединяй!",
      id: "two-web",
      tariffId: 5328,
      dataView: "dvainet",
      name: "Два интернета",
      mark: "",
      speed: 200,
      web: 30,
      min: 1200,
      sale: "Скидка 40% на SIM-карты",
      infoProgress: [
         {
            title: "Мобильный интернет",
            value: "50 ГБ"
         },
         {
            title: "Звонки",
            value: "1200 минут"
         },
         {
            title: "Домашний&nbsp;<br>интернет",
            value: "200 Мбит/с"
         }
      ],
      tvId: null,
      oldPrice: null,
      price: 700,
      iconInfo: false,
      rentDevice: [
         {
            text: "Аренда Wi-Fi роутера <nobr>(1 Гбит/с)</nobr>",
            price: 99
         },
         {
            text: "Аренда Android TV",
            price: 199
         }
      ],
      get infoModal() {
         return [
            {
               title: "Мобильная связь",
               icon: "mob_bold.svg",
               options: [
                  {
                     name: "Мобильный интернет",
                     description: "",
                     value: this.web + " ГБ"
                  },
                  {
                     name: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
                     description: "",
                     value: "Безлимитно"
                  },
                  {
                     name: "Звонки на номера МегаФона России",
                     description: "Не расходуют пакет минут",
                     value: "Безлимитно"
                  },
                  {
                     name: "Звонки на мобильные номера других операторов России",
                     description: "",
                     value: this.min + " минут"
                  },
                  {
                     name: "SMS на номера России",
                     value: "50 сообщений"
                  }
               ]
            },
            {
               title: "Интернет",
               icon: "wi-fi_bold.svg",
               options: [
                  {
                     name: "Скорость",
                     description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                     value: this.speed + " Мбит/с"
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "Безлимитно"
                  }
               ]
            }
         ]
      },
      equipments: [
         {
            id: "eq-android-tv",
            name: "Android TV",
            mark: "ГОД СЕРИАЛОВ В ПОДАРОК",
            text: "Играйте в игры, смотрите видео, слушайте музыку и общайтесь с друзьями без каких-либо ограничений. Наслаждайтесь реалистичным качеством картинки.",
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
            }
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1",
            speed: "(100 Мбит/с)",
            mark: "РАССРОЧКА",
            text: "Мощный Wi-Fi роутер для стабильного интернета в любом уголке вашего дома. Привезем и настроим бесплатно.",
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
            }
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2",
            speed: "(1 Гбит/с)",
            mark: "РАССРОЧКА",
            text: "Высокоскоростной Wi‑Fi‑роутер для стабильного интернета. Ловит по всему дому. Бесплатная доставка и настройка.",
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
            dataView: "fr1000",
            plan: {
               "24": 199,
               "36": 129
            }
         },
         {
            id: "eq-almond",
            name: "Роутер Almond с функцией <nobr>Умный дом</nobr>",
            text: "Wi-Fi роутер Almond с системой охраны дома.",
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
            ]
         },
         {
            id: "equipment-sim",
            oldPrice: 650,
            price: 390
         }
      ]
   },
   {
      group: "Объединяй!",
      id: "hit",
      tariffId: 5329,
      dataView: "hit",
      name: "Хит",
      mark: "Популярное",
      speed: 300,
      web: 30,
      min: 1500,
      sale: "Скидка 40% на SIM-карты",
      infoProgress: [
         {
            title: "Мобильный интернет",
            value: "35 ГБ"
         },
         {
            title: "Звонки",
            value: "1500 минут"
         },
         {
            title: "Домашний&nbsp;<br>интернет",
            value: "300 Мбит/с"
         }
      ],
      tvId: 2,
      tvLength: "165 каналов",
      oldPrice: null,
      price: 850,
      iconInfo: false,
      rentDevice: [
         {
            text: "Аренда ТВ-приставки",
            price: 159
         },
         {
            text: "Аренда Android TV",
            price: 199
         },
         {
            text: "Аренда Wi-Fi роутера <nobr>(1 Гбит/с)</nobr>",
            price: 99
         }
      ],
      get infoModal() {
         return [
            {
               title: "Мобильная связь",
               icon: "mob_bold.svg",
               options: [
                  {
                     name: "Мобильный интернет",
                     description: "",
                     value: this.web + " ГБ"
                  },
                  {
                     name: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
                     description: "",
                     value: "Безлимитно"
                  },
                  {
                     name: "Звонки на номера МегаФона России",
                     description: "Не расходуют пакет минут",
                     value: "Безлимитно"
                  },
                  {
                     name: "Звонки на мобильные номера других операторов России",
                     description: "",
                     value: this.min + " минут"
                  },
                  {
                     name: "SMS на номера России",
                     value: "50 сообщений"
                  }
               ]
            },
            {
               title: "Интернет",
               icon: "wi-fi_bold.svg",
               options: [
                  {
                     name: "Скорость",
                     description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                     value: this.speed + " Мбит/с"
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "Безлимитно"
                  }
               ]
            },
            {
               title: "ТВ",
               icon: "TV_bold.svg",
               options: [
                  {
                     name: "Мегафон ТВ",
                     description: "",
                     value: this.tvLength
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "Безлимитно"
                  }
               ]
            }
         ]
      },
      equipments: [
         {
            id: "eq-android-tv",
            name: "Android TV",
            mark: "ГОД СЕРИАЛОВ В ПОДАРОК",
            text: "Играйте в игры, смотрите видео, слушайте музыку и общайтесь с друзьями без каких-либо ограничений. Наслаждайтесь реалистичным качеством картинки.",
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
            }
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1",
            speed: "(100 Мбит/с)",
            mark: "РАССРОЧКА",
            text: "Мощный Wi-Fi роутер для стабильного интернета в любом уголке вашего дома. Привезем и настроим бесплатно.",
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
            }
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2",
            speed: "(1 Гбит/с)",
            mark: "РАССРОЧКА",
            text: "Высокоскоростной Wi‑Fi‑роутер для стабильного интернета. Ловит по всему дому. Бесплатная доставка и настройка.",
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
            dataView: "fr1000",
            plan: {
               "24": 199,
               "36": 129
            }
         },
         {
            id: "eq-MFTV",
            name: "ТВ-приставка МегаФон ТВ",
            mark: "РАССРОЧКА",
            text: "Управляйте эфиром, перематывайте, ставьте на паузу – смотрите как удобно и когда удобно.",
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
            }
         },
         {
            id: "eq-almond",
            name: "Роутер Almond с функцией <nobr>Умный дом</nobr>",
            text: "Wi-Fi роутер Almond с системой охраны дома.",
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
            ]
         },
         {
            id: "equipment-sim",
            oldPrice: 650,
            price: 390
         }
      ]
   },
   {
      group: "Объединяй!",
      id: "films",
      tariffId: 5331,
      dataView: "films",
      name: "Кино и сериалы",
      speed: 300,
      web: 30,
      min: 1500,
      sale: "Скидка 40% на SIM-карты",
      infoProgress: [
         {
            title: "Мобильный интернет",
            value: "35 ГБ"
         },
         {
            title: "Звонки",
            value: "1500 минут"
         },
         {
            title: "Домашний&nbsp;<br>интернет",
            value: "300 Мбит/с"
         }
      ],
      mftv: [
         {
            name: "START",
            icon: "start",
            desc: "START подарил зрителям «Содержанок», «Бывших», «257 причин, чтобы жить», «Вампиров средней полосы», «Текст» и другие сериалы и фильмы, перевернувшие представление о том, каким может быть российский контент. Новинки кино и сериалов каждую неделю, эксклюзивные премьеры хитов проката — всё это START."
         },
         {
            name: "Мировое кино",
            icon: "mf-tv",
            desc: "Пакет «Мировое кино». 3478 фильмов, 729 сериалов."
         }
      ],
      tvId: null,
      tvLength: null,
      oldPrice: null,
      price: 850,
      iconInfo: false,
      rentDevice: [
         {
            text: "Аренда ТВ-приставки",
            price: 159
         },
         {
            text: "Аренда Android TV",
            price: 199
         },
         {
            text: "Аренда Wi-Fi роутера <nobr>(1 Гбит/с)</nobr>",
            price: 99
         }
      ],
      get infoModal() {
         return [
            {
               title: "Мобильная связь",
               icon: "mob_bold.svg",
               options: [
                  {
                     name: "Мобильный интернет",
                     description: "",
                     value: this.web + " ГБ"
                  },
                  {
                     name: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
                     description: "",
                     value: "Безлимитно"
                  },
                  {
                     name: "Звонки на номера МегаФона России",
                     description: "Не расходуют пакет минут",
                     value: "Безлимитно"
                  },
                  {
                     name: "Звонки на мобильные номера других операторов России",
                     description: "",
                     value: this.min + " минут"
                  },
                  {
                     name: "SMS на номера России",
                     value: "50 сообщений"
                  }
               ]
            },
            {
               title: "Интернет",
               icon: "wi-fi_bold.svg",
               options: [
                  {
                     name: "Скорость",
                     description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                     value: this.speed + " Мбит/с"
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "Безлимитно"
                  }
               ]
            }
         ]
      },
      equipments: [
         {
            id: "eq-android-tv",
            name: "Android TV",
            mark: "ГОД СЕРИАЛОВ В ПОДАРОК",
            text: "Играйте в игры, смотрите видео, слушайте музыку и общайтесь с друзьями без каких-либо ограничений. Наслаждайтесь реалистичным качеством картинки.",
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
            }
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1",
            speed: "(100 Мбит/с)",
            mark: "РАССРОЧКА",
            text: "Мощный Wi-Fi роутер для стабильного интернета в любом уголке вашего дома. Привезем и настроим бесплатно.",
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
            }
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2",
            speed: "(1 Гбит/с)",
            mark: "РАССРОЧКА",
            text: "Высокоскоростной Wi‑Fi‑роутер для стабильного интернета. Ловит по всему дому. Бесплатная доставка и настройка.",
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
            dataView: "fr1000",
            plan: {
               "24": 199,
               "36": 129
            }
         },
         {
            id: "eq-MFTV",
            name: "ТВ-приставка МегаФон ТВ",
            mark: "РАССРОЧКА",
            text: "Управляйте эфиром, перематывайте, ставьте на паузу – смотрите как удобно и когда удобно.",
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
            }
         },
         {
            id: "eq-almond",
            name: "Роутер Almond с функцией <nobr>Умный дом</nobr>",
            text: "Wi-Fi роутер Almond с системой охраны дома.",
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
            ]
         },
         {
            id: "equipment-sim",
            oldPrice: 650,
            price: 390
         }
      ]
   },
   {
      group: "Объединяй!",
      id: "premium",
      tariffId: 5347,
      dataView: "premium",
      name: "Премиум",
      speed: 500,
      web: 50,
      min: 3000,
      sale: "Скидка 40% на SIM-карты",
      infoProgress: [
         {
            title: "Мобильный интернет",
            value: "50 ГБ"
         },
         {
            title: "Звонки",
            value: "3000 минут"
         },
         {
            title: "Домашний&nbsp;<br>интернет",
            value: "500 Мбит/с"
         }
      ],
      mftv: [
         {
            name: "START",
            icon: "start",
            desc: "START подарил зрителям «Содержанок», «Бывших», «257 причин, чтобы жить», «Вампиров средней полосы», «Текст» и другие сериалы и фильмы, перевернувшие представление о том, каким может быть российский контент. Новинки кино и сериалов каждую неделю, эксклюзивные премьеры хитов проката — всё это START."
         },
         {
            name: "Мировое кино",
            icon: "mf-tv",
            desc: "Пакет «Мировое кино». 3478 фильмов, 729 сериалов."
         },
         {
            name: "Амедиатека",
            icon: "amediateka",
            desc: "AMEDIATEKA – это премьеры лучших сериалов планеты одновременно со всем миром. Вас ждут новинки и хиты ведущих студий мира, включая HBO, Showtime, CBS, Sky, LIONSGATE и др. «Игра Престолов», «Чернобыль», «Мир Дикого Запада», «Убивая Еву», «Миллиарды», «Секс в большом городе», «Эйфория», «Отыграть назад» - все это и многое другое можно смотреть в онлайн-сервисе AMEDIATEKA."
         },
         {
            name: "more.tv",
            icon: "more",
            desc: "Громкие эксклюзивные сериалы - ЧИКИ, Трудные подростки. Премьеры до эфира на ТВ и огромная библиотека главных российских телеканалов и мировых студий. Также только у нас смотрите премьеры нашумевших зарубежных сериалов – РАССКАЗ СЛУЖАНКИ, ФАРГО, ВЕЛИКАЯ и многое другое."
         }
      ],
      tvId: 4,
      tvLength: "235 каналов",
      oldPrice: null,
      price: 1900,
      iconInfo: false,
      youtube: true,
      rentDevice: [
         {
            text: "Аренда ТВ-приставки",
            price: 159
         },
         {
            text: "Аренда Android TV",
            price: 199
         },
         {
            text: "Аренда Wi-Fi роутера <nobr>(100 Мбит/с)</nobr>",
            price: 55
         }
      ],
      get infoModal() {
         return [
            {
               title: "Мобильная связь",
               icon: "mob_bold.svg",
               options: [
                  {
                     name: "Мобильный интернет",
                     description: "",
                     value: this.web + " ГБ"
                  },
                  {
                     name: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
                     description: "",
                     value: "Безлимитно"
                  },
                  {
                     name: "Звонки на номера МегаФона России",
                     description: "Не расходуют пакет минут",
                     value: "Безлимитно"
                  },
                  {
                     name: "Звонки на мобильные номера других операторов России",
                     description: "",
                     value: this.min + " минут"
                  },
                  {
                     name: "Интернет на социальные сети и YouTube",
                     description: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе. <br>Эти приложения не расходуют интернет по тарифу: WhatsApp, Viber, Telegram, eMotion, Facebook Messenger, ТамТам, Snapchat.",
                     value: "Безлимитно"
                  },
                  {
                     name: "SMS на номера России",
                     value: "300 сообщений"
                  }
               ]
            },
            {
               title: "Интернет",
               icon: "wi-fi_bold.svg",
               options: [
                  {
                     name: "Скорость",
                     description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                     value: this.speed + " Мбит/с"
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "Безлимитно"
                  }
               ]
            },
            {
               title: "ТВ",
               icon: "TV_bold.svg",
               options: [
                  {
                     name: "Мегафон ТВ",
                     description: "",
                     value: this.tvLength
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "Безлимитно"
                  }
               ]
            }
         ]
      },
      equipments: [
         {
            id: "eq-android-tv",
            name: "Android TV",
            mark: "ГОД СЕРИАЛОВ В ПОДАРОК",
            text: "Играйте в игры, смотрите видео, слушайте музыку и общайтесь с друзьями без каких-либо ограничений. Наслаждайтесь реалистичным качеством картинки.",
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
            }
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1",
            speed: "(100 Мбит/с)",
            mark: "РАССРОЧКА",
            text: "Мощный Wi-Fi роутер для стабильного интернета в любом уголке вашего дома. Привезем и настроим бесплатно.",
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
            price: "0",
            dataView: "fr100",
            plan: null
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2",
            speed: "(1 Гбит/с)",
            mark: "РАССРОЧКА",
            text: "Высокоскоростной Wi‑Fi‑роутер для стабильного интернета. Ловит по всему дому. Бесплатная доставка и настройка.",
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
            price: "0",
            dataView: "fr1000",
            plan: null
         },
         {
            id: "eq-MFTV",
            name: "ТВ-приставка МегаФон ТВ",
            mark: "РАССРОЧКА",
            text: "Управляйте эфиром, перематывайте, ставьте на паузу – смотрите как удобно и когда удобно.",
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
            price: "0",
            dataView: "mftv",
            plan: null
         },
         {
            id: "eq-almond",
            name: "Роутер Almond с функцией <nobr>Умный дом</nobr>",
            text: "Wi-Fi роутер Almond с системой охраны дома.",
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
            ]
         },
         {
            id: "equipment-sim",
            oldPrice: 650,
            price: 390
         }
      ]
   },
   {
      group: "Объединяй!",
      id: "economic",
      tariffId: 5327,
      dataView: "econom",
      name: "Эконом",
      speed: 100,
      web: 20,
      min: 700,
      sale: "Скидка 40% на SIM-карты",
      tvId: 1,
      tvLength: "50 каналов",
      oldPrice: null,
      price: 650,
      iconInfo: false,
      rentDevice: [
         {
            text: "Аренда ТВ-приставки",
            price: 159
         },
         {
            text: "Аренда Android TV",
            price: 199
         },
         {
            text: "Аренда Wi-Fi роутера <nobr>(100 Мбит/с)</nobr>",
            price: 99
         }
      ],
      get infoModal() {
         return [
            {
               title: "Мобильная связь",
               icon: "mob_bold.svg",
               options: [
                  {
                     name: "Мобильный интернет",
                     description: "",
                     value: this.web + " ГБ"
                  },
                  {
                     name: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
                     description: "",
                     value: "Безлимитно"
                  },
                  {
                     name: "Звонки на номера МегаФона России",
                     description: "Не расходуют пакет минут",
                     value: "Безлимитно"
                  },
                  {
                     name: "Звонки на мобильные номера других операторов России",
                     description: "",
                     value: this.min + " минут"
                  }
               ]
            },
            {
               title: "Интернет",
               icon: "wi-fi_bold.svg",
               options: [
                  {
                     name: "Скорость",
                     description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                     value: this.speed + " Мбит/с"
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "30 ГБ"
                  }
               ]
            },
            {
               title: "ТВ",
               icon: "TV_bold.svg",
               options: [
                  {
                     name: "Мегафон ТВ",
                     description: "",
                     value: this.tvLength
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "Безлимитно"
                  }
               ]
            }
         ]
      },
      equipments: [
         {
            id: "eq-android-tv",
            name: "Android TV",
            mark: "ГОД СЕРИАЛОВ В ПОДАРОК",
            text: "Играйте в игры, смотрите видео, слушайте музыку и общайтесь с друзьями без каких-либо ограничений. Наслаждайтесь реалистичным качеством картинки.",
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
            }
         },
         {
            id: "eq-FR100-1",
            name: "Wi-Fi роутер FR100-1",
            speed: "(100 Мбит/с)",
            mark: "РАССРОЧКА",
            text: "Мощный Wi-Fi роутер для стабильного интернета в любом уголке вашего дома. Привезем и настроим бесплатно.",
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
            }
         },
         {
            id: "eq-FR1000-2",
            name: "Wi-Fi роутер FR1000-2",
            speed: "(1 Гбит/с)",
            mark: "РАССРОЧКА",
            text: "Высокоскоростной Wi‑Fi‑роутер для стабильного интернета. Ловит по всему дому. Бесплатная доставка и настройка.",
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
            dataView: "fr1000",
            plan: {
               "24": 199,
               "36": 129
            }
         },
         {
            id: "eq-MFTV",
            name: "ТВ-приставка МегаФон ТВ",
            mark: "РАССРОЧКА",
            text: "Управляйте эфиром, перематывайте, ставьте на паузу – смотрите как удобно и когда удобно.",
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
            }
         },
         {
            id: "eq-almond",
            name: "Роутер Almond с функцией <nobr>Умный дом</nobr>",
            text: "Wi-Fi роутер Almond с системой охраны дома.",
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
            ]
         },
         {
            id: "equipment-sim",
            oldPrice: 650,
            price: 390
         }
      ]
   },
   {
      group: "Объединяй!",
      id: "around",
      tariffId: 3981,
      dataView: "vezde",
      name: "Везде",
      web: 50,
      speed: 150,
      min: 2100,
      sale: null,
      infoProgress: [
         {
            title: "Мобильный интернет",
            value: "50 ГБ"
         },
         {
            title: "Звонки",
            value: "2100 минут"
         },
         {
            title: "Домашний&nbsp;<br>интернет",
            value: "150 Мбит/с"
         }
      ],
      tvId: 1,
      tvLength: "50 каналов",
      oldPrice: null,
      price: 1400,
      iconInfo: false,
      rentDevice: [
         {
            text: "Аренда 4G Wi-Fi роутера",
            price: 100
         }
      ],
      get infoModal() {
         return [
            {
               title: "Мобильная связь",
               icon: "mob_bold.svg",
               options: [
                  {
                     name: "Мобильный интернет",
                     description: "",
                     value: this.web + " ГБ"
                  },
                  {
                     name: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
                     description: "",
                     value: "Безлимитно"
                  },
                  {
                     name: "Звонки на номера МегаФона России",
                     description: "Не расходуют пакет минут",
                     value: "Безлимитно"
                  },
                  {
                     name: "Звонки на мобильные номера других операторов России",
                     description: "",
                     value: this.min + " минут"
                  }
               ]
            },
            {
               title: "Интернет",
               icon: "wi-fi_bold.svg",
               options: [
                  {
                     name: "Скорость",
                     description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                     value: this.speed + " Мбит/с"
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "Безлимитно"
                  }
               ]
            },
            {
               title: "ТВ",
               icon: "TV_bold.svg",
               options: [
                  {
                     name: "Мегафон ТВ",
                     description: "",
                     value: this.tvLength
                  },
                  {
                     name: "Трафик",
                     description: "",
                     value: "Безлимитно"
                  }
               ]
            }
         ]
      },
      equipments: [
         {
            id: "eq-unite",
            name: "4G Wi-Fi роутер",
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
      ]
   }
]
