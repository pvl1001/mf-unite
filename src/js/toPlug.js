window.toPlug = ( { scrollTo, collapse, px = 0, ms = 500 } ) => {
   $( '.modal' ).modal( 'hide' )
   $( 'html,body' ).animate( {
      scrollTop:
         $( scrollTo ).offset().top + px + "px"
   }, {
      duration: ms
   } )
      .promise().done( () => {
      if ( collapse ) {
         $( collapse ).collapse( 'show' )
      }
   } )
}