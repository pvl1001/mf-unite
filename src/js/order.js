import prop from "./prop";

$( '#orderForm' ).validate( {
   rules: {
      phone: {
         required: true,
         minlength: 16,
      },
      name: 'required',
      address: {
         // required: true,
         select: true
      }
   },
   messages: {
      phone: {
         required: 'Заполните поле!',
         minlength: 'Заполните поле!'
      },
      name: {
         required: 'Заполните поле!'
      },
      address: {
         // required: 'Выберите адрес дома из выпадающего списка!',
         select: 'Выберите адрес дома из выпадающего списка!'
      },
   },
   submitHandler: function () {
      const dataOrder = getDataOrder.call( this )
      // console.log( dataOrder )
      getResponseOrder( dataOrder )
         .then( (data) => resultOrderText( data, dataOrder ) )
         .then( () => nextForm( '.order-thx', '.requisition' ) )
         .catch( err => console.log( 'error:', err ) )
   }
} )

// сброс валидации формы при закрытии окна
$( '#order' ).on( 'hide.bs.modal', function () {
   nextForm( '.requisition', '.order-thx' )
   $( '#orderForm' ).trigger( 'reset' ).validate().resetForm()
} )

async function getResponseOrder(data) {
   return $.ajax( {
      url: 'https://home.megafon.ru/form/mail-sender',
      method: 'POST',
      data
   } )
}

// сформировать объект заявки для отправки
function getDataOrder() {
   const address = prop.dataAddress.address ? `По адресу ${prop.dataAddress.address} ` : ''
   const tariffName = prop.sendOrder.tariffName ? `${prop.sendOrder.tariffName} ` : '#ДляДома Турбо '
   const nameEquip = prop.sendOrder.nameEquip ? `${prop.sendOrder.nameEquip} ` : ''
   const price = prop.sendOrder.priceEquip ? prop.sendOrder.priceEquip + '₽' : ''
   const tariffId = +prop.sendOrder.tariffId || 4276
   const comment = address + tariffName + nameEquip + price

   return {
      form_name: 'express_form_ccmp_short',
      city: document.querySelector( '.nav__city span' ).textContent,
      clientName: this.currentElements[1].value,
      clientPhone: this.currentElements[0].value,
      clientAddress: prop.dataAddress.address || '',
      house_guid: prop.dataAddress.house_guid || '',
      tariffId: tariffId,
      tariffName: tariffName.trim(),
      clientSite: window.location.host + window.location.pathname,
      comment: comment.trim(),
      calltracking_params: ct( 'calltracking_params', 'g96m2c8n' ) ? ct( 'calltracking_params', 'g96m2c8n' ).sessionId : ''
   }

}

// обработка полученного кода
function resultOrderText(data, dataOrder) {
   // console.log(prop.sendOrder.eventLabel)
   if (data.code === '200') {
      gtag( 'event', 'click', {'event_category': 'EventHomeMF', 'event_label': prop.sendOrder.eventLabel} )
      gtag( 'event', 'requestLandingSend', {'event_category': 'order'} )
      if (ym !== undefined) {
         ym( 57533086, 'reachGoal', prop.sendOrder.eventLabel )
         ym( 66149989, 'reachGoal', prop.sendOrder.eventLabel )
      }

      if (dataOrder.calltracking_params) {
         const ct_site_id = '37410'
         const ct_data = {
            fio: dataOrder.clientName,
            phoneNumber: dataOrder.clientPhone,
            email: '',
            subject: 'Заявка с сайта ' + dataOrder.city,
            tags: 'id' + dataOrder.tariffId + ',' + dataOrder.tariffName,
            comment: dataOrder.comment,
            sessionId: dataOrder.calltracking_params
         }

         $.ajax( {
               url: 'https://api.calltouch.ru/calls-service/RestAPI/requests/' + ct_site_id + '/register/',
               dataType: 'json',
               type: 'POST',
               data: ct_data
            }
         )
      }
      return
   }

   if (data.code === '201')
      return setResultTextOrder( data.response_head, data.response )

   setResultTextOrder(
      'Сервис временно не доступен',
      'Пожалуйста, свяжитесь с нами по телефону, либо попробуйте позднее'
   )
}

// изменить текст модального окна результата заявки
function setResultTextOrder(title, text) {
   document.querySelector( '.order-thx__title' ).textContent = title
   document.querySelector( '.order-thx__text' ).textContent = text
}