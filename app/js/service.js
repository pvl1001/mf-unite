function getAddress() {
   $.ajax({
      url: 'https://api.wifire.ru/api/address/check_dadata_address',
      method: 'POST',
      data: address,
      success: function (data) {
         console.log(data)
      }
   })
}