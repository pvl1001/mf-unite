$( '#orderForm' ).validate( {
   rules: {
      phone: {
         required: true,
         minlength: 16,
      },
      name: 'required',
      address: {
         // required: true,
         select: true
      }
   },
   messages: {
      phone: {
         required: 'Заполните поле!',
         minlength: 'Заполните поле!'
      },
      name: {
         required: 'Заполните поле!'
      },
      address: {
         // required: 'Выберите адрес дома из выпадающего списка!',
         select: 'Выберите адрес дома из выпадающего списка!'
      },
   },
   submitHandler: function () {
      nextForm( '.order-thx', '.requisition' )
      // отправить форму
      console.log('Send')
   }
} )

// сброс валидации формы при закрытии окна
$(document).on('hide.bs.modal', '#order', function (event) {
   $( '#orderForm' ).validate().resetForm()
})
