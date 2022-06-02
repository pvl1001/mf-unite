import prop from "../prop";
import {showResultMainCheck} from "./showResultMainCheck";
import {showHideLabel} from "./showHideLabel";

export const validAddress = (data) => {
   if (data.result !== null) {
      prop.dataAddress = prop.setAddress
      prop.setAddress = {}

      if (data.result === 1) {
         showResultMainCheck( 'show', 'hide', '.success-check b' )
      }

      if (data.result === 0) {
         !$('#offer_title').text() && $('#offer_title').text(
            'К сожалению, мы пока не можем подключить ваш дом к домашнему интернету.' )
         calcRadio.sum( '#unite', 0 )
         showResultMainCheck( 'hide', 'show', '.unite-address__offer b' )
      }

      return
   }

   showHideLabel('show')
}