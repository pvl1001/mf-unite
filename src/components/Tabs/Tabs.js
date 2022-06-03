window.onload = () => {
   const $tabs = document.getElementById( 'tabs' )
   const $select = document.getElementById( 'select' )
   const $select_current = document.getElementById( 'select_current' )
   const $select_list = $select.querySelectorAll( 'li' )
   const $tabsItems = $tabs.querySelectorAll( 'li' )
   const $title = document.getElementById( 'tariffs_title' )
   const slider = '#tariffs-slider'


   $tabsItems.forEach( item => {
      item.addEventListener( 'click', clickHandler )
   } )

   function filterSlider( ctx ) {
      const tabId = ctx.dataset.tabId

      $( slider ).slick( 'slickUnfilter' )

      if ( tabId === 'all' ) {
         $title.textContent = 'Все тарифы'
      } else {
         $( slider ).slick( 'slickFilter', function () {
            $title.textContent = 'Тарифы ' + tabId
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

      toPlug('.tariffs', -50, 200)
   }

   function openSelect() {
      !$select.classList.contains( 'open' )
         ? $select.classList.add( 'open' )
         : $select.classList.remove( 'open' )
   }

   $select_current.addEventListener( 'click', openSelect )

   $select_list.forEach( $selectItem => {
      $selectItem.addEventListener( 'click', function () {
         $select_current.innerHTML = this.innerHTML
         filterSlider( this )
         openSelect()
      } )
   } )

}