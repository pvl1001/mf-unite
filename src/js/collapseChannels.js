const allChannels = document.querySelectorAll( '[data-tv-id]' )
const promises = []

async function getChannels( id ) {
   const response = await fetch( `https://home.megafon.ru/billing/bt/json/gettvchannelsbygroup?pack_id=${ id }` )
   return response.json()
}


allChannels.forEach( channels => channels.addEventListener( 'click', clickHandler ) )

async function clickHandler() {
   if ( !promises.length ) {
      allChannels.forEach( ( el ) => {
         promises.push( getChannels( el.dataset.tvId ) )
      } )
   }

   renderChannels( await Promise.all( promises ) )

   $( '.multi-collapse' ).collapse( 'toggle' )
}


function renderChannels( data ) {
   const $arrListChannels = document.querySelectorAll( '.collapse-channel__channels' )
   const $currentChannels = document.querySelectorAll( '[data-tv-id]' )
   const normalizeData = data.map( d => Object.values( d.packages )[0] )
   const filterData = Array.from( $currentChannels )
      .map( ch => normalizeData.find( p => p.id == ch.dataset.tvId ) )

   const allChannels = [ ...filterData ].sort( ( a, b ) => {
      const reduceA = Object.values( a.channels ).reduce( ( a, b ) => a + b.length, 0 )
      const reduceB = Object.values( b.channels ).reduce( ( a, b ) => a + b.length, 0 )
      return reduceB - reduceA
   } )[0]

   $arrListChannels.forEach( ul => {
      const currentData = filterData.find( el => el.id == ul.dataset.ulTvId )

      if (ul.children.length === 0) {
         for ( let channelGroup in allChannels.channels ) {
            const multiCollapse = channelGroup.replace( ' ', '' )
            const addEl = document.createElement( 'li' )

            addEl.className = 'collapse-channel__channel-group'
            addEl.innerHTML = `<a data-toggle="collapse"
                               class="collapse-channel__group-toggle"
                               data-target=".${ multiCollapse }"
                               aria-expanded="false"
                            >
                               <div class="collapse-channel__group-wrapper">
                                  <span class="collapse-channel__group-name">${ channelGroup }</span>
                                  <span class="collapse-channel__group-count">${ currentData.channels[channelGroup].length }</span>
                               </div>
                            </a>
                            <ul class="collapse-channel__group-list collapse ${ multiCollapse }"></ul>`

            allChannels.channels[channelGroup].forEach( ( channel ) => {
               const ul = addEl.querySelector( '.collapse-channel__group-list' )
               const li = document.createElement( 'li' )
               li.className = `collapse-channel__group-channelName ${ greenText( channel, currentData.channels[channelGroup] ) }`
               li.textContent = channel.name
               ul.appendChild( li )
            } )
            ul.appendChild( addEl )

         }
      }
   } )

}


function greenText( maximum, current ) {
   return current.find( el => el.id === maximum.id ) ? 'text-green' : ''
}
