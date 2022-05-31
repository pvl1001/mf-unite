import './plugins/jquery.autocomplete'
import './plugins/slick.min'
import './plugins/jquery.mask'
import './plugins/jquery.validate'
import 'bootstrap'
import 'popper.js'
import tippy from './plugins/tippy'


$( function () {
   $( '.slider' ).css( 'opacity', '1' )

   const sliderConfig = {
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerPadding: 20,
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
   }

   // слайдер tariffs
   $( '.tariffs .slider' ).slick( sliderConfig )

   // слайдер equipments
   $( '.equipments .slider' ).slick( sliderConfig )


   // маска
   $( 'input[name="phone"]' ).mask( '+7(000)000-00-00', { placeholder: "Телефон*" } )


   // валидация формы
   $.validator.addMethod( "select", function ( value ) { // валидация address
      return setAddress.address === value
   } )


   // popper tippy
   const tippyOptions = {
      interactive: true,
      placement: 'bottom',
      maxWidth: 225,
      allowHTML: true,
      theme: 'light',
      hideOnClick: false,
      // trigger: 'click'
   }

   // tippy( '.price__icon_all', { ...tippyOptions,
   //    content: 'Для участия в <span class="link" onclick="toPlug(`.faq`)">Акции</span> необходимо быть абонентом МегаФон и подключить услугу ДляДома',
   // })

   tippy( '.js-tippy-vse', { ...tippyOptions,
      content: 'С учетом <a href="/internetvse">скидки</a> 50% с 61 месяца',
   } )

   tippy( '.js-tippy', { ...tippyOptions,
      content: '<span class="link" onclick="toPlug(`.faq`)">Скидка</span> на абонентскую плату действует 3 месяца после подключения',
   } )

} )

