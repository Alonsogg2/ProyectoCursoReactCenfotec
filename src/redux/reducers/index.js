import { combineReducers } from 'redux'
import CatalogueReducers from './CatalogueReducers'
import CategoryReducer from './CategoryReducer'
import ObjectReducer from './ObjectReducer'
import ModelReducer from './ModelReducer'
// import user from './userReducer'
// import fruits from './fruitsReducer'

export default combineReducers({
    CatalogueReducers,
    CategoryReducer,
    ObjectReducer,
    ModelReducer
    // fruits,
    // user,
})