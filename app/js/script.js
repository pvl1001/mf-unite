@@include( 'jquery-3.5.1.min.js' )
@@include( 'bootstrap.js' )
@@include( 'slick.js' )
@@include( 'jquery.mask.js' )
@@include( 'jquery.validate.js' )
@@include( 'datepicker.js' )
@@include( 'tail-select.js' )
@@include( 'data.json' )

$( document ).ready( function () {
   $( '.tariffs .slider' ).slick( {
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      responsive: [
         {
            breakpoint: 1500,
            settings: {
               arrows: false
            }
         }, {
            breakpoint: 1300,
            settings: {
               slidesToShow: 3,
               arrows: false,
               dots: true,
            }
         }, {
            breakpoint: 950,
            settings: {
               slidesToShow: 2,
               arrows: false,
               dots: true
            }
         }, {
            breakpoint: 650,
            settings: {
               slidesToShow: 1,
               arrows: false,
               dots: true
            }
         }
      ]
   } );

   $( '.equipment__slider' ).slick( {
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      responsive: [
         {
            breakpoint: 1500,
            settings: {
               arrows: false
            }
         }
      ]
   } );

   $( 'input[name="phone"]' ).mask( '+7 (000) 000 - 00 - 00', {placeholder: "+7 (   )     -    -   "} );

   $( '#orderForm' ).validate( {
      rules: {
         phone: {
            required: true,
            minlength: 22,
         },
         name: {
            required: true
         }
      },
      messages: {
         phone: {
            required: 'Заполните поле!',
            minlength: 'Заполните поле!'
         },
         name: {
            required: 'Заполните поле!'
         }
      },
      submitHandler: function (form) {
         nextForm( '.order-thx', '.requisition' )
         // отправить форму
      }
   } )

   $( '#orderOpportunity .datepicker' ).datepicker( { // календарь заявки
      format: 'dd MM yyyy',
      language: 'ru',
      orientation: 'bottom',
      maxViewMode: 'days',
      autoclose: true,
      startView: 0
   } )

   tail.select( '#mf-select', { // select заявки
      animate: false,
      locale: 'ru',
      placeholder: 'Время',
      multiShowCount: false,
      width: '230px'
   } )


   let groupName = '', name = [];
   for (let i = 1; i < 11; i++) {

      if (dataEconomic[i]) {
         // dataEconomic[i].forEach( function (index, el) {
         //    console.log( index, el )
         // } )

         groupName +=
            `<a href="#collapseChannelGroup${i}"
               data-toggle="collapse"
               class="collapse-channel__group-toggle"
               >
               <div class="collapse-channel__group-wrapper">
                  <span class="collapse-channel__group-name">${dataEconomic[i][0].groupName}</span>
                  <span class="collapse-channel__group-count">${dataEconomic[i].length}</span>
               </div>
            </a>
            <ul class="collapse-channel__group-list collapse" id="collapseChannelGroup${i}"></ul>`

         dataEconomic[i].forEach( function (el, index) {
            name[i] +=
               `<li class="collapse-channel__group-channelName">${ el.name }</li>`
            console.log(name[i])
         } )
         $( '.collapse-channel__channel-group' ).html( groupName );
         $( '.collapse-channel__group-list' ).html( name[i] );
      }


   }

   // for (let i = 1; i < 11; i++) {
   //    if (dataEconomic[i]) {
   //       dataEconomic[i].forEach( function (el, index) {
   //           name[i] +=
   //             `<li class="collapse-channel__group-channelName">${ el.name }</li>`
   //          $( '.collapse-channel__group-list' ).html( name[i] );
   //          console.log(name[i])
   //
   //       } )
   //    }
   // }

   } )

function toPlug() { // click "подключить"
   $( 'html,body' ).animate( {
      scrollTop:
         $( '.tariffs' ).offset().top + "px"
   }, {
      duration: 300
   } )
}

function nextForm(open, close) { // popUp вперед
   event.preventDefault()
   $( close ).removeClass( 'd-flex' )
   $( open ).addClass( 'd-flex' )
   $( close ).addClass( 'd-none' )
}

function onRequisition(open, close) { // подтвердить заявку на подключение
   let date = document.querySelector( '.datepicker' ).value
   let time = document.querySelector( '.label-inner' ).innerHTML
   let text = document.getElementById( 'selectDate' )
   if (date && time !== 'Время') {
      nextForm( open, close )
      text.innerHTML = date + ', ' + time
   }

}

function backForm(close, open) { // popUp назад
   $( close ).removeClass( 'd-flex' )
   $( open ).addClass( 'd-flex' )
}

function valid(e) { // popUp "Проверить возможность подключения"
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






