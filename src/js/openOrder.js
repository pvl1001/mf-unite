import prop from "./prop";

// при открытии окна присвоить атрибут кнопке "отправить"
window.openOrder = (eventLabel, priceEquipSelector, nameEquip, tariffId , tariffName ) => {


   const eventLabelText = () => {
      if (eventLabel === 'connect') {
         analytics( eventLabel )
         return eventLabel + '_send'
      }
      analytics( 'order_' + eventLabel )
      return 'send_' + eventLabel
   }


   prop.sendOrder = {
      eventLabel: `click_button_${eventLabelText()}`,
      priceEquip: document.querySelector( priceEquipSelector ),
      nameEquip,
      tariffId,
      tariffName
   }

}