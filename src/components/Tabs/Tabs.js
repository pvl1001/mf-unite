window.addEventListener( 'DOMContentLoaded', () => {
   const $tabs = document.getElementById( 'tabs' )
   const $tabsItems = $tabs.querySelectorAll( 'li' )
   const slider = '#tariffs-slider'


   $tabsItems.forEach( item => {
      item.addEventListener( 'click', clickHandler )
   } )

   function filterSlider( ctx ) {
      const tabId = ctx.dataset.tabId

      $( slider ).slick( 'slickUnfilter' )

      if ( tabId !== 'all' ) {
         $( slider ).slick( 'slickFilter', function () {
            return this.dataset.group === tabId
         } )
      }

      $( slider ).slick( 'slickGoTo', 0 )

   }

   function clickHandler() {
      const activeTab = Array.from( $tabsItems ).find( item => item.classList.contains( 'active' ) )

      activeTab.classList.remove( 'active' )

      $( '.multi-collapse' ).collapse( 'hide' )

      if ( !this.classList.contains( 'active' ) ) {
         this.classList.add( 'active' )
      }

      filterSlider( this )

      toPlug( {
         scrollTo: '.tariffs',
         ms: 200
      } )
   }

} )
