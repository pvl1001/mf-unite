$( function () {

   // слайдер
   $( '.tariffs .slider' ).slick( {
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      responsive: [
         {
            breakpoint: 1300,
            settings: {
               slidesToShow: 3,
            }
         }, {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               arrows: false,
            }
         }, {
            breakpoint: 950,
            settings: {
               slidesToShow: 2,
               arrows: false,
            }
         }, {
            breakpoint: 650,
            settings: {
               slidesToShow: 1,
               arrows: false,
            }
         }
      ]
   } );

   // слайдер
   $( '.equipment__slider' ).slick( {
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               arrows: false
            }
         }
      ]
   } );

   // маска
   $( 'input[name="phone"]' ).mask( '+7 (000) 000 - 00 - 00', {placeholder: "+7 (   )     -    -   "} );

   // валидация формы
   $.validator.addMethod( "select", function (value) { // валидация address
         return setAddress.address === value
      }
   )

   $( '#orderForm' ).validate( {
      rules: {
         phone: {
            required: true,
            minlength: 22,
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
      }
   } )

   // календарь
   $( '#orderOpportunity .datepicker' ).datepicker( { // календарь заявки
      format: 'dd MM yyyy',
      language: 'ru',
      orientation: 'bottom',
      maxViewMode: 'days',
      autoclose: true,
      startDate: '0',
      endDate: '+14d'
   } )

   // селект времени
   tail.select( '#mf-select', { // select заявки
      animate: false,
      locale: 'ru',
      placeholder: 'Время',
      multiShowCount: false,
      width: '230px'
   } )

   // popper tippy
   const maxWidth = () => window.innerWidth >= 830 ? 'none' : 275
   const placement = () => window.innerWidth >= 830 ? 'right' : 'top'

   tippy( '.price__icon_all', {
      content: '<span class="link" onclick="toPlug(`.about-tariffs`)">Скидка</span> на абонентскую плату при подключении с 16.12.2019 г.',
      interactive: true,
      placement: placement(),
      maxWidth: maxWidth(),
      allowHTML: true,
      theme: 'light',
      hideOnClick: false,
      // trigger: 'click',
   } )
   tippy( '.price__icon_two-web', {
      content: '<span class="link" onclick="toPlug(`.about-tariffs`)">Скидка</span> на абонентскую плату при подключении с 29.04.2020 г.',
      interactive: true,
      placement: placement(),
      maxWidth: maxWidth(),
      allowHTML: true,
      theme: 'light',
      hideOnClick: false,
   } )

} )
