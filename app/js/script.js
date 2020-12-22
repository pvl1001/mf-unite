@@include( './plugins/jquery-3.5.1.min.js' )
@@include( './plugins/bootstrap.js' )
@@include( './plugins/slick.js' )
@@include( './plugins/jquery.mask.js' )
@@include( './plugins/jquery.validate.js' )
@@include( './plugins/datepicker.js' )
@@include( './plugins/tail-select.js' )

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

$( document ).ready( function () {

   $.getJSON( '../json/data.json', function (data) {
      console.log( data )
   } )

//    let cardTariff
//    dataPrice.forEach(tariff => {
//       cardTariff +=
//          `
//          <div class="slider__item card">
//             <div class="card__title">
//                <p>Объединяй!</p>
//                <p>${tariff.name}</p>
//                <span data-target="#tariffHit" data-toggle="modal">Подробнее</span>
//             </div>
//             <div class="card__info">
//                <div class="card__info_block info-card">
//                   <p class="info-card__title">${tariff.title}</p>
//                   <div class="info-card__desc">
//                      <div class="info-card__desc_icon">
//                         <img src="./img/svg/wi-fi.svg" alt="img">
//                      </div>
//                      ${tariff.speed}
//                   </div>
//                   <div class="info-card__desc desk-channels">
//                      <div class="info-card__desc_icon">
//                         <img src="./img/svg/tv.svg" alt="img">
//                      </div>
//                      <a href="#">${tariff.channels}</a>
//                   </div>
//                </div>
//                <div class="card__info_block info-card">
//                   <p class="info-card__title">Мобильная связь</p>
//                   <div class="info-card__desc desk-mobile">
//                      <div class="info-card__desc_icon">
//                         <img src="./img/svg/mobile.svg" alt="img">
//                      </div>
//                      <div>
//                         <p>${tariff.min}</p>
//                         <p>Безлимит на МегаФон России</p>
//                      </div>
//                   </div>
//                   <div class="info-card__desc">
//                      <div class="info-card__desc_icon">
//                         <img src="./img/svg/4g.svg" alt="img">
//                      </div>
//                      Безлимитный интернет
//                   </div>
//                   <div class="info-card__desc">
//                      <div class="info-card__desc_icon">
//                         <img src="./img/svg/bonus.svg" alt="img">
//                      </div>
//                      Скидка 40% на SIM-карты
//                   </div>
//                </div>
//                <div class="card__info_block info-card">
//                   <p class="info-card__title">Оборудование</p>
//
//                   <div class="info-card__desc info-card__desc_equipment">
//                      <div class="info-card__desc_icon">
//                         <img src="./img/svg/TV2.svg" alt="img">
//                      </div>
//                      ТВ-приставка
//                   </div>
//
//                </div>
//             </div>
//             <div class="card__price">
//                <div class="price">
//                   <span class="old-price">${tariff.oldPrice} ₽</span>
//                   <span class="new-price">${tariff.newPrice} ₽</span>
//                   <span>в месяц</span>
//                </div>
//                <div class="card__price_btn">
//                   <div data-toggle="modal" data-target="#order" class="btn">Заказать</div>
//                </div>
//             </div>
//             <div class="card__mark mark-red">
//                Популярное
//             </div>
//          </div>
// `
//       $('.tariffs .slider').html(cardTariff);
//
//    })

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

      // if (dataEconomic[i]) {
      //    // dataEconomic[i].forEach( function (index, el) {
      //    //    console.log( index, el )
      //    // } )
      //
      //    groupName +=
      //       `<a href="#collapseChannelGroup${i}"
      //          data-toggle="collapse"
      //          class="collapse-channel__group-toggle"
      //          >
      //          <div class="collapse-channel__group-wrapper">
      //             <span class="collapse-channel__group-name">${dataEconomic[i][0].groupName}</span>
      //             <span class="collapse-channel__group-count">${dataEconomic[i].length}</span>
      //          </div>
      //       </a>
      //       <ul class="collapse-channel__group-list collapse" id="collapseChannelGroup${i}"></ul>`
      //
      //    dataEconomic[i].forEach( function (el, index) {
      //       name[i] +=
      //          `<li class="collapse-channel__group-channelName">${ el.name }</li>`
      //       // console.log(name[i])
      //    } )
      //    $( '.collapse-channel__channel-group' ).html( groupName );
      //    $( '.collapse-channel__group-list' ).html( name[i] );
      // }


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
   let optionPrice = $( `${id} .item-option__text .item-option__num` )
   let inputs = $( `${id} input` )

   inputs[index].checked === true ?
      newPrice += Number( optionPrice[index].innerHTML ) :
      newPrice -= Number( optionPrice[index].innerHTML )

   $( `${id} .new-price` ).text( newPrice )
}









