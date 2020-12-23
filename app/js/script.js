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
function valid(e) {
   if (e.target.value === 'test') { // адрес совпадает
      e.path[0].classList.add( 'valid' )
      e.path[0].classList.remove( 'error' )
      $( '#btnFormNext' ).show()
         .attr( 'disabled', false )
         .text( 'Далее' )
      $( '.order-opportunity__offer' ).hide()
      $( '#btnFormCheck' ).css( 'display', '' )
   } else if (e.target.value === '') {
      e.path[0].classList.remove( 'valid' )
      e.path[0].classList.remove( 'error' )
      $( '#btnFormNext' ).show()
         .attr( 'disabled', true )
         .text( 'Проверить' )
      $( '.order-opportunity__offer' ).hide()
      $( '#btnFormCheck' ).css( 'display', '' )
   } else {
      e.path[0].classList.remove( 'valid' )
      e.path[0].classList.add( 'error' )
      $( '#btnFormNext' ).hide()
      $( '#btnFormCheck' ).css( 'display', 'inline-flex' )
      $( '.order-opportunity__offer' ).show()
      $( '.order-opportunity__offer b' ).text( e.target.value )
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

// проверить адрес
let address

$( '.unite-check-address input' ).autocomplete( {
   width: 'auto',
   minChars: 3,
   deferRequestBy: 200,
   serviceUrl: 'https://api.wifire.ru/api/address/check_address_dadata',
   type: 'POST',

   onSelect: function (suggestion) {
      address = suggestion
      // console.log( suggestion );
   },
} )

$( '#formCheckAddress' ).submit( function (event) {
   event.preventDefault();
   getAddress()
   let inputText = $( 'input' ).val()
   if (inputText === "test") {
      $( '.unite-address__offer' ).hide()
      $( '.success-check' ).show();
   } else if (!inputText) {
      $( '.success-check' ).hide();
      $( '.unite-address__offer' ).hide()
   } else {
      $( '.success-check' ).hide();
      $( '.unite-address__offer' ).show()
      $( '.unite' ).show()
      $( '.unite-address__offer b' ).text( inputText )
   }

   console.log(address.data)
} )









