const { router_4g } = require( './modules/equipments.module' )
const tariffVezde = require( './tariffVezde' )

module.exports = { ...router_4g, dataView: `${ tariffVezde.id }_ntv` }