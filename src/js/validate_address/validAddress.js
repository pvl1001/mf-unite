import prop from "../prop";
import {showResultMainCheck} from "./showResultMainCheck";
import {showHideLabel} from "./showHideLabel";

export const validAddress = (data) => {
   if (data.result !== null) {
      prop.dataAddress = prop.setAddress
      prop.setAddress = {}

      if (data.result === 1) {
         showResultMainCheck( 'show', 'hide', '.success-check b' )
         gtag( 'event', 'click', {'event_category': 'EventHomeMF', 'event_label': 'check_address_success'} )
      }

      if (data.result === 0) {
         calcRadio.sum( '#unite', 0 )
         showResultMainCheck( 'hide', 'show', '.unite-address__offer b' )
         gtag( 'event', 'click', {'event_category': 'EventHomeMF', 'event_label': 'check_address_fail'} )
      }

      return
   }

   showHideLabel('show')
}