import prop from "./prop";
import {showHideLabel} from "./showHideLabel";

export const showResultMainCheck = (success, offer, address) => {
   showHideLabel('hide')
   $( '.unite-address__offer' )[offer]()
   $( '#unite' )[offer]()
   $( '.success-check' )[success]();
   $( address ).text( $(prop.input).val() );
   $( '#addressCheckHead' ).hide()
   prop.flagValid = true
}