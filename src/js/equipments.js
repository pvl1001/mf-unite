equipments = {
   open(id, i) {
      const modal = document.querySelector( id )
      modal.classList.add( 'hide-price' )

      openModal( id, i )

      $( id ).on( 'hidden.bs.modal', () => {
         modal.classList.remove( 'hide-price' )
      } )
   }

}