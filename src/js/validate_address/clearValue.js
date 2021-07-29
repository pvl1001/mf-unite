import prop from "./prop";

const clearValue = (event) => {
   if (prop.flagValid && event) hideResult()
}

$( prop.input ).on( 'keydown', clearValue )
