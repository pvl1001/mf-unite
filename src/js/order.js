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
      getResponseOrder( dataOrder )
         .then( (data) => resultOrderText( data, dataOrder ) )
         .then( () => nextForm( '.order-thx', '.requisition' ) )
         .catch( err => console.log( 'error:', err ) )
   }
} )

// сброс валидации формы при закрытии окна
$( '#order' ).on( 'hide.bs.modal', function () {
   nextForm( '.requisition', '.order-thx' )
   $( '#orderForm' ).trigger('reset').validate().resetForm()
} )

async function getResponseOrder(data) {
   return await $.ajax( {
      url: 'https://home.megafon.ru/form/mail-sender',
      method: 'POST',
      data
   } )
}

// сформировать объект заявки для отправки
function getDataOrder() {
   const getClientAddress = () => prop.dataAddress.address !== undefined ? `По адресу ${prop.dataAddress.address} ` : ''
   const getEquipText = () => prop.nameEquip && prop.priceEquip ? ` ${prop.nameEquip} ${prop.priceEquip.textContent}₽ в месяц` : ''

   return {
      form_name: 'express_form_ccmp_short',
      city: document.querySelector( '.nav__city span' ).textContent,
      clientName: this.currentElements[1].value,
      clientPhone: this.currentElements[0].value,
      clientAddress: prop.dataAddress.address || '',
      house_guid: prop.dataAddress.house_guid || '',
      tariffId: prop.tariffId,
      tariffName: prop.tariffName,
      clientSite: window.location.host + window.location.pathname,
      comment: `${getClientAddress()}${prop.tariffName}${getEquipText()}`,
      calltracking_params: ct( 'calltracking_params', 'g96m2c8n' ) || '',
   }

}

// обработка полученного кода
function resultOrderText(data, dataOrder) {
   if (data.code === '200') {
      gtag( 'event', 'click', {'event_category': 'EventHomeMF', 'event_label': prop.event_label} )
      gtag( 'event', 'requestLandingSend', {'event_category': 'order'} )
      if (typeof ym !== 'undefined') {
         ym( 66149989, 'reachGoal', 'zayavka_megafon' )
         ym( 66149989, 'reachGoal', prop.event_label )
      }

      if (typeof dataOrder.calltracking_params !== 'undefined') {
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
   const $title = document.querySelector( '.order-thx__title' )
   const $text = document.querySelector( '.order-thx__text' )

   $title.textContent = title
   $text.textContent = text
}