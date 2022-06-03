const { android_tv, fr100, fr1000, mftv, almond, sim, router_4g } = require( './modules/equipments.module' )
const { mobile, home_web, tv } = require( './modules/infoModal.module' )
const { start, mir, amediateka, more } = require( './modules/mftv.module' )

module.exports = [
   {
      group: "#ДляДома",
      id: "internet",
      tariffId: 4271,
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
      id: "dvainet",
      tariffId: 5328,
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
      name: "Хит",
      marks: [ "Популярное" ],
      speed: 300,
      web: 30,
      min: 1500,
      tvId: 2,
      tvLength: "193 каналов",
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
      id: "their",
      tariffId: 5330,
      name: "Для своих",
      marks: [ "Акция" ],
      speed: 500,
      web: 50,
      min: 2100,
      mftv: [
         start,
         mir
      ],
      tvId: 3,
      tvLength: "193 каналов",
      oldPrice: 1300,
      price: 650,
      iconInfo: `<span class="link" onclick="toPlug({scrollTo: '.faq', collapse: '#collapse00'})">Скидка</span> на абонентскую плату действует 3 месяца после подключения`,
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
      name: "Всё",
      marks: [ "Акция" ],
      speed: 200,
      tvId: 6,
      tvLength: "193 каналов",
      oldPrice: 550,
      price: 275,
      iconInfo: 'С учетом <a href="/internetvse">скидки</a> 50% с 61 месяца',
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
      name: "Турбо",
      marks: [ "Акция" ],
      speed: 500,
      price: 500,
      iconInfo: `Wi-Fi-роутер <span onclick="toPlug({scrollTo: '.faq', collapse: '#collapse02', px: 72*2})" class="link">в подарок</span>`,
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
      id: "econom",
      tariffId: 5327,
      name: "Эконом",
      marks: null,
      speed: 100,
      web: 20,
      min: 700,
      tvId: 1,
      tvLength: "66 каналов",
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
      name: "Кино и сериалы",
      marks: null,
      speed: 300,
      web: 30,
      min: 1500,
      mftv: [
         start,
         mir
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
      name: "Максимум",
      marks: null,
      speed: 500,
      tvId: 7,
      tvLength: "264 каналов",
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
      id: "vezde",
      tariffId: 3981,
      name: "Везде",
      marks: null,
      web: 50,
      speed: 150,
      min: 2100,
      sale: null,
      tvId: 1,
      tvLength: "66 каналов",
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
      name: "Премиум",
      marks: null,
      speed: 500,
      web: 50,
      min: 3000,
      mftv: [
         start,
         mir,
         amediateka,
         more
      ],
      tvId: 4,
      tvLength: "264 каналов",
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
