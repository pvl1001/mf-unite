import tariffs from '../json/tariffs.json'

class CardRent {
   constructor(card, switchCard, price, totalPriceTempl, totalPrice, index) {
      this.card = card
      this.switchCard = switchCard
      this.price = price
      this.totalPriceTempl = totalPriceTempl
      this.totalPrice = totalPrice
      this.index = index
   }

   filterPrice(price) {
      const arrPrice = price.textContent.split( ' ' )
      return arrPrice[arrPrice.length -2]
   }

   sumTotalPrice() {
      // debugger
      this.sumTotalPrice.arrPrice = this.sumTotalPrice.arrPrice || []
      this.switchCard.checked
         ? this.sumTotalPrice.arrPrice[this.index] = this.filterPrice(this.price)
         : this.sumTotalPrice.arrPrice[this.index] = 0
      const sumArrPrice = this.sumTotalPrice.arrPrice.reduce( (a, b) => +a + +b )
      console.log( this.sumTotalPrice.arrPrice, sumArrPrice)
      return this.totalPriceTempl.textContent = this.totalPrice + +sumArrPrice
   }

   eventSwitch() {
      $( this.switchCard ).on( 'change', this.sumTotalPrice.bind( this ) )
   }
}

class CardPlan extends CardRent {
   constructor(card, switchCard, price, inputs, totalPriceTempl, totalPrice, index) {
      super( card, switchCard, price, totalPriceTempl, totalPrice, index)
      this.inputs = inputs
   }


   changePrice() {
      const radioChecked = Array.from( this.inputs ).find( input => input.checked )
      this.price.textContent = radioChecked.value + ' '
   }

   inputDisabled() {
      this.inputs.forEach( input => {
         input.disabled = !input.disabled
         this.eventRadio( input )
      } )
      this.sumTotalPrice()
   }

   eventSwitch() {
      $( this.switchCard ).on( 'change', this.inputDisabled.bind( this ) )
   }

   eventRadio(input) {
      $( input ).on( 'change', this.changePrice.bind( this ) )
   }

}


window.onload = () => {
   tariffs.forEach( tariff => {
      const modal = document.getElementById( tariff.id )
      const totalPriceTempl = modal.querySelector( '.tariff-modal__price .price__current' )

      tariff.equipments.forEach( (equipment, i) => {
         const card = modal.querySelector( '#card-' + tariff.id + '-' + equipment.id )
         if (equipment.plan) {
            new CardPlan(
               card,
               card.querySelector( '.switch input' ),
               card.querySelector( '.price__current' ),
               card.querySelectorAll( 'input[type="radio"]' ),
               totalPriceTempl,
               tariff.price,
               i
            ).eventSwitch()
         } else {
            new CardRent(
               card,
               card.querySelector( '.switch input' ),
               card.querySelector( '.price__current' ),
               totalPriceTempl,
               tariff.price,
               i
            ).eventSwitch()
         }
      } )

   } )
}