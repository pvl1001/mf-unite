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

const dataPrice = [
   {
      name: 'Два интернета',
      title: 'Домашний интернет',
      speed: '50 Мбит/c',
      min: '600',
      oldPrice: 700,
      newPrice: 350,
   },
   {
      name: 'Эконом',
      title: 'Домашний интернет и ТВ',
      channels: 50,
      speed: '50 Мбит/c',
      min: '600',
      oldPrice: 700,
      newPrice: 350,
   },

]

// click "подключить"
function toPlug() {
   $( 'html,body' ).animate( {
      scrollTop:
         $( '.tariffs' ).offset().top + "px"
   }, {
      duration: 300
   } )
}

// popUp вперед
function nextForm(open, close) {
   event.preventDefault()
   $( close ).removeClass( 'd-flex' )
   $( open ).addClass( 'd-flex' )
   $( close ).addClass( 'd-none' )
}

// подтвердить заявку на подключение
function onRequisition(open, close) {
   let date = document.querySelector( '.datepicker' ).value
   let time = document.querySelector( '.label-inner' ).innerHTML
   let text = document.getElementById( 'selectDate' )
   if (date && time !== 'Время') {
      nextForm( open, close )
      text.innerHTML = date + ', ' + time
   }

}

// popUp назад
function backForm(close, open) {
   $( close ).removeClass( 'd-flex' )
   $( open ).addClass( 'd-flex' )
}

// popUp "Проверить возможность подключения"
function validAddressPopUp(data, event) {
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
function validAddress(data, event) {
   let inputText = $( 'input' ).val()
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

// popUp дополнительные опции
function totalPrice(id, index) {
   let newPrice = Number( $( `${id} .new-price` ).text() )
   let optionPrice = $( `${id} .item-option__num` )
   let inputs = $( `${id} input` )

   inputs[index].checked === true ?
      newPrice += Number( optionPrice[index].innerHTML ) :
      newPrice -= Number( optionPrice[index].innerHTML )

   $( `${id} .new-price` ).text( newPrice )
}

// autocomplete проверки адреса
let setAddress = {}

$( 'input[name=address]' ).autocomplete( {
   width: 'auto',
   minChars: 3,
   deferRequestBy: 200,
   serviceUrl: 'https://api.wifire.ru/api/address/check_address_dadata',
   type: 'POST',

   onSelect: function (suggestion) {
      setAddress = {
         house_guid: suggestion.data.aoguid,
         address: suggestion.data.address
      }
      if ($( '#order' ).hasClass( 'show' )) getAddress()
   },
} )

// проверка адреса при клике 'проверить'
$( 'form[name=address]' ).submit( function (event) {
   event.preventDefault();
   getAddress()
} )

// проверка адреса popUp/главная
function checkAddress(data) {
   ($( '#order' ).hasClass( 'show' )) ?
      validAddressPopUp( data ) :
      validAddress( data )
}









