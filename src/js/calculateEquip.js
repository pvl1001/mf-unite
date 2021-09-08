import tariffs from '../json/tariffs.json'

$( '.tariff-modal' ).on( 'shown.bs.modal', function (e) {
   const tariff = tariffs.find( tariff => tariff.id === e.currentTarget.id )
   this[tariff.id] = []
   tariff.equipments.forEach( (equipment, i) => {
      if (equipment.plan) {
         window.cardPlan = new CardPlan( tariff, equipment, i )
         this[tariff.id].push( cardPlan )
         cardPlan.addEvents()
      } else if (equipment.id === 'equipment-sim') {
         window.cardSim = new CardSim( tariff, equipment, i )
         this[tariff.id].push( cardSim )
         cardSim.addEvents()
         cardSim.isCounter()
      } else {
         window.cardRent = new CardRent( tariff, equipment, i )
         this[tariff.id].push( cardRent )
         cardRent.addEvents()
      }
   } )

} )
$( '.tariff-modal' ).on( 'hidden.bs.modal', function (e) {
   this[e.currentTarget.id].forEach( el => el.removeEvents() )
} )

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
      this.description = this.modal.querySelector( '.tariff-modal__price-desc' )
      this.eventSumTotalPrice = this.sumTotalPrice.bind( this )
   }


   addEvents() {
      this.switchCard.addEventListener( 'change', this.eventSumTotalPrice )
      this.sumTotalPrice()
   }

   removeEvents() {
      this.switchCard.removeEventListener( 'change', this.eventSumTotalPrice )
   }

   isDescription(cardsSwitchOn) {
      cardsSwitchOn.length
         ? this.description.style.visibility = 'visible'
         : this.description.style.visibility = 'hidden'
   }

   sumTotalPrice() {
      debugger
      const parentModal = document.getElementById( this.tariff )
      const cards = parentModal.querySelectorAll( '.dop-options-card' )
      const cardsSwitchOn = Array.from( cards ).filter( card => card.querySelector('.switch input').checked )
      this.totalPriceTempl.textContent = cardsSwitchOn
         .map(card => parseInt( card.querySelector('.price__current').textContent.match( /\d+/ ) ) )
         .reduce((a, b) => a + b, this.totalPrice)
      this.isDescription(cardsSwitchOn)
   }
}

class CardPlan extends CardRent {
   constructor(tariff, equipment, index) {
      super( tariff, equipment, index )

      this.inputs = this.card.querySelectorAll( 'input[type="radio"]' )
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


   addEvents() {
      this.switchCard.addEventListener( 'change', this.eventIsCounter )
   }

   removeEvents() {
      this.switchCard.removeEventListener( 'change', this.eventIsCounter )
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
      this.switchCard.checked = true
      this.sumTotalPrice()
   }

   sumPriceCard(cnt) {
      this.price.textContent = this.cardPrice * cnt
   }

}