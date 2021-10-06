import './plugins/jquery.autocomplete'
import './plugins/slick'
import './plugins/jquery.mask'
import './plugins/jquery.validate'
import 'bootstrap'
import 'select2'
import 'popper.js'
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
            breakpoint: 1280,
            settings: {
               slidesToShow: 3,
            }
         }, {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
            }
         }, {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               arrows: false,
            }
         }
      ]
   } );

   // слайдер
   $( '.equipments .slider' ).slick( {
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      responsive: [
         {
            breakpoint: 1280,
            settings: {
               slidesToShow: 3,
            }
         }, {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               arrows: false,
               variableWidth: true
            }
         }, {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               arrows: false,
               variableWidth: true
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

   // popper tippy
   tippy( '.price__icon_all', {
      content: 'Для участия в <span class="link" onclick="toPlug(`.faq`)">Акции</span> необходимо быть абонентом МегаФон и подключить услугу ДляДома',
      interactive: true,
      placement: 'auto',
      maxWidth: '80vw',
      allowHTML: true,
      theme: 'light',
      hideOnClick: false,
      // trigger: 'click'
   } )

   tippy( '.price__icon_vse', {
      content: 'С учетом <a href="/internetvse">скидки</a> 50% с 61 месяца',
      interactive: true,
      placement: window.innerWidth > 767 ? 'right' : 'auto',
      maxWidth: '80vw',
      allowHTML: true,
      theme: 'light',
      hideOnClick: false
   } )

} )

