import unite from '../data/unite.js'


window.calcRadio = {
   switch: '',
   totalPrice: '',
   oldPrice: '',
   sumPrice: [],
   sum( id ) {
      const arrSwitchVal = []
      this.switch = $( id + ' .switch input' ) // все switch
      this.totalPrice = $( id + ' .new-price' ) // общая цена
      this.oldPrice = $( id + ' .old-price' ) // цена без скидки

      this.switch[0].checked && arrSwitchVal.push(unite.routerPrice)

      this.sumPrice = arrSwitchVal.reduce( ( a, b ) => a + b, unite.priceSale )
      this.sumOldPrice = arrSwitchVal.reduce( ( a, b ) => a + b, unite.price )

      this.totalPrice.text( this.sumPrice + ' ₽' )
      this.oldPrice.text( this.sumOldPrice + ' ₽' )
   }
}
