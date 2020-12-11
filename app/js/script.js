@@include('jquery-3.5.1.min.js')
@@include('bootstrap.js')
@@include('slick.js')
@@include('jquery.mask.js')
@@include('jquery.validate.js')

$(document).ready(function () {
   $('.tariffs .slider').slick({
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
   });

   $('.equipment__slider').slick({
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
   });

   $('input[name="phone"]').mask('+7 (000) 000 - 00 - 00', {placeholder: "+7 (   )     -    -   "});

   $('#orderForm').validate({
      rules: {
         phone: {
            required: true,
            minlength: 22
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
      }
   })

})

function toPlug() { // click "подключить"
   $('html,body').animate({
      scrollTop:
         $('.tariffs').offset().top + "px"
   }, {
      duration: 300
   })
}




