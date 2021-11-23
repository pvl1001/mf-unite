import {CardRent} from "./CardRent";

export class CardSim extends CardRent {
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
