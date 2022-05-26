window.onload = () => {
   const $tabs = document.getElementById( 'tabs' )
   const $tabsItems = $tabs.querySelectorAll( 'li' )
   const $title = document.getElementById( 'tariffs_title' )
   const slider = '#tariffs-slider'


   $tabsItems.forEach( item => {
      item.addEventListener( 'click', clickHandler )
   } )


   function clickHandler() {
      const activeTab = Array.from( $tabsItems ).find( item => item.classList.contains( 'active' ) )

      activeTab.classList.remove( 'active' )

      const tabId = this.id.replace( 'tab-', '' )

      $( '.multi-collapse' ).collapse( 'hide' )

      $( slider ).slick( 'slickUnfilter' )

      if ( !this.classList.contains( 'active' ) ) {
         this.classList.add( 'active' )
      }

      if ( tabId === 'all' ) {
         $title.textContent = 'Все тарифы'
      } else {
         $( slider ).slick( 'slickFilter', function () {
            $title.textContent = 'Тарифы ' + tabId
            return this.dataset.group === tabId
         } )
      }

   }

}




