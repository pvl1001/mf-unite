// счетчик
window.calculate = (e, name, aboutIndex, minus) => { // счетчик
   const inputSwitch = '#about_' + name + aboutIndex + ' .switch input'
   const almondCard = '#modalAlmond' + ' #' + name + aboutIndex
   let cntInput = $( '#counterID-' + name + aboutIndex )
   let cnt = +cntInput.val()
   $( inputSwitch ).attr( 'checked', true )
   if (cnt > 1 && minus === '-') {
      $( cntInput ).val( --cnt )
   }
   if (cnt >= 1 && minus !== '-') {
      $( cntInput ).val( ++cnt )
   }
   if ($( inputSwitch ).prop( 'checked', true )) {
      activeCard( e, almondCard, aboutIndex, name, cnt )
   }
}

window.activeCard = (e, almondCard, aboutIndex, name, cnt) => { // выделение активного блока оборудования
   $( almondCard ).addClass( 'active' )
   $( almondCard + ' .card-price__cnt span' ).text( cnt )
   e.target.parentElement.children[1].value = cnt
   sum( aboutIndex, name, cnt )
}

window.sum = (aboutIndex, name, cnt, off) => { // расчет суммы
   const blockPrice = $( '.modalAlmond__price-price' )
   const almondPrice = '#modalAlmond' + ' .new-price'
   const aboutPrice = '#about_' + name + aboutIndex + ' .item-option__num'
   let sumPrice = $( aboutPrice ).text() * cnt
   if (off) {
      sumPrice = 0
   }
   if (name !== 'almond-') {
      aboutIndex = +aboutIndex + 2
   }

   if (!sum.arrPrice) sum.arrPrice = []

   sum.arrPrice[aboutIndex] = sumPrice
   const totalPrice = sum.arrPrice.reduce( (a, b) => a + b )
   $( almondPrice ).text( totalPrice )

   totalPrice ?
      $( blockPrice ).show() :
      $( blockPrice ).hide()
}

window.switchInputAlmond = (name, aboutIndex) => {  // расчет суммы при переключателе
   let cnt = +$( '#counterID-' + name + aboutIndex ).val()
   const inputSwitch = '#about_' + name + aboutIndex + ' .switch input'
   const almondCard = '#modalAlmond' + ' #' + name + aboutIndex
   if ($( inputSwitch ).prop( 'checked' )) {
      sum( aboutIndex, name, cnt )
      return $( almondCard ).addClass( 'active' )
   }
   sum( aboutIndex, name, cnt, true )
   $( almondCard ).removeClass( 'active' )
}
