import prop from "./validate_address/prop";

// при клике "отправить" создать переменные
window.sendOrder = (act, eventLabel, priceEquipSelector, name) => {
   analytics(act + eventLabel)
   prop.nameEquip = name
   prop.priceEquip = document.querySelector(priceEquipSelector)
}

// при открытии окна присвоить атрибут кнопке "отправить"
window.openOrder = (act, eventLabel, priceEquipSelector, name) => {
   $('#order .btn').attr('onclick', `sendOrder('${act}', '${eventLabel}', '${priceEquipSelector}', '${name}')`)
   analytics('order_' + eventLabel)
}

// удалить атрибут после закрытия окна
$('#order').on('hidden.bs.modal', function() {
   this.querySelector('.btn').removeAttribute('onclick')
} )