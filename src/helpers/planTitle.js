export default function (price, id, plan) {
   return !plan && id !== 'eq-almond' || price === '0'
      ? 'Аренда'
      : 'Рассрочка'
}