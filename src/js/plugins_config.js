import './plugins/jquery.autocomplete'
import './plugins/slick.min'
import './plugins/jquery.mask'
import './plugins/jquery.validate'
import 'bootstrap'
// import 'popper.js'
// import tippy from './plugins/tippy'


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
   $( 'input[name="phone"]' ).mask( '+7(000)000-00-00', { placeholder: "" } )


   // валидация формы
   $.validator.addMethod( "select", function ( value ) { // валидация address
      return setAddress.address === value
   } )

} )

