$( '#tariffs-slider' ).on( 'init', function () { // подогнать высоту блока "дополнительно"
   const $dopParams = document.querySelectorAll( '.js-dop-params' )
   const arrHeight = Array.from( $dopParams ).map( ( $dp => $dp.clientHeight ) )
   const maxHeight = Math.max(...arrHeight)
   $dopParams.forEach( dp => dp.style.minHeight = maxHeight + 'px' )
})

