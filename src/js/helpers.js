module.exports = {

   // общее количество каналов
   totalChannel(tariff) {
      let count = 0
      for (let el of tariff) count += el.groupData.length
      return count
   },

   // сравнение каналов (число каналов группы)
   countChannel(tariff, index) {
      return tariff[index] ? tariff[index].groupData.length : 0
   },

   // сравнение каналов (выделение цветом)
   activeName(name, tariff, index) {
      if (tariff.tv[index])
         for (let nameJson of tariff.tv[index].groupData)
            if (name === nameJson.name) return true
   },

   noLimit(text) {
      return text === 'Безлимитный интернет' ? 'Безлимитно' : text
   },

   // вывод оборудование
   isDefined(a, b) {
      return a || b
   },

   iconInfo(i) {
      return i === 0;
   },

   markClass(text) {
      return text === 'Популярное'
   },

   checkedRoute(tariff) {
      return tariff === 'Везде' ? 'checked' : ''
   }

}