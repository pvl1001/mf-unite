equipments = {
   open(id, i, eventLabel) {
      const modal = document.querySelector( id )
      modal.classList.add( 'hide-price' )

      openModal( id, i )
      analytics( eventLabel )

      $( id ).on( 'hidden.bs.modal', () => {
         modal.classList.remove( 'hide-price' )
      } )
   }

}