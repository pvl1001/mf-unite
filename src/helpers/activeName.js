export default function (name, tariff, index) {
   return tariff.tv[index]?.groupData.filter(el => name === el.name)
}