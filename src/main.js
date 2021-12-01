// css
import './fonts/fonts.css'
import './scss/bootstrap.css'
import './scss/colors.scss'
import './scss/null.scss'
import './scss/slick.css'
import './scss/template.scss'
import 'select2/dist/css/select2.css'
import 'normalize.css'
import './scss/style.scss'
// import './scss/datepicker.css'

// script
import '@babel/polyfill'
import './js/plugins_config' // настройки плагинов
import './js/script' // прочее
import './js/toPlug' // плавный скролл
import './js/order' // валидация заявки на подключение
import './js/calcRadio' // расчеты по переключателям
import './js/calculateAlmond' // расчеты Almond
import './js/analytics' // аналитика
import './js/moreTariff' // Кнопка "подробнее" о тарифе
import './js/openOrder' // кнопка "Заказать"
import './js/nextForm' // popUp вперед
import './js/validate_address' // "проверить возможность подключения"
import './js/equipments' // открытие модального окна с оборудованием (скрыть кнопку заказать)
import './js/calculateEquip' // расчеты карточек доп. опций
import './js/calculateModalEquip' // окно с оборудованием рассрочка
import './js/collapseChannels' // загрузка тв-каналов

// build all img
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('/img/', true));

