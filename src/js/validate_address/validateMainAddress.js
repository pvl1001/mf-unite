import prop from "./prop";

export const validateMainAddress = (success, offer, address) => {
   let input = $( '#CHKADR input' )
   $( 'input[name=address] + label' ).hide()
   $( '.unite-address__offer' )[offer]()
   $( '#unite' )[offer]()
   $( '.success-check' )[success]();
   $( address ).text( input.val() );
   $( '#addressCheckHead' ).hide()
   prop.flagValid = true
}