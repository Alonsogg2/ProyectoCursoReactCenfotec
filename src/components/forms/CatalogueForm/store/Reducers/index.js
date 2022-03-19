import { combineReducers } from 'redux'
import catalogs from './CatalogueReducers'

const reducer = combineReducers({
    catalogs
})

export default reducer