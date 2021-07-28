import prop from "./prop";

window.hideResult = () => {
   $( '#CHKADR input' ).val( '' )
   $( '.success-check' ).hide();
   $( '.unite-address__offer' ).hide();
   $( '#unite' ).hide()
   $( '#addressCheckHead' ).show()
   prop.flagValid = false
}
