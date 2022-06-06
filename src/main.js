// css
import './scss/style.scss'

// script
import '@babel/polyfill'
import './js/plugins_config' // настройки плагинов
import './js/script' // прочее
import './js/toPlug' // плавный скролл
import './js/calcRadio' // расчеты по переключателям
import './js/calculateAlmond' // расчеты Almond
import './js/analytics' // аналитика
import './js/moreTariff' // Кнопка "подробнее" о тарифе
import './js/openOrder' // кнопка "Заказать"
import './js/validate_address' // "проверить возможность подключения"
import './js/equipments' // открытие модального окна с оборудованием (скрыть кнопку заказать)
import './js/calculateEquip' // расчеты карточек доп. опций
import './js/calculateModalEquip' // окно с оборудованием рассрочка
import './js/collapseChannels' // загрузка тв-каналов

// components
import './components/Nav/Nav.js'
import './components/Tabs/Tabs.js'
import './components/_modals/Order/Order.js' // валидация заявки на подключение

// build all img
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('/img/', true));

