import prop from "../prop";
import {modalCardsAlmond} from "../calculateEquip";
import {data} from '../calculateAlmond'

export class CardAlmond {
   constructor(props) {
      this.$modal = props.$modalPerformance
      this.$cardAlmond = props.$cardAlmond
      this.index = props.i

      this.$counter = this.$modal.querySelector( '.counter' )
      this.counterPlus = this.$counter.querySelector( '.counter__plus' )
      this.counterMinus = this.$counter.querySelector( '.counter__minus' )
      this.$switch = this.$modal.querySelector( '.switch input' )
      this.$btnSend = document.querySelector( '.modalAlmond__price-btn' )
      this.$btnSendOrder = document.querySelector( '.js-modalAlmond-btn' )
   }


   get data() {
      return data[prop.currentModalIndex]
   }

   get performance() {
      return data[prop.currentModalIndex].performance[this.index]
   }

   addEvents() {
      this.counterPlus.addEventListener( 'click', () => this.cntPlus() )
      this.counterMinus.addEventListener( 'click', () => this.cntMinus() )
      this.$switch.addEventListener( 'change', () => this.switchStatus() )

      if(this.index === 0) {
         this.$btnSend.addEventListener( 'click', () => this.eventBtnSend())
         this.$btnSendOrder.addEventListener('click', () => this.eventBtnOrderSend())
      }

   }

   eventBtnSend() {
      const $card = document.querySelector( '.tariff-modal.show .dop-options-card_almond' )
      const $price = $card.querySelector( '.price__current' )
      const $switch = $card.querySelector( '.switch input' )

      $price.textContent = this.data.totalPrice + ' '
      $switch.checked = true
      modalCardsAlmond[0].sumTotalPrice() // произвести расчет карточек в окне "Подробнее о тарифе"
      $( '#modalAlmond' ).modal( 'hide' )
   }

   eventBtnOrderSend() {
      $( '#order' ).modal( 'show' )
      openOrder( {label: 'almond', block: 'equipment'}, '#modalAlmond .new-price', 'Умный дом' )
   }

   cntPlus() {
      let cnt = this.$counter.querySelector( 'input' )
      cnt.value = ++this.performance.cnt
      this.switchStatus( true )
      this.sumCard()
   }

   cntMinus() {
      let cnt = this.$counter.querySelector( 'input' )
      if (this.performance.cnt > 1) {
         cnt.value = --this.performance.cnt
         this.sumCard()
      }
   }

   switchStatus(boolean = false) {
      if (boolean) return this.performance.status = this.$switch.checked = true
      // debugger
      this.performance.status = this.$switch.checked
      this.sumCard()
   }

   isActiveCard() {
      const counterCard = this.$cardAlmond.querySelector( '.card-price__cnt span' )
      this.performance.status
         ? this.$cardAlmond.classList.add( 'active' )
         : this.$cardAlmond.classList.remove( 'active' )

      counterCard.textContent = this.performance.cnt
   }

   sumCard() {
      this.performance.status
         ? this.performance.totalPrice = this.performance.price * this.performance.cnt
         : this.performance.totalPrice = 0

      this.isActiveCard()
      this.sumAlmond()
      this.showTotalPrice()
   }

   sumAlmond() {
      const $price = document.querySelector( '.modalAlmond__price-price span' )
      this.data.totalPrice = this.data.performance
         .map( el => el.totalPrice )
         .reduce( (a, b) => a + b )
      $price.textContent = this.data.totalPrice
      return this.data.totalPrice
   }

   showTotalPrice() {
      const $price = document.querySelector( '.modalAlmond__price-price' )

      this.data.totalPrice
         ? $price.hidden = this.$btnSend.disabled = false
         : $price.hidden = this.$btnSend.disabled = true
   }

   disabledTotalPrice() {
      const $card = document.querySelector( '.tariff-modal.show .dop-options-card_almond' )
      const $price = $card.querySelector( '.price__current' )
      const $switch = $card.querySelector( '.switch input' )

      $switch.checked = false
      $price.textContent = this.data.startPrice + ' '
      modalCardsAlmond[0].sumTotalPrice()
   }

   changeBtnSend() {
      if(this.index === 0) {
         if (prop.currentModalIndex === data.length - 1) {
            this.$btnSend.hidden = true
            return this.$btnSendOrder.hidden = false
         }
         this.$btnSend.hidden = false
         this.$btnSendOrder.hidden = true
      }
   }

   render() {
      this.$counter.querySelector( 'input' ).value = this.performance.cnt
      this.$switch.checked = this.performance.status
      this.sumCard()
      this.changeBtnSend()
   }

}
