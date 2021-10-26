import tariffs from '../json/tariffs.json'

$( '.about-tariff-modal' )
   .on( 'shown.bs.modal', function (e) {
      const tariff = tariffs.find( tariff => tariff.id === e.currentTarget.id )
      this[tariff.id] = []
      tariff.equipments.forEach( (equipment, i) => {
         const switchCardSelector = '.switch input'
         const priceSelector = '.price__current'
         const totalPriceSelector = '.tariff-modal__price .price__current'
         const descriptionSelector = '.tariff-modal__price-desc'
         const cardProps = {
            tariff,
            equipment,
            i,
            switchCardSelector,
            priceSelector,
            totalPriceSelector,
            descriptionSelector,
         }


         if (equipment.plan) {
            const inputsSelector = 'input[type="radio"]'
            window.cardPlan = new CardPlan( cardProps, inputsSelector )
            this[tariff.id].push( cardPlan )
            cardPlan.addEvents()
         } else if (equipment.id === 'equipment-sim') {
            const counterSelector = '.counter'
            const minusSelector = '.counter__minus'
            const plusSelector = '.counter__plus'
            const propsSim = {counterSelector, minusSelector, plusSelector}
            window.cardSim = new CardSim( cardProps, propsSim )
            this[tariff.id].push( cardSim )
            cardSim.addEvents()
         } else if (equipment.id === 'eq-almond') {
            window.cardAlmond = new CardRent( cardProps )
            this[tariff.id].push( cardAlmond )
            cardAlmond.addEvents()
         } else {
            window.cardRent = new CardRent( cardProps )
            this[tariff.id].push( cardRent )
            cardRent.addEvents()
         }
      } )
   } )
   .on( 'hidden.bs.modal', function (e) {
      this[e.currentTarget.id].forEach( el => el.removeEvents() )
   } )

class CardRent {
   constructor(props) {
      this.modal = document.getElementById( props.tariff.id )
      this.card = this.modal.querySelector( `#card-${props.tariff.id}-${props.equipment.id}` )
      this.switchCard = this.card.querySelector( props.switchCardSelector )
      this.price = this.card.querySelector( props.priceSelector )
      this.totalPriceTempl = this.modal.querySelector( props.totalPriceSelector )
      this.description = this.modal.querySelector( props.descriptionSelector )
      this.totalPrice = props.tariff.price
      this.index = props.i
      this.tariff = props.tariff.id
      this.sumTotalPrice = () => {
         const parentModal = document.getElementById( this.tariff )
         const cards = parentModal.querySelectorAll( '.dop-options-card' )
         const cardsSwitchOn = Array.from( cards ).filter( card => card.querySelector( '.switch input' ).checked )
         this.totalPriceTempl.textContent = cardsSwitchOn
            .map( card => card.querySelector( '.price__current' )
               ? this.filterNum( card.querySelector( '.price__current' ).textContent )
               : 0
            )
            .reduce( (a, b) => a + b, this.totalPrice )
         this.isDescription( cardsSwitchOn )
      }
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

class CardPlan extends CardRent {
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

class CardSim extends CardRent {
   constructor(props, propsSim) {
      super( props )

      this.equipment = props.equipment
      this.counter = this.card.querySelector( propsSim.counterSelector )
      this.minus = this.counter.querySelector( propsSim.minusSelector )
      this.plus = this.counter.querySelector( propsSim.plusSelector )
      this.cardPrice = this.price.textContent
      this.eventCntMinus = this.cntMinus.bind( this )
      this.eventCntPlus = this.cntPlus.bind( this )
      this.eventIsCounter = this.isCounter.bind( this )
   }


   addEvents() {
      this.switchCard.addEventListener( 'change', this.eventIsCounter )
      this.isCounter()
   }

   removeEvents() {
      this.switchCard.removeEventListener( 'change', this.eventIsCounter )
      this.minus.removeEventListener( 'click', this.eventCntMinus )
      this.plus.removeEventListener( 'click', this.eventCntPlus )
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
      this.sumSale()
      if (this.switchCard.checked) this.sumTotalPrice()
   }

   cntPlus() {
      let cnt = this.counter.querySelector( 'input' )
      if (cnt.value < 10) ++cnt.value
      this.sumPriceCard( cnt.value )
      this.switchCard.checked = true
      this.sumSale()
      this.sumTotalPrice()
   }

   sumSale() {
      const sale = this.card.querySelector( '.price__old' )
      if (sale) sale.textContent = this.filterNum( this.price.textContent ) / 0.6 + ' ₽'
   }

   sumPriceCard(cnt) {
      this.price.textContent = this.equipment.oldPrice * 0.6 * cnt
   }

}