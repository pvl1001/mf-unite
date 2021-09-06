window.nextForm = (open, close) => {
   event.preventDefault()
   $( close ).css('display', 'none')
   $( open ).css('display', 'flex')
}