// css
import './fonts/fonts.css'
import './scss/bootstrap.css'
import './scss/colors.scss'
import './scss/datepicker.css'
import './scss/null.scss'
import './scss/slick.css'
import './scss/template.scss'
import 'select2/dist/css/select2.css'
import 'normalize.css'
import './scss/style.scss'

// script
import '@babel/polyfill'
import './js/plugins_config' // настройки плагинов
import './js/script' // прочее
import './js/order' // валидация заявки на подключение
import './js/calcRadio' // расчеты по переключателям
import './js/analytics' // аналитика
import './js/connect' // кнопка headBanner "Подключить"
import './js/moreTariff' // Кнопка "подробнее" о тарифе
import './js/openOrder' // кнопка "Заказать"
import './js/nextForm' // popUp вперед
import './js/validate_address' // "проверить возможность подключения"
import './js/range' // ползунок тарифа
import './js/calculateModalEquip' //

// build all img
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('/img/', true));

