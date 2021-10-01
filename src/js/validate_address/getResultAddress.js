import prop from "../prop";

export async function getResultAddress() {
   return await $.ajax( {
      url: 'https://api.wifire.ru/api/address/check_dadata_address',
      method: 'POST',
      data: prop.setAddress
   } )
}