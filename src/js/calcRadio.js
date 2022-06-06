import vezde from '../data/tariffVezde'


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

      this.switch[0].checked && arrSwitchVal.push(vezde.equipments[0].price)
      this.sumPrice = arrSwitchVal.reduce( ( a, b ) => a + b, vezde.priceWithSale )
      this.sumOldPrice = arrSwitchVal.reduce( ( a, b ) => a + b, vezde.price )

      this.totalPrice.text( this.sumPrice + ' ₽' )
      this.oldPrice.text( this.sumOldPrice + ' ₽' )
   }
}
