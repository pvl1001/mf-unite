import {CardRent} from "./CardRent";

export class CardPlan extends CardRent {
   constructor(props, inputsSelector) {
      super( props )

      this.inputs = this.card.querySelectorAll( inputsSelector )
      this.eventChangePrice = this.changePrice.bind( this )
      this.eventInputDisabled = this.inputDisabled.bind( this )
   }


   addEvents() {
      this.switchCard.addEventListener( 'change', this.eventInputDisabled )
   }

   removeEvents() {
      this.switchCard.removeEventListener( 'change', this.eventInputDisabled )
   }

   eventRadio(input) {
      input.addEventListener( 'change', this.eventChangePrice )
   }

   changePrice() {
      const radioChecked = Array.from( this.inputs ).find( input => input.checked )
      this.price.textContent = radioChecked.value + ' '
      this.sumTotalPrice()
   }

   inputDisabled() {
      this.inputs.forEach( input => {
         input.disabled = !input.disabled
         this.eventRadio( input )
         if (input.disabled) input.removeEventListener( 'change', this.eventChangePrice )
      } )
      this.sumTotalPrice()

   }

}
