$( '.modalAlmond' ).on( 'shown.bs.modal', function (e) {
   window.almond = new Almond( e.currentTarget.id )
   almond.addEvents()
} )
$( '.modalAlmond' ).on( 'hidden.bs.modal', function (e) {
   almond.removeEvents()
} )
$( '.modalAboutAlmond' ).on( 'shown.bs.modal', function (e) {
   window.aboutAlmond = new AboutAlmond( e.currentTarget.id )
   aboutAlmond.eventSwitch()
} )
$( '.modalAboutAlmond' ).on( 'hidden.bs.modal', function (e) {
   aboutAlmond.eventRemove()
} )


class Almond {
   constructor(id) {
      this.id = id
      this.modal = document.getElementById( id )
      this.totalPriceTempl = this.modal.querySelector( '.price' )
      this.totalPrice = this.modal.querySelector( '.price .new-price' )
      this.cards = this.modal.querySelectorAll( '.card-price' )
      this.btn = this.modal.querySelector( '.modalAlmond__price-btn' )
   }

   addEvents() {
      this.cards.forEach( (card, index) => {
         card.addEventListener( 'click', this.card )
      } )
      this.btn.addEventListener('click', this.clickBtn)
   }

   removeEvents() {
      this.cards.forEach( (card, index) => {
         card.removeEventListener( 'click', this.card )
      } )
      this.btn.removeEventListener('click', this.clickBtn)
   }


   clickBtn() {
      console.log(almond.id)
      $('#' + almond.id).modal('hide')
      openOrder('send_', 'almond')
   }

   card() {
      almond.card.index = Array.from( almond.cards ).indexOf( this )
      almond.card.template = this
   }

   sumPrices(sumCard) {
      this.sumPrices[this.id] = this.sumPrices[this.id] || []
      this.sumPrices[this.id][almond.card.index] = sumCard
      this.totalPrice.textContent = this.sumPrices[this.id].reduce( (a, b) => a + b )
      this.showTotalPrice( +this.totalPrice.textContent )
      this.disabledBtn( +this.totalPrice.textContent )
      this.activeCard( sumCard )
   }

   showTotalPrice(totalPrice) {
      totalPrice
         ? this.totalPriceTempl.style.display = 'block'
         : this.totalPriceTempl.style.display = 'none'
   }

   disabledBtn(totalPrice) {
      totalPrice
         ? this.btn.disabled = false
         : this.btn.disabled = true
   }

   activeCard(sumCard) {
      let cnt = aboutAlmond.counter.querySelector( 'input' )
      let cntCard = almond.card.template.querySelector( '.card-price__cnt span' )

      if (sumCard) {
         cntCard.textContent = cnt.value
         return almond.card.template.classList.add( 'active' )
      }
      return almond.card.template.classList.remove( 'active' )
   }

}


class AboutAlmond extends Almond {
   constructor(id) {
      super( id )

      this.switch = this.modal.querySelector( '.switch input' )
      this.isOnSwitch = this.onSwitch.bind( this )
      this.price = this.modal.querySelector( '.item-option__num' )
      this.counter = this.modal.querySelector( '.counter' )
      this.plus = this.counter.querySelector( '.counter__plus' )
      this.minus = this.counter.querySelector( '.counter__minus' )
      this.eventCntMinus = this.cntMinus.bind( this )
      this.eventCntPlus = this.cntPlus.bind( this )
      this.totalPrice = almond.totalPrice.textContent
   }


   eventSwitch() {
      this.switch.addEventListener( 'change', this.isOnSwitch )
      this.minus.addEventListener( 'click', this.eventCntMinus )
      this.plus.addEventListener( 'click', this.eventCntPlus )
   }

   eventRemove() {
      this.switch.removeEventListener( 'change', this.isOnSwitch )
      this.minus.removeEventListener( 'click', this.eventCntMinus )
      this.plus.removeEventListener( 'click', this.eventCntPlus )
   }

   onSwitch() {
      const cnt = this.counter.querySelector( 'input' )
      if (!this.switch.checked) return almond.sumPrices( 0 )
      return this.sumCard( cnt.value )
   }

   cntMinus() {
      let cnt = this.counter.querySelector( 'input' )
      if (cnt.value > 1) --cnt.value
      if (this.switch.checked) this.sumCard( cnt.value )
   }

   cntPlus() {
      let cnt = this.counter.querySelector( 'input' )
      ++cnt.value
      this.switch.checked = true
      this.sumCard( cnt.value )
   }

   sumCard(cnt) {
      almond.sumPrices( this.price.textContent * cnt )
   }

}