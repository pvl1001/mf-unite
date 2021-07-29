import prop from "./prop";
import {showHideLabel} from "./showHideLabel";

const checkNoFullAddress = () => {
   if ($( '#CHKADR input' ).val() && !prop.flagValid) {
      showHideLabel('show')
   }
}

$( prop.input ).on( 'keydown', checkNoFullAddress )