$( '.modal.performance' )
   .on( 'shown.bs.modal', function () {
      const $modal = this
      const priceSelector = '.modal-order__text span'
      const radioInputsSelector = '.option-radio input'

      window.planEquip = new PlanEquip( $modal, priceSelector, radioInputsSelector )
      planEquip.addEvents()
   } )
   .on( 'hidden.bs.modal', function () {
      window.planEquip.removeEvents()
   } )


class PlanEquip {
   constructor($modal, priceSelector, radioInputsSelector) {
      this.$modal = $modal
      this.price = priceSelector
      this.$inputs = this.$modal.querySelectorAll( radioInputsSelector )
      this.changePriceCB = this.changePrice.bind( this )
   }


   addEvents() {
      this.$inputs.forEach( $input => {
         $input.addEventListener( 'change', this.changePriceCB )
      } )
   }

   removeEvents() {
      this.$inputs.forEach( $input => {
         $input.removeEventListener( 'change', this.changePriceCB )
      } )
   }

   changePrice() {
      const $price = this.$modal.querySelector( this.price )
      const $currentValue = this.$modal.querySelector( 'input:checked' )
      $price.textContent = $currentValue.value
   }
}