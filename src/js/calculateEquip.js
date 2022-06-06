import tariffs from '../data/tariffs.js'
import {CardRent} from './class/CardRent'
import {CardPlan} from './class/CardPlan'
import {CardSim} from './class/CardSim'
export let modalCardsAlmond

$( '.about-tariff-modal' )
   .on( 'shown.bs.modal', function (e) {
      const tariff = tariffs.find( tariff => tariff.id === e.currentTarget.id )
      modalCardsAlmond = this[tariff.id] = []
      tariff.equipments.forEach( (equipment, i) => {
         const switchCardSelector = '.switch input'
         const priceSelector = '.price__current'
         const totalPriceSelector = '.tariff-modal__price-current'
         const descriptionSelector = '.tariff-modal__price-desc'
         const cardProps = {
            tariff,
            equipment,
            i,
            switchCardSelector,
            priceSelector,
            totalPriceSelector,
            descriptionSelector,
         }


         if (equipment.plan) {
            const inputsSelector =  'input[type="radio"]'
            window.cardPlan = new CardPlan( cardProps, inputsSelector )
            this[tariff.id].push( cardPlan )
            cardPlan.addEvents()
         } else if (equipment.id === 'sim') {
            const counterSelector = '.counter'
            const minusSelector = '.counter__minus'
            const plusSelector = '.counter__plus'
            const propsSim = {counterSelector, minusSelector, plusSelector}
            window.cardSim = new CardSim( cardProps, propsSim )
            this[tariff.id].push( cardSim )
            cardSim.addEvents()
         } else if (equipment.id === 'almond') {
            window.cardAlmond = new CardRent( cardProps )
            this[tariff.id].push( cardAlmond )
            cardAlmond.addEvents()
         } else {
            window.cardRent = new CardRent( cardProps )
            this[tariff.id].push( cardRent )
            cardRent.addEvents()
         }
      } )
   } )
   .on( 'hidden.bs.modal', function (e) {
      this[e.currentTarget.id].forEach( el => el.removeEvents() )
   } )



