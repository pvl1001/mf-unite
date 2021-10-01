import prop from "../prop";

window.hideResult = () => {
   $( prop.input ).val( '' )
   $( '.success-check' ).hide();
   $( '.unite-address__offer' ).hide();
   $( '#unite' ).hide()
   $( '#addressCheckHead' ).show()
   prop.flagValid = false
}
