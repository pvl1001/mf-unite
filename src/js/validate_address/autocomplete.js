import prop from "./prop";

$( 'input[name=address]' ).autocomplete( {
   width: 'auto',
   minChars: 1,
   deferRequestBy: 200,
   serviceUrl: 'https://api.wifire.ru/api/address/check_address_dadata',
   type: 'POST',

   onSelect(suggestion) {
      // console.log( suggestion )
      $( '#orderForm' ).validate()
      $( 'input[name=address] + label' ).hide() // скрыть подсказку

      prop.setAddress = {
         house_guid: suggestion.data.aoguid,
         address: suggestion.data.address
      }

   }
} )