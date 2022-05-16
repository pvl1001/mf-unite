import prop from "@/js/prop";

typeof VK !== 'undefined' && VK.Goal( 'view_content' )

// Аналитика скролла страницы в %
const paramsScroll = [ 100 ]
const usedParamsScroll = []

window.addEventListener( 'scroll', () => {
   const height = (document.body.scrollHeight - window.innerHeight) / 100
   const scroll = Math.round( window.scrollY / height / 5 ) * 5

   paramsScroll.forEach( param => {
      if ( usedParamsScroll.indexOf( param ) === -1 && scroll === param ) {
         usedParamsScroll.push( param )
         typeof VK !== 'undefined' && VK.Goal( 'page_view' )
      }
   } )

} )

export function analytics( goal ) {
   typeof VK !== 'undefined' && VK.Goal( goal )
   const _tmr = window._tmr || (window._tmr = [])
   _tmr.push( { "type": "reachGoal", "id": 3239443, "goal": goal } )
}


export function setPixelData(id) {
   window.advcake_data = window.advcake_data || []
   window.advcake_data.push({
      pageType: 6,
      user: {
         email: '',
         type: ''
      },
      leadInfo: {
         id,
         name: `Заявка`,
         totalPrice: 0,
         leadid: '',
         coupon: ''
      }
   })
}

export function postRegister(data) {
   const ct_site_id = '37410'

   $.ajax( {
         url: 'https://api.calltouch.ru/calls-service/RestAPI/requests/' + ct_site_id + '/register/',
         dataType: 'json',
         type: 'POST',
         data
      }
   )
}
