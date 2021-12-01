const allChannels = document.querySelectorAll( '[data-tv-id]' )
const arrChannels = []
let once = true


async function getChannels(id) {
   return await fetch( `https://home.megafon.ru/billing/bt/json/gettvchannelsbygroup?pack_id=${id}` )
      .then( res => res.json() )
}


allChannels.forEach( channels => channels.addEventListener( 'click', handlerChannels ) )


function handlerChannels() {
   allChannels.forEach( (el, i) => {

      once && getChannels( el.dataset.tvId )
         .then( data => renderChannels( data, i, el.dataset.tvId ) )
         .catch( err => console.error( 'Error response getChannels', err ) )
   } )

   !once && $( '.multi-collapse' ).collapse( 'toggle' )
}


function renderChannels(data, i, tvId) {
   arrChannels.push( data.packages[tvId] )

   if (arrChannels.length === allChannels.length) {
      const maximum = arrChannels.find( el => el.name === "ДляДома Максимум" )
      const arrListChannels = document.querySelectorAll( '.collapse-channel__channels' )

      arrListChannels.forEach( (ul, i) => {
         const currentChannel = arrChannels.find( el => el.id === +allChannels[i].dataset.tvId )

         for (let channels in maximum.channels) {
            const multiCollapse = channels.split( ' ' ).join( '' )

            const addEl = document.createElement( 'li' )
            addEl.className = 'collapse-channel__channel-group'
            addEl.innerHTML = `<a data-toggle="collapse"
                                  class="collapse-channel__group-toggle"
                                  data-target=".${multiCollapse}"
                                  aria-expanded="false"
                               >
                                  <div class="collapse-channel__group-wrapper">
                                     <span class="collapse-channel__group-name">${channels}</span>
                                     <span class="collapse-channel__group-count">${currentChannel.channels[channels].length}</span>
                                  </div>
                               </a>
                               <ul class="collapse-channel__group-list collapse ${multiCollapse}"></ul>`

            maximum.channels[channels].forEach( (channel) => {
               const ul = addEl.querySelector( '.collapse-channel__group-list' )
               const li = document.createElement( 'li' )
               li.className = `collapse-channel__group-channelName ${greenText( channel, currentChannel.channels[channels] )}`
               li.textContent = channel.name
               ul.appendChild( li )
            } )
            ul.appendChild( addEl )

         }
      } )

      $( '.multi-collapse' ).collapse( 'show' )
      once = false
   }
}


function greenText(maximum, current) {
   return current.find( el => el.id === maximum.id ) ? 'text-green' : ''
}
