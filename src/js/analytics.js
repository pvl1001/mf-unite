window.eventFired = []

document.addEventListener( "DOMContentLoaded", function () {
   const imageObserver = new IntersectionObserver( (entries, blockObserver) => {

      entries.forEach( (entry) => {
         if (entry.isIntersecting) {
            const lazyBlock = entry.target.getAttribute( 'data-view' )
            const widthW = window.innerWidth
            if (eventFired.indexOf( lazyBlock ) === -1) {
               eventFired.push( lazyBlock )
               if (widthW > 1024) {
                  gtag( 'event', 'desktop', {
                     'event_category': 'EventHomeMF_ViewBlock',
                     'event_label': lazyBlock,
                     'non_interaction': true
                  } )
               } else if (widthW > 700) {
                  gtag( 'event', 'tablet', {
                     'event_category': 'EventHomeMF_ViewBlock',
                     'event_label': lazyBlock,
                     'non_interaction': true
                  } )
               } else {
                  gtag( 'event', 'mobile', {
                     'event_category': 'EventHomeMF_ViewBlock',
                     'event_label': lazyBlock,
                     'non_interaction': true
                  } )
               }
            }
         }
      } )
   } )
   const arr = document.querySelectorAll( '[data-view]' )
   arr.forEach( (v) => {
      imageObserver.observe( v )
   } )
} )

window.analytics = eventLabel => {
   gtag('event', 'click', {'event_category': 'EventHomeMF','event_label': eventLabel })
}