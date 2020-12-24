// запрос адреса
function getAddress() {
   $.ajax({
      url: 'https://api.wifire.ru/api/address/check_dadata_address',
      method: 'POST',
      data: setAddress,
      success: function (data) {
         checkAddress(data)
      }
   })
}