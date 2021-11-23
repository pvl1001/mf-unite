import prop from "./prop";
import {CardAlmond} from "./class/CardAlmond";


// отрисовка данных almond
export const renderAlmond = () => {
   if (data[prop.currentModalIndex])
      arrCardsAlmond.forEach( almond => almond.render() )
}


// открытие окна almond в тарифах
window.openAlmond = (index, dataView) => {
   prop.currentModalIndex = index
   renderAlmond()
   analytics(`click_button_details_${dataView}`)
}


// открытие окна almond в оборудовании
window.openEqAlmond = () => {
   prop.currentModalIndex = data.length -1
   renderAlmond()
}


// создать массив с данными для almond
export const data = require( '../json/tariffs.json' )
   .map( tariff => tariff.equipments.find( el => el.id === 'eq-almond' ) )
   .map( (el, i) => {
      if (el) {
         return {
            index: i,
            startPrice: el.price,
            totalPrice: 0,
            performance: [...el.routers, ...el.sensors]
         }
      }
   } )


// добавить объект almond для оборудования
const eqAlmond = require('../json/equipments.json').find(el => el.id === 'eq-almond')
data.push({
   index: data.length,
   startPrice: eqAlmond.price,
   totalPrice: 0,
   performance: [...eqAlmond.routers, ...eqAlmond.sensors]
})


// создать объекты карточек almond и включить события
const cards = Array.from( document.querySelectorAll( '#modalAlmond .card-price' ) )
export const arrCardsAlmond = Array.from( document.querySelectorAll( '.modalAboutAlmond' ) )
   .map( ($modalPerformance, i) => {
      const cardAlmond = new CardAlmond( {$modalPerformance, $cardAlmond: cards[i], i} );
      cardAlmond.addEvents()
      return cardAlmond
   } )


// снять переключатель карточки almond, если оборудование не выбрано (при закрытии окна)
$( '.modalAlmond' ).on( 'hidden.bs.modal', function () {
   if (arrCardsAlmond[prop.currentModalIndex] && arrCardsAlmond[prop.currentModalIndex].data.totalPrice === 0) {
      arrCardsAlmond[prop.currentModalIndex].disabledTotalPrice()
   }
} )