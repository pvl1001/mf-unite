@@include( './plugins/jquery-3.5.1.min.js' )
@@include( './plugins/bootstrap.js' )
@@include( './plugins/slick.js' )
@@include( './plugins/jquery.mask.js' )
@@include( './plugins/jquery.validate.js' )
@@include( './plugins/datepicker.js' )
@@include( './plugins/tail-select.js' )
@@include( './plugins/jquery.autocomplete.js' )
@@include( './plugins_config.js' )
@@include( './service.js' )


// Скролл по якорю
const toPlug = scrollTo => {
   $( '.modal' ).modal( 'hide' )
   $( 'html,body' ).animate( {
      scrollTop:
         $( scrollTo ).offset().top + "px"
   }, {
      duration: 500
   } )
      .promise().done( () => {
      if (scrollTo === '.about-tariffs') {
         $( '#collapse00' ).collapse( 'show' )
      }
   } )

}

$(document).on('show.bs.modal', '.modal', function (event) {
   let zIndex = 1040 + (10 * $('.modal:visible').length);
   $(this).css('z-index', zIndex);
   setTimeout(function() {
      $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
   }, 0);
});

// popUp вперед
const nextForm = (open, close) => {
   event.preventDefault()
   $( close ).removeClass( 'd-flex' )
   $( open ).addClass( 'd-flex' )
   $( close ).addClass( 'd-none' )
}

// подтвердить заявку на подключение
const onRequisition = (open, close) => {
   let date = document.querySelector( '.datepicker' ).value
   let time = document.querySelector( '.label-inner' ).innerHTML
   let text = document.getElementById( 'selectDate' )
   if (date && time !== 'Время') {
      nextForm( open, close )
      text.innerHTML = date + ', ' + time
   }

}

// popUp назад
const backForm = (close, open) => {
   $( close ).removeClass( 'd-flex' )
   $( open ).addClass( 'd-flex' )
}

// popUp "Проверить возможность подключения"
const validAddressPopUp = (data, event) => {
   if (data.result === 1) { // адрес совпадает
      $( '.order-modal__input input[name=address]' )
         .addClass( 'valid' )
         .removeClass( 'error' )
      $( '#btnFormNext' )
         .show()
         .attr( 'disabled', false )
         .text( 'Далее' )
      $( '.order-opportunity__offer' ).hide()
      $( '#btnFormCheck' ).css( 'display', '' )
   } else if (data.result === 0) {
      $( '.order-modal__input input[name=address]' )
         .removeClass( 'valid' )
         .addClass( 'error' )
      $( '#btnFormNext' ).hide()
      $( '#btnFormCheck' ).css( 'display', 'inline-flex' )
      $( '.order-opportunity__offer' ).show()
      $( '.order-opportunity__offer b' ).text( setAddress.address )
   } else if (event) {
      $( '.order-modal__input input[name=address]' )
         .removeClass( 'valid' )
         .removeClass( 'error' )
      $( '#btnFormNext' )
         .show()
         .attr( 'disabled', true )
         .text( 'Проверить' )
      $( '.order-opportunity__offer' ).hide()
      $( '#btnFormCheck' ).css( 'display', '' )
   }
}

// Проверить возможность подключения
const validAddress = (data, event) => {
   let inputText = $( 'input' ).val()
   // console.log( data.result )
   if (data.result === 1) { // подключение возможно
      $( '.unite-address__offer' ).hide()
      $( '#unite' ).hide()
      $( '.success-check' ).show();
      $( '.success-check b' ).text( inputText );
   } else if (data.result === 0) {
      $( '.success-check' ).hide();
      $( '.unite-address__offer' ).show()
      $( '#unite' ).show()
      $( '.unite-address__offer b' ).text( inputText )
   } else if (event) {
      $( '.success-check' ).hide();
   }
}

// popUp расчет по радио-переключателю
const totalPrice = (id, index) => {
   let newPrice = (`${id} .new-price`),
      newPriceNum = Number( $( newPrice ).text() ),
      optionPrice = $( `${id} .item-option__num` ),
      inputs = $( `${id} input` )

   if (inputs.length > 1)
      inputs[index].checked === true ?
         newPriceNum += Number( optionPrice[index].innerHTML ) :
         newPriceNum -= Number( optionPrice[index].innerHTML )
   else inputs[0].checked === true ?
      newPriceNum += Number( optionPrice[0].innerHTML ) :
      newPriceNum -= Number( optionPrice[0].innerHTML )

   $( newPrice ).text( newPriceNum )
}

// autocomplete проверки адреса
let setAddress = {}

$( 'input[name=address]' ).autocomplete( {
   width: 'auto',
   minChars: 1,
   deferRequestBy: 200,
   serviceUrl: 'https://api.wifire.ru/api/address/check_address_dadata',
   type: 'POST',

   onSelect(suggestion) {
      // console.log( suggestion )

      setTimeout( () => { // проверка адреса подключения
         $( '#orderForm' ).validate().element( '#addressOrder' )
      }, 0 )

      setAddress = {
         house_guid: suggestion.data.aoguid,
         address: suggestion.data.address
      }
      // при выборе даты и времени
      if ($( '.order-opportunity' ).hasClass( 'd-flex' )) getAddress()
   },
} )

// проверка адреса при клике 'проверить'
$( 'form[name=address]' ).submit( function (event) {
   event.preventDefault();
   getAddress()
} )

// проверка адреса popUp/главная
const checkAddress = data => {
   ($( '#order' ).hasClass( 'show' )) ?
      validAddressPopUp( data ) :
      validAddress( data )
}
