export default function (price, id, plan) {
   return !plan && id !== 'almond' || price === '0'
      ? 'Аренда'
      : 'Рассрочка'
}