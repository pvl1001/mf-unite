const { mobile, home_web, tv } = require( "./infoModal.module" );
const { android_tv, fr100, fr1000, almond, sim, mftv, router_4g } = require( "./equipments.module" );
const { start, mir, amediateka, more } = require( "./mftv.module" );

module.exports = {
   internet: {
      group: "#ДляДома",
      id: "internet",
      tariffId: 4271,
      name: "Интернет",
      marks: null,
      old_price: 399,
      speed: 100,
      get price() {
         return Math.ceil(this.old_price * 0.7)
      },
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
   plus: {
      group: "#ДляДома",
      id: "plus",
      tariffId: 4271,
      name: "Плюс ТВ",
      marks: null,
      old_price: 399,
      speed: 100,
      get price() {
         return Math.ceil(this.old_price * 0.7)
      },
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
   vse: {
      group: "#ДляДома",
      id: "vse",
      tariffId: 4273,
      name: "Всё",
      marks: [ "Акция" ],
      speed: 200,
      tvId: 6,
      old_price: 275,
      tvLength: "193 каналов",
      equipments: [
         android_tv,
         fr100,
         fr1000,
         mftv
      ],
      get price() {
         return Math.ceil(this.old_price * 0.7)
      },
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
      }
   },
   turbo: {
      group: "#ДляДома",
      id: "turbo",
      tariffId: 4276,
      name: "Турбо",
      marks: [ "Акция" ],
      old_price: 500,
      speed: 500,
      equipments: [ { ...fr1000, price: '', plan: null } ],
      dop_params: [ 'Wi-Fi роутер в подарок' ],
      get price() {
         return Math.ceil(this.old_price * 0.7)
      },
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
      }
   },
   maximum:  {
      group: "#ДляДома",
      id: "maximum",
      tariffId: 4275,
      name: "Максимум",
      marks: null,
      speed: 500,
      tvId: 7,
      old_price: 950,
      tvLength: "264 каналов",
      equipments: [
         android_tv,
         { ...fr100, price: 10, plan: null },
         { ...fr1000, price: 10, plan: null },
         { ...mftv, price: 10, plan: null },
         almond
      ],
      get price() {
         return Math.ceil(this.old_price * 0.7)
      },
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
      }
   },

   dvainet: {
      group: "Объединяй!",
      id: "dvainet",
      tariffId: 5328,
      name: "Два интернета",
      marks: null,
      speed: 200,
      web: 30,
      min: 1200,
      old_price: 700,
      tvId: null,
      get price() {
         return Math.ceil(this.old_price * 0.5)
      },
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
   hit: {
      group: "Объединяй!",
      id: "hit",
      tariffId: 5329,
      name: "Хит",
      marks: [ "Популярное" ],
      speed: 300,
      web: 30,
      min: 1500,
      tvId: 2,
      old_price: 850,
      tvLength: "193 каналов",
      equipments: [
         android_tv,
         fr100,
         fr1000,
         mftv,
         almond,
         sim
      ],
      get price() {
         return Math.ceil(this.old_price * 0.5)
      },
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
      }
   },
   their: {
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
      old_price: 650,
      tvLength: "193 каналов",
      equipments: [
         android_tv,
         { ...fr100, price: '0', plan: null },
         { ...fr1000, price: '0', plan: null },
         { ...mftv, price: '0', plan: null },
         almond,
         sim
      ],
      dop_params: [
         'Аренда роутера за 0 ₽',
         'Безлимитный мобильный интернет на соц. сети и Youtube'
      ],
      get price() {
         return Math.ceil(this.old_price * 0.5)
      },
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
      }
   },
   econom: {
      group: "Объединяй!",
      id: "econom",
      tariffId: 5327,
      name: "Эконом",
      marks: null,
      speed: 100,
      web: 20,
      min: 700,
      tvId: 1,
      old_price: 650,
      tvLength: "66 каналов",
      equipments: [
         android_tv,
         fr100,
         fr1000,
         mftv,
         almond,
         sim
      ],
      get price() {
         return Math.ceil(this.old_price * 0.5)
      },
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
      }
   },
   films: {
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
      old_price: 850,
      tvLength: null,
      equipments: [
         android_tv,
         fr100,
         fr1000,
         mftv,
         almond,
         sim
      ],
      get price() {
         return Math.ceil(this.old_price * 0.5)
      },
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
      }
   },
   vezde: {
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
      old_price: 1400,
      tvLength: "66 каналов",
      equipments: [ router_4g ],
      get price() {
         return Math.ceil(this.old_price * 0.5)
      },
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
      }
   },
   premium: {
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
      old_price: 1900,
      tvLength: "264 каналов",
      equipments: [
         android_tv,
         { ...fr100, price: '0', plan: null },
         { ...fr1000, price: '0', plan: null },
         { ...mftv, price: '0', plan: null },
         almond,
         sim
      ],
      dop_params: [
         'Аренда роутера и ТВ-приставки за 0 ₽',
         'Безлимитный мобильный интернет на соц. сети и Youtube'
      ],
      get price() {
         return Math.ceil(this.old_price * 0.5)
      },
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
      }
   },
}
