import prop from "./prop";
import { analytics, postRegister, setPixelData } from "@/js/analytics";

const errorMessage = {
   title: 'Сервис временно не доступен',
   text: 'Пожалуйста, свяжитесь с нами по телефону, либо попробуйте позднее'
}


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
   submitHandler() {
      const dataOrder = getDataOrder.call(this)
      getResponseOrder(dataOrder)
         .then((data) => resultOrderText(data, dataOrder))
         .then(() => nextForm('.order-thx', '.requisition'))
         .catch(err => {
            setResultTextOrder( errorMessage )
            nextForm( '.order-thx', '.requisition' )
            console.log(err)
         })
   }
})

// сброс валидации формы при закрытии окна
$('#order').on('hide.bs.modal', function () {
   nextForm('.requisition', '.order-thx')
   $('#orderForm').trigger('reset').validate().resetForm()
})

function getResponseOrder(data) {
   return $.ajax({
      url: 'https://home.megafon.ru/form/mail-sender',
      method: 'POST',
      data
   } )
}

// сформировать объект заявки для отправки
function getDataOrder() {
   const address = prop.dataAddress.address ? `По адресу ${prop.dataAddress.address}` : ''
   const tariffName = prop.sendOrder.tariffName ? `${prop.sendOrder.tariffName}` : `${ prop.pageName } Турбо`
   const nameEquip = prop.sendOrder.nameEquip ? `${prop.sendOrder.nameEquip}` : ''
   const tariffId = +prop.sendOrder.tariffId || 4276
   const comment = `${ address } ${ tariffName } ${ nameEquip } ${prop.sendOrder.priceEquip}`
      .replace(/ +/g, ' ').trim()

   return {
      form_name: 'express_form_ccmp_short',
      city: document.getElementById( 'city' ).textContent,
      clientName: this.currentElements[1].value,
      clientPhone: this.currentElements[0].value,
      clientAddress: prop.dataAddress.address || '',
      house_guid: prop.dataAddress.house_guid || '',
      clientSite: window.location.host + window.location.pathname,
      calltracking_params: ct('calltracking_params', 'g96m2c8n')?.sessionId ?? '',
      tariffId,
      tariffName,
      comment
   }

}

// обработка полученного кода
function resultOrderText(data, dataOrder) {

   if (data.code === '200') {
      analytics('lead')

      if (typeof ym !== 'undefined') {
         ym( 57533086, 'reachGoal', prop.sendOrder.eventLabel )
         ym( 66149989, 'reachGoal', prop.sendOrder.eventLabel )
      }

      if (dataOrder.calltracking_params) {
         setPixelData( {
            id: dataOrder.calltracking_params,
            name: `Заявка ${ prop.pageName }`,
            totalPrice: prop.sendOrder.priceEquip,
         } )

         postRegister({
            fio: dataOrder.clientName,
            phoneNumber: dataOrder.clientPhone,
            email: '',
            subject: 'Заявка с сайта ' + dataOrder.city,
            tags: 'id' + dataOrder.tariffId + ',' + dataOrder.tariffName,
            comment: dataOrder.comment,
            sessionId: dataOrder.calltracking_params
         })
      }
      return
   }

   if (data.code === '201') {
      return setResultTextOrder( {
         title: data.response_head,
         text: data.response
      } )
   }

   setResultTextOrder( errorMessage )
}

// изменить текст модального окна результата заявки
function setResultTextOrder( { title, text } ) {
   const $title = document.querySelector('.order-thx__title')
   const $text = document.querySelector('.order-thx__text')

   $title.textContent = title
   $text.textContent = text
}