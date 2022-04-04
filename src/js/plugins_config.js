import './plugins/jquery.autocomplete'
import './plugins/slick'
import './plugins/jquery.mask'
import './plugins/jquery.validate'
import 'bootstrap'
import 'popper.js'


$( function () {
   $('.slider').css('opacity', '1')


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
   const tippyOptions = {
      content: 'Для участия в <span class="link" onclick="toPlug(`.faq`)">Акции</span> необходимо быть абонентом МегаФон и подключить услугу ДляДома',
      interactive: true,
      placement: 'auto',
      maxWidth: 225,
      allowHTML: true,
      theme: 'light',
      hideOnClick: false,
      // trigger: 'click'
   }

   tippy( '.price__icon_all', tippyOptions)

   tippy( '.price__icon_vse', { ...tippyOptions,
      content: 'С учетом <a href="/internetvse">скидки</a> 50% с 61 месяца',
   } )

} )

