import tariffs from '../json/tariffs.json'

class CardRent {
   constructor(card, switchCard, price, totalPriceTempl, totalPrice, index, tariff) {
      this.card = card
      this.switchCard = switchCard
      this.price = price
      this.totalPriceTempl = totalPriceTempl
      this.totalPrice = totalPrice
      this.index = index
      this.tariff = tariff
   }

   get sumArr() {
      return +this.sumTotalPrice[this.tariff].reduce( (a, b) => +a + +b )
   }

   addInArrPrice() {
      this.switchCard.checked
         ? this.sumTotalPrice[this.tariff][this.index] = parseInt(this.price.textContent)
         : this.sumTotalPrice[this.tariff][this.index] = 0
   }

   sumTotalPrice() {
      this.sumTotalPrice[this.tariff] = this.sumTotalPrice[this.tariff] || []
      this.addInArrPrice()
      return this.totalPriceTempl.textContent = this.totalPrice + this.sumArr
   }

   eventSwitch() {
      $( this.switchCard ).on( 'change', this.sumTotalPrice.bind( this ) )
   }
}

class CardPlan extends CardRent {
   constructor(card, switchCard, price, inputs, totalPriceTempl, totalPrice, index, tariff) {
      super( card, switchCard, price, totalPriceTempl, totalPrice, index, tariff)
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
         let testArr = []
         if (equipment.plan) {
            new CardPlan(
               card,
               card.querySelector( '.switch input' ),
               card.querySelector( '.price__current' ),
               card.querySelectorAll( 'input[type="radio"]' ),
               totalPriceTempl,
               tariff.price,
               i,
               tariff.id
            ).eventSwitch()
         } else {
            new CardRent(
               card,
               card.querySelector( '.switch input' ),
               card.querySelector( '.price__current' ),
               totalPriceTempl,
               tariff.price,
               i,
               tariff.id
            ).eventSwitch()
         }
      } )

   } )
}