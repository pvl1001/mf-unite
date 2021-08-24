export default function (text) {
   switch (text) {
      case 'Только нужное':
         return 'var(--mf-blue)'
      case 'Популярное':
         return 'var(--mf-fiolet)'
      case 'Акция':
         return 'var(--mf-orange)'
   }

}