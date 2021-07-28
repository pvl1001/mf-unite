window.nextForm = (open, close) => {
   event.preventDefault()
   $( close ).hide()
   $( open ).show()
}