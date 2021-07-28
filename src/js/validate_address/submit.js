import {getAddress} from "./getAddress";

$( 'form[name=address]' ).submit( function (event) {
   event.preventDefault();
   getAddress()
   analytics('address')
} )