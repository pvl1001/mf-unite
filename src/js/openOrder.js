import prop from "./prop";

// при открытии окна присвоить атрибут кнопке "отправить"
window.openOrder = (eventLabel, priceEquipSelector, nameEquip, tariffId , tariffName ) => {

   const eventLabelText = () => {
      if (eventLabel === 'connect') {
         analytics( 'click_button_order_connect_turbo' )
         return `click_button_connect_send_turbo`
      }
      analytics( 'click_button_order_' + eventLabel )
      return 'click_button_send_' + eventLabel
   }


   prop.sendOrder = {
      eventLabel: eventLabelText(),
      priceEquip: document.querySelector( priceEquipSelector ),
      nameEquip,
      tariffId,
      tariffName
   }

}