equipments = {
   open(id, i, eventLabel) {
      const modal = document.querySelector( id )
      modal.classList.add( 'hide-price' )

      openModal( id, i )
      analytics( eventLabel )

      $( id ).on( 'hidden.bs.modal', () => {
         modal.classList.remove( 'hide-price' )
      } )
   }

}


cardEquip = {
   card: '',
   inputs: [],
   cardPrice: '',

   switch(id) {
      const card = new Card(id)
      console.log(card)
      // this.getCurrentData(id)
      // this.disabledInput()
   },

   // getCurrentData(id) {
   //    this.card = document.querySelector( '.dop-options-card__option_' + id )
   //    this.inputs = this.card.querySelectorAll( 'input[type="radio"]' )
   //    this.cardPrice = this.card.querySelector( '.price__current' )
   // },
   //
   // disabledInput() {
   //    if (this.inputs.length) {
   //       this.inputs.forEach( input => {
   //          input.disabled = !input.disabled
   //       } )
   //       this.inputEvents( this.inputs )
   //    }
   // },
   //
   // inputEvents(inputs) {
   //    // debugger
   //    inputs.forEach(input => {
   //
   //       if (!input.disabled) {
   //          return input.addEventListener( 'click', this.clickRadio)
   //       }
   //       return input.removeEventListener( 'click', this.clickRadio )
   //    })
   //
   // },
   //
   // clickRadio() {
   //    console.log(this)
   //    window.cardEquip.cardPrice.textContent = this.value + ' '
   // },
}

// class Card {
//    constructor(id) {
//       this.id = id
//    }
//
//
//    get card () {
//       return document.querySelector( '.dop-options-card__option_' + this.id )
//    }
//    get price() {
//       return this.card.querySelector( '.price' )
//    }
//    get inputs() {
//       return this.card.querySelectorAll( 'input[type="radio"]' )
//    }
//    get switch() {
//       return this.card.querySelector('.switch input')
//    }
//    // get currentInput() {
//    //    return this.inputs.find(input => input.checked)
//    // }
//
//
//    changePrice() {
//       this.inputs.forEach(input => input.disabled = !input.disabled)
//    }
//    eventSwitch() {
//       this.switch.addEventListener('onchange', this.disabledRadio)
//    }
//    disabledRadio() {
//       console.log(this)
//    }
//
//
// }
