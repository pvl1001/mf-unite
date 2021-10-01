import prop from "../prop";
import {showHideLabel} from "./showHideLabel";

$( 'input[name=address]' ).autocomplete( {
   width: 'auto',
   minChars: 1,
   deferRequestBy: 200,
   serviceUrl: 'https://api.wifire.ru/api/address/check_address_dadata',
   type: 'POST',

   onSelect(suggestion) {
      $( '#orderForm' ).validate()
      showHideLabel( 'hide' )

      prop.setAddress = {
         house_guid: suggestion.data.aoguid,
         address: suggestion.data.address
      }

   }
} )