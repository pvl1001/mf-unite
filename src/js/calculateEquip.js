import tariffs from '../json/tariffs.json'

class CardRent {
   constructor(tariff, equipment, index) {
      this.modal = document.getElementById( tariff.id )
      this.card = this.modal.querySelector( '#card-' + tariff.id + '-' + equipment.id )
      this.switchCard = this.card.querySelector( '.switch input' )
      this.price = this.card.querySelector( '.price__current' )
      this.totalPriceTempl = this.modal.querySelector( '.tariff-modal__price .price__current' )
      this.totalPrice = tariff.price
      this.index = index
      this.tariff = tariff.id
      this.eventSumTotalPrice = this.sumTotalPrice.bind( this )
   }


   get sumArr() {
      return +this.sumTotalPrice[this.tariff].reduce( (a, b) => +a + +b )
   }

   filterNum(num) {
      return parseInt(num.match(/\d+/) )
   }

   addInArrPrice() {
      this.switchCard.checked
         ? this.sumTotalPrice[this.tariff][this.index] = this.filterNum(this.price.textContent )
         : this.sumTotalPrice[this.tariff][this.index] = 0
   }

   sumTotalPrice() {
      this.sumTotalPrice[this.tariff] = this.sumTotalPrice[this.tariff] || []
      this.addInArrPrice()
      return this.totalPriceTempl.textContent = this.totalPrice + this.sumArr
   }

   eventSwitch() {
      this.switchCard.addEventListener( 'change', this.eventSumTotalPrice )
   }
}

class CardPlan extends CardRent {
   constructor(tariff, equipment, index) {
      super( tariff, equipment, index )

      this.inputs = this.card.querySelectorAll( 'input[type="radio"]' )
      this.eventChangePrice = this.changePrice.bind( this )
      this.eventInputDisabled = this.inputDisabled.bind( this )
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
      } )
      this.sumTotalPrice()
   }

   eventSwitch() {
      this.switchCard.addEventListener( 'change', this.eventInputDisabled )
   }

   eventRadio(input) {
      input.addEventListener( 'change', this.eventChangePrice )
   }

}

class CardSim extends CardRent {
   constructor(tariff, equipment, i) {
      super( tariff, equipment, i );

      this.counter = this.card.querySelector( '.counter' )
      this.minus = this.counter.querySelector( '.counter__minus' )
      this.plus = this.counter.querySelector( '.counter__plus' )
      this.cardPrice = this.price.textContent
      this.eventCntMinus = this.cntMinus.bind( this )
      this.eventCntPlus = this.cntPlus.bind( this )
      this.eventIsCounter = this.isCounter.bind( this )
   }


   isCounter() {
      this.minus.addEventListener( 'click', this.eventCntMinus )
      this.plus.addEventListener( 'click', this.eventCntPlus )
      this.sumTotalPrice()
   }

   cntMinus() {
      let cnt = this.counter.querySelector( 'input' )
      if (cnt.value > 1) --cnt.value
      this.sumPriceCard( cnt.value )
      if (this.switchCard.checked) this.sumTotalPrice()
   }

   cntPlus() {
      let cnt = this.counter.querySelector( 'input' )
      if (cnt.value < 10) ++cnt.value
      this.sumPriceCard( cnt.value )
      if (this.switchCard.checked) this.sumTotalPrice()

   }

   sumPriceCard(cnt) {
      this.price.textContent = this.cardPrice * cnt
   }

   eventSwitch() {
      this.switchCard.addEventListener( 'change', this.eventIsCounter )
   }

}


window.onload = () => {
   tariffs.forEach( tariff => {

      tariff.equipments.forEach( (equipment, i) => {
         if (equipment.plan) {
            new CardPlan( tariff, equipment, i ).eventSwitch()
         } else if (equipment.id === 'equipment-sim') {
            const cardSim = new CardSim( tariff, equipment, i )
            cardSim.eventSwitch()
            cardSim.isCounter()
         } else {
            new CardRent( tariff, equipment, i ).eventSwitch()
         }
      } )

   } )
}