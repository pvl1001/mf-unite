window.onload = () => {
   const $year = document.getElementById('footer_year')
   $year.textContent = new Date().getFullYear()
}