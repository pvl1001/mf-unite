import unite from '../json/unite.json'

const counter = $( '#counterBanner input' )

window.calcRadio = {
   cnt: counter.val(),
   totalPrice: '',
   switch: '',
   switchBanner: '',
   priceSwitch: [],
   sumPrice: [],
   sum(id, index) {
      this.switch = $( id + ' .item-option .switch input' ) // все switch
      this.totalPrice = $( id + ' .new-price' ) // общая цена
      this.priceSwitch = $( id + ' .switch-price span' ) // switch цена
      this.switchBanner = $( '.banner-for-their .switch input' )
      this.priceBanner = $( '.banner-for-their .item-option__num' )
      let sumBanner = +counter.val() * +this.priceBanner.text()
      const arrSwitchVal = []

      this.switch.get().forEach( (el, i) => {
         if ($( el ).prop( 'checked' )) {
            arrSwitchVal.push( +this.priceSwitch[i].innerHTML )
         }
      } )

      this.sumPrice = arrSwitchVal.reduce( (a, b) => a + b, unite.priceSale )

      if (this.switchBanner.prop( 'checked' ) && id === '#ForTheir') {
         this.sumPrice = this.sumPrice + sumBanner
         return $( this.totalPrice ).text( this.sumPrice )
      }

      $( this.totalPrice ).text( this.sumPrice )

   }

}


