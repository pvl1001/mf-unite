@@include('jquery-3.5.1.min.js')
@@include('bootstrap.js')
@@include('slick.js')

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
})

function toPlug() {
   $('html,body').animate({
      scrollTop:
         $('.tariffs').offset().top + "px"
   }, {
      duration: 300
   })
}


