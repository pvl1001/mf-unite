import prop from "./prop";
import { analytics, postRegister, setPixelData } from "@/js/analytics";

const form = document.forms.orderForm
const inputs = [ form.name, form.phone ]
const errorMessage = {
   title: 'Сервис временно не доступен',
   text: 'Пожалуйста, свяжитесь с нами по телефону, либо попробуйте позднее'
}


inputs.forEach( input => input.addEventListener( 'input', validation.bind( this ) ) )

form.addEventListener( 'submit', function ( e ) {
   e.preventDefault()
   const dataOrder = getDataOrder.call( this )
   getResponseOrder( dataOrder )
      .then( ( data ) => resultOrderText( data, dataOrder ) )
      .then( () => nextForm( '.order-thx', '.requisition' ) )
      .then( () => this.submitBtn.disabled = true )
      .catch( err => {
         setResultTextOrder( errorMessage )
         nextForm( '.order-thx', '.requisition' )
         console.log( err )
      } )
} )

// сброс валидации формы при закрытии окна
$( '#order' ).on( 'hide.bs.modal', function () {
   nextForm( '.requisition', '.order-thx' )
   resetForm()
} )


function doDisabledBtn( isValid ) {
   const form = document.forms.orderForm
   const btn = form.submitBtn
   isValid
      ? btn.disabled = false
      : btn.disabled = true
}

function resetForm() {
   form.reset()
   inputs.forEach( input => input.classList = [] )
}

function validation( { target } ) {
   const boolean = target.name === 'name'
      ? target.value
      : target.value.length === 16

   target.value
      ? target.classList.add( 'not-empty' )
      : target.classList.remove( 'not-empty' )


   if ( boolean ) {
      target.classList.remove( 'error' )
      target.classList.add( 'valid' )
   } else {
      target.classList.remove( 'valid' )
      target.classList.add( 'error' )
   }

   const isValid = inputs.every( el => el.classList.contains( 'valid' ) )
   doDisabledBtn( isValid )
}

function getResponseOrder( data ) {
   return $.ajax( {
      url: 'https://home.megafon.ru/form/mail-sender',
      method: 'POST',
      data
   } )
}

// сформировать объект заявки для отправки
function getDataOrder() {
   const address = prop.dataAddress.address ? `По адресу ${ prop.dataAddress.address }` : ''
   const tariffName = prop.sendOrder.tariffName ? `${ prop.sendOrder.tariffName }` : prop.defaultTariff.name
   const nameEquip = prop.sendOrder.nameEquip ? `${ prop.sendOrder.nameEquip }` : ''
   const tariffId = +prop.sendOrder.tariffId || prop.defaultTariff.id
   const comment = `${ address } ${ tariffName } ${ nameEquip } ${ prop.sendOrder.priceEquip }`
      .replace( / +/g, ' ' ).trim()

   return {
      form_name: 'express_form_ccmp_short',
      city: document.getElementById( 'city' ).textContent,
      clientName: this.name.value,
      clientPhone: this.phone.value,
      clientAddress: prop.dataAddress.address || '',
      house_guid: prop.dataAddress.house_guid || '',
      clientSite: window.location.host + window.location.pathname,
      calltracking_params: ct( 'calltracking_params', 'g96m2c8n' )?.sessionId ?? '',
      tariffId,
      tariffName,
      comment
   }

}

// обработка полученного кода
function resultOrderText( data, dataOrder ) {
   if ( data.code === '200' ) {
      analytics( 'lead' )

      if ( typeof ym !== 'undefined' ) {

         ym( 57533086, 'reachGoal', prop.sendOrder.eventLabel )
      }

      if ( dataOrder.calltracking_params ) {
         setPixelData( data.message_id )

         postRegister( {
            fio: dataOrder.clientName,
            phoneNumber: dataOrder.clientPhone,
            email: '',
            subject: 'Заявка с сайта ' + dataOrder.city,
            tags: 'id' + dataOrder.tariffId + ',' + dataOrder.tariffName,
            comment: dataOrder.comment,
            sessionId: dataOrder.calltracking_params
         } )
      }
      return
   }

   if ( data.code === '201' ) {
      return setResultTextOrder( {
         title: data.response_head,
         text: data.response
      } )
   }

   setResultTextOrder( errorMessage )
}

// изменить текст модального окна результата заявки
function setResultTextOrder( { title, text } ) {
   const $title = document.querySelector( '.order-thx__title' )
   const $text = document.querySelector( '.order-thx__text' )

   $title.textContent = title
   $text.textContent = text
}