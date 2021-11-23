export default function (name) {
   return name.split(' ')[0] === 'Роутер' ? 'роутера' : 'приставки'
}