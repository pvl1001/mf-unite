import prop from "./prop";
import { analytics } from "@/js/analytics";

const $title = document.getElementById( 'order_title' )

function setModalOrderTitle( tariff ) {
   $title.textContent = `Подключить ${ tariff }`
}

// при открытии окна присвоить атрибут кнопке "отправить"
window.openOrder = ( { eventLabel, priceEquipSelector, nameEquip = '', tariffId, tariffName }) => {
   analytics( 'initiate_checkout' )

   setModalOrderTitle( tariffName )

   const eventLabelText = () => {
      if ( eventLabel.label === 'connect' ) {
         return `click_button_connect_send_turbo`
      }

      return eventLabel.block
         ? `click_button_${ eventLabel.label }_send_${ eventLabel.block }`
         : `click_button_send_${ eventLabel.label }`
   }


   if ( nameEquip?.[0] === '#' ) {
      const modal = document.querySelector( nameEquip )
      nameEquip = Array.from( modal.querySelectorAll( 'input[type="checkbox"]:checked' ) )
         .map( input => input.dataset.equipName ).join()
   }


   prop.sendOrder = {
      eventLabel: eventLabelText(),
      priceEquip: priceEquipSelector ? document.querySelector( priceEquipSelector ).textContent : '',
      nameEquip,
      tariffId,
      tariffName
   }

}