import {getResultAddress} from "./getResultAddress";
import {validAddress} from "./validAddress";

$( 'form[name=address]' ).submit( function (event) {
   event.preventDefault();
   getResultAddress().then( data => validAddress( data ) )
   analytics( 'click_button_address' )
} )