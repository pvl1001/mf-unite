import prop from "./prop";

// при клике "отправить" создать переменные
window.sendOrder = (eventLabel, priceEquipSelector, name) => {
   prop.event_label = 'click_button_' + eventLabel
   prop.nameEquip = name
   prop.priceEquip = document.querySelector(priceEquipSelector)
}

// при открытии окна присвоить атрибут кнопке "отправить"
window.openOrder = (eventLabel, priceEquipSelector, name) => {
   $('#order .btn').attr('onclick', `sendOrder('send_${eventLabel}', '${priceEquipSelector}', '${name}')`)
   analytics('order_' + eventLabel)
}

// удалить атрибут после закрытия окна
$('#order').on('hidden.bs.modal', function() {
   this.querySelector('.btn').removeAttribute('onclick')
} )