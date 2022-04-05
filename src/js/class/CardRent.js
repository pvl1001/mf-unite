export class CardRent {
   constructor(props) {
      this.modal = document.getElementById( props.tariff.id )
      this.card = this.modal.querySelector( `#card-${props.tariff.id}-${props.equipment.id}` )
      this.switchCard = this.card.querySelector( props.switchCardSelector )
      this.price = this.card.querySelector( props.priceSelector )
      this.totalPriceTempl = this.modal.querySelector( props.totalPriceSelector )
      this.description = this.modal.querySelector( props.descriptionSelector )
      this.totalPrice = props.tariff.price
      this.oldPrice = props.tariff.oldPrice
      this.index = props.i
      this.tariff = props.tariff.id

      this.sumTotalPrice = () => {
         const parentModal = document.getElementById( this.tariff )
         const cards = parentModal.querySelectorAll( '.dop-options-card' )
         const cardsSwitchOn = Array.from( cards ).filter( card => card.querySelector( '.switch input' ).checked )
         const sumCards = this.isCardsSwitchOn( cardsSwitchOn )

         this.totalPriceTempl.textContent = sumCards + this.totalPrice + ' ₽'
         this.sumOldPrice( sumCards )
         this.isDescription( cardsSwitchOn )
      }
   }

   sumOldPrice(sumCards) {
      const salePrice = this.modal.querySelector( '.tariff-modal__price-old' )
      if (this.oldPrice && salePrice) salePrice.textContent = this.oldPrice + sumCards + ' ₽'
   }

   isCardsSwitchOn(switches) {
      return switches
         .map( card => this.filterNum(
            card.querySelector( '.price__current' ) ? card.querySelector( '.price__current' ).textContent : '0') )
         .reduce( (a, b) => a + b, 0 )
   }

   addEvents() {
      this.switchCard.addEventListener( 'change', this.sumTotalPrice )
      this.sumTotalPrice()
   }

   removeEvents() {
      this.switchCard.removeEventListener( 'change', this.sumTotalPrice )
   }

   filterNum(val) {
      return parseInt( val.match( /\d+/ ) )
   }

   isDescription(cardsSwitchOn) {
      cardsSwitchOn.length
         ? this.description.style.visibility = 'visible'
         : this.description.style.visibility = 'hidden'
   }

}
