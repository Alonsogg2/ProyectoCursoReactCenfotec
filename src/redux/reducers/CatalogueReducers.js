import {ADD_CATALOG} from '../actions/CatalogueActions'
import {UPDATE_CATALOG} from '../actions/CatalogueActions'
import {DELETE_CATALOG} from '../actions/CatalogueActions'
import {FIND_CATALOG} from '../actions/CatalogueActions'
import {GET_CATALOGS} from '../actions/CatalogueActions'

const initialState = {
    dataCatalogs: [],
    ind_status_add_catalog: null,
    ind_status_delete_catalog: null,
    ind_status_update_catalog: null,
    ind_status_find_catalog: null,
    ind_status_gets_catalogs: null,
    error_add_catalog:null,
    error_delete_catalog:null,
    error_update_catalog:null,
    error_find_catalog:null,
    error_gets_catalogs:null
}

const CatalogueReducer = (state = initialState, action) => {
    switch( action.type ) {
        case ADD_CATALOG: {
			return {
				...state,
                ind_status_add_catalog: action.payload.ind_status,
                error_add_catalog: action.payload.error_add_catalog
			};
        }
         case UPDATE_CATALOG: {
		 	return {
		 		...state,
                 ind_status_update_catalog: action.payload.ind_status,
                 error_delete_catalog: action.payload.error_delete_catalog
		 	};
         }
         case DELETE_CATALOG: {
		 	return {
		 		...state,
                 ind_status_delete_catalog: action.ind_status_delete_colaborador,
                 error_delete_catalog: action.error_delete_catalog
		 	};
         }
         case FIND_CATALOG: {
		 	return {
		 		...state,
                 ind_status_find_catalog: action.payload.ind_status,
                 error_find_catalog: action.payload.error_gets_catalogs
		 	};
         }
         case GET_CATALOGS: {
		 	return {
		 		...state,
                 dataCatalogs:action.payload.dataCatalogs,
                 ind_status: action.payload.ind_status,
                 error_gets_catalogs: action.payload.error_gets_catalogs
		 	};
         }
        default: {
            return state
        }
    }
}

export default CatalogueReducer