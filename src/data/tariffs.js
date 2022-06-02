const { android_tv, fr100, fr1000, mftv, almond, sim, router_4g } = require( './modules/equipments.module' )
const { mobile, home_web, tv } = require( './modules/infoModal.module' )

module.exports = [
   {
      group: "#ДляДома",
      id: "internet",
      tariffId: 4271,
      dataView: "internet",
      name: "Интернет",
      marks: null,
      speed: 100,
      oldPrice: null,
      price: 399,
      iconInfo: false,
      get infoModal() {
         return [
            {
               title: mobile.title,
               icon: mobile.icon,
               options: [
                  { ...mobile.speed, value: this.speed + " Мбит/с" },
                  mobile.traffic
               ]
            }
         ]
      },
      equipments: [
         android_tv,
         fr100,
         fr1000,
         almond
      ]
   },
   {
      group: "Объединяй!",
      id: "two-web",
      tariffId: 5328,
      dataView: "dvainet",
      name: "Два интернета",
      marks: null,
      speed: 200,
      web: 30,
      min: 1200,
      tvId: null,
      oldPrice: null,
      price: 700,
      iconInfo: false,
      get infoModal() {
         return [
            {
               title: mobile.title,
               icon: mobile.icon,
               options: [
                  { ...mobile.mob_web, value: this.web + " ГБ" },
                  { ...mobile.call, value: this.min + " минут" },
                  mobile.messangers,
                  mobile.share,
                  mobile.sms
               ]
            },
            {
               title: home_web.title,
               icon: home_web.icon,
               options: [
                  { ...home_web.speed, value: this.speed + " Мбит/с" },
                  home_web.traffic
               ]
            }
         ]
      },
      equipments: [
         android_tv,
         fr100,
         fr1000,
         almond,
         sim
      ]
   },
   {
      group: "Объединяй!",
      id: "hit",
      tariffId: 5329,
      dataView: "hit",
      name: "Хит",
      marks: [ "Популярное" ],
      speed: 300,
      web: 30,
      min: 1500,
      tvId: 2,
      tvLength: "165 каналов",
      oldPrice: null,
      price: 850,
      iconInfo: false,
      get infoModal() {
         return [
            {
               title: mobile.title,
               icon: mobile.icon,
               options: [
                  { ...mobile.mob_web, value: this.web + " ГБ" },
                  { ...mobile.call, value: this.min + " минут" },
                  mobile.messangers,
                  mobile.share,
                  mobile.sms
               ]
            },
            {
               title: home_web.title,
               icon: home_web.icon,
               options: [
                  { ...home_web.speed, value: this.speed + " Мбит/с" },
                  home_web.traffic
               ]
            },
            {
               title: tv.title,
               icon: tv.icon,
               options: [
                  { ...tv.mftv, value: this.tvLength },
                  tv.traffic
               ]
            }
         ]
      },
      equipments: [
         android_tv,
         fr100,
         fr1000,
         mftv,
         almond,
         sim
      ]
   },
   {
      group: "Объединяй!",
      id: "for-their",
      tariffId: 5330,
      dataView: "their",
      name: "Для своих",
      marks: [ "Акция" ],
      speed: 500,
      web: 50,
      min: 2100,
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
      get infoModal() {
         return [
            {
               title: mobile.title,
               icon: mobile.icon,
               options: [
                  { ...mobile.mob_web, value: this.web + " ГБ" },
                  { ...mobile.call, value: this.min + " минут" },
                  mobile.messangers,
                  mobile.youtube,
                  mobile.share,
                  mobile.sms
               ]
            },
            {
               title: home_web.title,
               icon: home_web.icon,
               options: [
                  { ...home_web.speed, value: this.speed + " Мбит/с" },
                  home_web.traffic
               ]
            },
            {
               title: tv.title,
               icon: tv.icon,
               options: [
                  { ...tv.mftv, value: this.tvLength },
                  tv.traffic
               ]
            }
         ]
      },
      equipments: [
         android_tv,
         { ...fr100, price: '0', plan: null },
         { ...fr1000, price: '0', plan: null },
         { ...mftv, price: '0', plan: null },
         almond,
         sim
      ]
   },

   {
      group: "#ДляДома",
      id: "vse",
      tariffId: 4273,
      dataView: "vse",
      name: "Всё",
      marks: [ "Акция" ],
      speed: 200,
      tvId: 6,
      tvLength: "165 каналов",
      oldPrice: 550,
      price: 275,
      iconInfo: true,
      get infoModal() {
         return [
            {
               title: home_web.title,
               icon: home_web.icon,
               options: [
                  { ...home_web.speed, value: this.speed + " Мбит/с" },
                  home_web.traffic
               ]
            },
            {
               title: tv.title,
               icon: tv.icon,
               options: [
                  { ...tv.mftv, value: this.tvLength },
                  tv.traffic
               ]
            }
         ]
      },
      equipments: [
         android_tv,
         fr100,
         fr1000,
         mftv
      ]
   },
   {
      group: "#ДляДома",
      id: "turbo",
      tariffId: 4276,
      dataView: "turbo",
      name: "Турбо",
      marks: [ "Акция", "Роутер в подарок" ],
      speed: 500,
      price: 500,
      get infoModal() {
         return [
            {
               title: home_web.title,
               icon: home_web.icon,
               options: [
                  { ...home_web.speed, value: this.speed + " Мбит/с" },
                  home_web.traffic
               ]
            }
         ]
      },
      equipments: [ { ...fr1000, price: '', plan: null } ]
   },
   {
      group: "Объединяй!",
      id: "economic",
      tariffId: 5327,
      dataView: "econom",
      name: "Эконом",
      marks: null,
      speed: 100,
      web: 20,
      min: 700,
      tvId: 1,
      tvLength: "50 каналов",
      oldPrice: null,
      price: 650,
      iconInfo: false,
      get infoModal() {
         return [
            {
               title: mobile.title,
               icon: mobile.icon,
               options: [
                  { ...mobile.mob_web, value: this.web + " ГБ" },
                  { ...mobile.call, value: this.min + " минут" },
                  mobile.messangers,
                  mobile.share
               ]
            },
            {
               title: home_web.title,
               icon: home_web.icon,
               options: [
                  { ...home_web.speed, value: this.speed + " Мбит/с" },
                  { ...home_web.traffic, value: "30 ГБ" }
               ]
            },
            {
               title: tv.title,
               icon: tv.icon,
               options: [
                  { ...tv.mftv, value: this.tvLength },
                  tv.traffic
               ]
            }
         ]
      },
      equipments: [
         android_tv,
         fr100,
         fr1000,
         mftv,
         almond,
         sim
      ]
   },
   {
      group: "Объединяй!",
      id: "films",
      tariffId: 5331,
      dataView: "films",
      name: "Кино и сериалы",
      marks: null,
      speed: 300,
      web: 30,
      min: 1500,
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
      get infoModal() {
         return [
            {
               title: mobile.title,
               icon: mobile.icon,
               options: [
                  { ...mobile.mob_web, value: this.web + " ГБ" },
                  { ...mobile.call, value: this.min + " минут" },
                  mobile.messangers,
                  mobile.share,
                  mobile.sms
               ]
            },
            {
               title: home_web.title,
               icon: home_web.icon,
               options: [
                  { ...home_web.speed, value: this.speed + " Мбит/с" },
                  home_web.traffic
               ]
            }
         ]
      },
      equipments: [
         android_tv,
         fr100,
         fr1000,
         mftv,
         almond,
         sim
      ]
   },
   {
      group: "#ДляДома",
      id: "maximum",
      tariffId: 4275,
      dataView: "maximum",
      name: "Максимум",
      marks: null,
      speed: 500,
      tvId: 7,
      tvLength: "235 каналов",
      price: 950,
      get infoModal() {
         return [
            {
               title: home_web.title,
               icon: home_web.icon,
               options: [
                  { ...home_web.speed, value: this.speed + " Мбит/с" },
                  home_web.traffic
               ]
            },
            {
               title: tv.title,
               icon: tv.icon,
               options: [
                  { ...tv.mftv, value: this.tvLength },
                  tv.traffic
               ]
            }
         ]
      },
      equipments: [
         android_tv,
         { ...fr100, price: 10, plan: null },
         { ...fr1000, price: 10, plan: null },
         { ...mftv, price: 10, plan: null },
         almond
      ]
   },
   {
      group: "Объединяй!",
      id: "around",
      tariffId: 3981,
      dataView: "vezde",
      name: "Везде",
      marks: null,
      web: 50,
      speed: 150,
      min: 2100,
      sale: null,
      tvId: 1,
      tvLength: "50 каналов",
      oldPrice: null,
      price: 1400,
      iconInfo: false,
      get infoModal() {
         return [
            {
               title: mobile.title,
               icon: mobile.icon,
               options: [
                  { ...mobile.mob_web, value: this.web + " ГБ" },
                  { ...mobile.call, value: this.min + " минут" },
                  mobile.messangers,
                  mobile.youtube,
                  mobile.share,
               ]
            },
            {
               title: "Беспроводной интернет",
               icon: home_web.icon,
               options: [
                  { ...home_web.speed, value: this.speed + " Мбит/с" },
                  home_web.traffic
               ]
            },
            {
               title: tv.title,
               icon: tv.icon,
               options: [
                  { ...tv.mftv, value: this.tvLength },
                  tv.traffic
               ]
            }
         ]
      },
      equipments: [ router_4g ]
   },
   {
      group: "Объединяй!",
      id: "premium",
      tariffId: 5347,
      dataView: "premium",
      name: "Премиум",
      marks: null,
      speed: 500,
      web: 50,
      min: 3000,
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
      get infoModal() {
         return [
            {
               title: mobile.title,
               icon: mobile.icon,
               options: [
                  { ...mobile.mob_web, value: this.web + " ГБ" },
                  { ...mobile.call, value: this.min + " минут" },
                  mobile.messangers,
                  mobile.share,
                  mobile.youtube,
                  { ...mobile.sms, value: "300 сообщений" }
               ]
            },
            {
               title: home_web.title,
               icon: home_web.icon,
               options: [
                  { ...home_web.speed, value: this.speed + " Мбит/с" },
                  home_web.traffic
               ]
            },
            {
               title: tv.title,
               icon: tv.icon,
               options: [
                  { ...tv.mftv, value: this.tvLength },
                  tv.traffic
               ]
            }
         ]
      },
      equipments: [
         android_tv,
         { ...fr100, price: '0', plan: null },
         { ...fr1000, price: '0', plan: null },
         { ...mftv, price: '0', plan: null },
         almond,
         sim
      ]
   },
]
