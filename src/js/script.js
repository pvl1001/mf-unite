//  z-index modals
$( document ).on( 'show.bs.modal', '.modal', function (event) {
   let zIndex = 1040 + (10 * $( '.modal:visible' ).length);
   $( this ).css( 'z-index', zIndex );
   setTimeout( function () {
      $( '.modal-backdrop' ).not( '.modal-stack' ).css( 'z-index', zIndex - 1 ).addClass( 'modal-stack' );
   }, 0 );
} )


window.openModal = (id, index) => {
   calcRadio.sum( id, index )
   $( id ).modal( 'show' )
}


// отключить прокрутку body когда открыт modal
$( '.modal' ).on( 'hidden.bs.modal', function () {
   if ($( '.modal.show' ).length) {
      $( 'body' ).addClass( 'modal-open' )
   }
} )



$( '.modal' ).on( 'shown.bs.modal', function (e) {
   const modal = e.currentTarget
   const btnClose = modal.querySelector( '.tariff-modal__btn-close' )
   const modalContent = modal.querySelector( '.modal-content' )

   if (btnClose) {
      btnClose.style.top = modalContent.getBoundingClientRect().top + 'px'
   }
} )

// открыть modal
// $( '#premium' ).modal( 'show' )