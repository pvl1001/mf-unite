import prop from "./prop";

// при открытии окна присвоить атрибут кнопке "отправить"
window.openOrder = (eventLabel, priceEquipSelector, nameEquip, tariffId, tariffName) => {

   const eventLabelText = () => {
      if (eventLabel === 'connect') {
         analytics( 'click_button_connect_turbo' )
         return `click_button_connect_send_turbo`
      }
      analytics( 'click_button_order_' + eventLabel )
      return 'click_button_send_' + eventLabel
   }


   if (nameEquip && nameEquip[0] === '#') {
      const modal = document.querySelector( nameEquip )
      nameEquip = Array.from( modal.querySelectorAll( 'input[type="checkbox"]:checked' ) )
         .map( input => input.dataset.equipName ).join()
   }


   prop.sendOrder = {
      eventLabel: eventLabelText(),
      priceEquip: priceEquipSelector ? +document.querySelector( priceEquipSelector ).textContent : '',
      nameEquip,
      tariffId,
      tariffName
   }

}