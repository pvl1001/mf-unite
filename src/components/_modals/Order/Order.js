import prop from "../../../js/prop";
import { postRegister, setAdvcakeData } from "@/js/analytics";


const $form = document.forms.orderForm
const $inputs = [ $form.name, $form.phone ]
const errorMessage = {
   title: 'Сервис временно не доступен',
   text: 'Пожалуйста, свяжитесь с нами по телефону, либо попробуйте позднее'
}


$form.addEventListener( 'submit', submitHandler.bind( this ) )
$inputs.forEach( input => input.addEventListener( 'input', validation.bind( this ) ) )
$( '#order' ).on( 'hide.bs.modal', hideModalHandler)


function hideModalHandler() { // сброс валидации формы при закрытии окна
   nextForm( '.requisition', '.order-thx' )
   resetForm()
}

function disabledBtn() {
   $form.submitBtn.disabled = !$form.checkValidity()
}

function resetForm() {
   $form.reset()
   $inputs.forEach( input => input.classList = [] )
   disabledBtn()
}

function submitHandler( context ) {
   context.preventDefault()
   const { target } = context
   const dataOrder = getDataOrder.call( target )
   getResponseOrder( dataOrder )
      .then( ( data ) => resultOrderText( data, dataOrder ) )
      .then( () => nextForm( '.order-thx', '.requisition' ) )
      .then( () => target.submitBtn.disabled = true )
      .catch( err => {
         setResultTextOrder( errorMessage )
         nextForm( '.order-thx', '.requisition' )
         console.error( err )
      } )
}

function validation( { target } ) {
   target.value
      ? target.classList.add( 'not-empty' )
      : target.classList.remove( 'not-empty' )

   if ( target.validity.valid ) {
      target.classList.remove( 'error' )
      target.classList.add( 'valid' )
   } else {
      target.classList.remove( 'valid' )
      target.classList.add( 'error' )
   }

   disabledBtn()
}

function getResponseOrder( data ) {
   return $.ajax( {
      url: 'https://home.megafon.ru/form/mail-sender',
      method: 'POST',
      data
   } )
}

function getDataOrder() { // сформировать объект заявки для отправки
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

function resultOrderText( data, dataOrder ) { // обработка полученного кода
   if ( data.code === '200' ) {
      // analytics( 'lead' )

      if ( typeof ym !== 'undefined' ) {
         ym( 57533086, 'reachGoal', prop.sendOrder.eventLabel )
      }

      if ( dataOrder.calltracking_params ) {
         setAdvcakeData( data.message_id )

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

function setResultTextOrder( { title, text } ) { // изменить текст модального окна результата заявки
   const $title = document.querySelector( '.order-thx__title' )
   const $text = document.querySelector( '.order-thx__text' )

   $title.textContent = title
   $text.textContent = text
}

function nextForm( open, close ) {
   $( close ).css( 'display', 'none' )
   $( open ).css( 'display', 'flex' )
}