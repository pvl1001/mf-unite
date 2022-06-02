const { android_tv, fr100, fr1000, mftv, almond } = require( './modules/equipments.module' )

module.exports = [
   android_tv,
   fr100,
   fr1000,
   mftv,
   { ...almond, name: 'Умный дом' }
]