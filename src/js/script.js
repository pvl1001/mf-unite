//  z-index modals
$( document ).on( 'show.bs.modal', '.modal', function (event) {
   let zIndex = 1040 + (10 * $( '.modal:visible' ).length);
   $( this ).css( 'z-index', zIndex );
   setTimeout( function () {
      $( '.modal-backdrop' ).not( '.modal-stack' ).css( 'z-index', zIndex - 1 ).addClass( 'modal-stack' );
   }, 0 );
} )

window.onload = () => {

}
// class Card {
//    constructor(card) {
//       this.card = card
//       this.switch = card.querySelector( '.switch' )
//       card.addEventListener( 'click', () => {
//          console.log( 1 )
//       } )
//       // this.card = document.getElementById(id)
//
//    }
//
//
//    // get card () {
//    //    return document.querySelector( '#' + this.id )
//    // }
//    // get price() {
//    //    return this.card.querySelector( '.price' )
//    // }
//    // get inputs() {
//    //    return this.card.querySelectorAll( 'input[type="radio"]' )
//    // }
//    // get switch() {
//    //    return this.card.querySelector('.switch input')
//    // }
//    // get test() {
//    //    return this.card.querySelector('.test')
//    // }
//    // get currentInput() {
//    //    return this.inputs.find(input => input.checked)
//    // }
//
//
//    // changePrice() {
//    //    this.inputs.forEach(input => input.disabled = !input.disabled)
//    // }
//    // eventSwitch() {
//    //    this.card.addEventListener('click', this.disabledRadio.bind(this))
//    // }
//    // disabledRadio() {
//    //    debugger
//    //    console.log(1)
//    // }
//
//
// }

window.openModal = (id, index) => {
   calcRadio.sum( id, index )
   $( id ).modal( 'show' )



   // const modal = document.querySelector( id )
   // const cards = modal.querySelectorAll( '.dop-options-card' )
   // const arrCard = []
   //
   // cards.forEach( card => {
   //    arrCard.push( new Card( document.getElementById( card.id ) ) )
   // } )
   // console.log( arrCard )

}


// отключить прокрутку body когда открыт modal
$( '.modal' ).on( 'hidden.bs.modal', function () {
   if ($( '.modal.show' ).length) {
      $( 'body' ).addClass( 'modal-open' )
   }
} )


$( '.modal' ).on( 'shown.bs.modal', function (e) {
   const modal = e.currentTarget
   const btnClose = modal.querySelector('.tariff-modal__btn-close')
   const modalContent = modal.querySelector('.modal-content')

   if(btnClose) {
      btnClose.style.top = modalContent.getBoundingClientRect().top + 'px', 0
   }
})

// открыть modal
// $( '#for-their' ).modal( 'show' )