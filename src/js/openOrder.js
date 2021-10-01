import prop from "./prop";

// при клике "отправить" создать переменные
window.sendOrder = (eventLabel, priceEquipSelector, name, tariffId , tariffName ) => {
   prop.event_label = 'click_button_' + eventLabel
   prop.nameEquip = name
   prop.priceEquip = document.querySelector(priceEquipSelector)
   tariffId
      ? prop.tariffId = +tariffId
      : prop.tariffId = 4261
   tariffName
      ? prop.tariffName = tariffName
      : prop.tariffName = 'ДляДома Всё с прогрессивной скидкой'
}

// при открытии окна присвоить атрибут кнопке "отправить"
window.openOrder = (eventLabel, priceEquipSelector, name, tariffId = '', tariffName = '') => {
   $('#order .btn').attr('onclick', `sendOrder('send_${eventLabel}', '${priceEquipSelector}', '${name}', '${tariffId}', '${tariffName}')`)
   analytics('order_' + eventLabel)
}

// удалить атрибут после закрытия окна
$('#order').on('hidden.bs.modal', function() {
   this.querySelector('.btn').removeAttribute('onclick')
} )