import './plugins/jquery.autocomplete'
import './plugins/slick'
import './plugins/jquery.mask'
import './plugins/jquery.validate'
import 'bootstrap'
import 'popper.js'
import 'select2'
// import './plugins/datepicker'

$( function () {

   // select выбор времени modal
   $('#selectTime').select2({
      minimumResultsForSearch : Infinity,
      placeholder: 'Время',
      width: '100%'
   })

   // слайдер
   $( '.tariffs .slider' ).slick( {
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      responsive: [
         {
            breakpoint: 1296,
            settings: {
               slidesToShow: 3,
            }
         }, {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
            }
         }, {
            breakpoint: 960,
            settings: {
               slidesToShow: 2,
            }
         }, {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               arrows: false,
            }
         }, {
            breakpoint: 640,
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
   $( 'input[name="phone"]' ).mask( '+7(000)000-00-00', {placeholder: "+7(   )   -  -  "} );

   // валидация формы
   $.validator.addMethod( "select", function (value) { // валидация address
         return setAddress.address === value
   } )

   // календарь
   // $( '#orderOpportunity .datepicker' ).datepicker( { // календарь заявки
   //    format: 'dd MM yyyy',
   //    language: 'ru',
   //    orientation: 'bottom',
   //    maxViewMode: 'days',
   //    autoclose: true,
   //    startDate: '0',
   //    endDate: '+14d'
   // } )

   // popper tippy
   const maxWidth = () => window.innerWidth >= 830 ? 'none' : 275
   const placement = () => window.innerWidth >= 830 ? 'right' : 'top'
   // const placeAlmond = () => window.innerWidth >= 830 ? 'left' : 'top'

   tippy( '.price__icon_all', {
      content: '<span class="link" onclick="toPlug(`.fiq`)">Скидка</span> на абонентскую плату действует 3 месяца после подключения',
      interactive: true,
      placement: placement(),
      maxWidth: maxWidth(),
      allowHTML: true,
      theme: 'light',
      hideOnClick: false,
      // trigger: 'click',
   } )

   // const tariffs = require('../json/tariffs.json')
   // tariffs.forEach((el, index) => {
   //    tippy( '#modalAlmond-' + index + ' .price__icon', {
   //       content: `С учетом выбранных опций и тарифа «Объединяй! ${el.name}»`,
   //       interactive: true,
   //       placement: placeAlmond(),
   //       maxWidth: 'none',
   //       allowHTML: true,
   //       theme: 'light',
   //       hideOnClick: false,
   //    } )
   // })

} )

