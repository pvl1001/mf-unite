import prop from "./prop";
import {validateMainAddress} from "./validateMainAddress";

window.validAddress = (data, event) => {
   prop.setAddress = {}
   // console.log( data.result )
   if (data.result) $( 'input[name=address] + label' ).hide()
   if (data.result === 1) {
      validateMainAddress( 'show', 'hide', '.success-check b' )
      gtag( 'event', 'click', {'event_category': 'EventFMC', 'event_label': 'check_address_success'} )
   }
   if (data.result === 0) {
      calcRadio.sum( '#unite', 0 )
      validateMainAddress( 'hide', 'show', '.unite-address__offer b' )
      gtag( 'event', 'click', {'event_category': 'EventFMC', 'event_label': 'check_address_fail'} )
   }
   if (prop.flagValid && event) hideResult()
   if ($( '#CHKADR input' ).val() && !prop.flagValid) $( 'input[name=address] + label' ).show()
}