import prop from "./prop";

export function getAddress() {
   $.ajax( {
      url: 'https://api.wifire.ru/api/address/check_dadata_address',
      method: 'POST',
      data: prop.setAddress,
      success(data) {
         validAddress( data )
      },
      error(error) {
         console.log( 'error address', error )
      }
   } )
}