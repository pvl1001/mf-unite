window.toPlug = (scrollTo, px = 0, ms = 500) => {
   $( '.modal' ).modal( 'hide' )
   $( 'html,body' ).animate( {
      scrollTop:
         $( scrollTo ).offset().top + px + "px"
   }, {
      duration: ms
   } )
      .promise().done( () => {
      if (scrollTo === '.fiq') {
         $( '#collapse00' ).collapse( 'show' )
      }
   } )
}