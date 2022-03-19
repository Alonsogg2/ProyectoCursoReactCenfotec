import {ADD_CATEGORY,UPDATE_CATEGORY,DELETE_CATEGORY,FIND_CATEGORY,GET_CATEGORIES} from '../actions/CategoryActions'

const initialState = {
    dataCategories: [],
    ind_status_add_category: null,
    ind_status_delete_category: null,
    ind_status_update_category: null,
    ind_status_find_category: null,
    ind_status_gets_categories: null,
    error_add_category:null,
    error_delete_category:null,
    error_update_category:null,
    error_find_category:null,
    error_gets_categories:null
}

const CategoryReducer = (state = initialState, action) => {
    switch( action.type ) {
        case ADD_CATEGORY: {
			return {
				...state,
                ind_status_add_category: action.payload.ind_status,
                error_add_category: action.payload.error_add_category
			};
        }
         case UPDATE_CATEGORY: {
		 	return {
		 		...state,
                 ind_status_update_category: action.payload.ind_status,
                 error_delete_category: action.payload.error_delete_category
		 	};
         }
         case DELETE_CATEGORY: {
		 	return {
		 		...state,
                 ind_status_delete_category: action.ind_status_delete_colaborador,
                 error_delete_category: action.error_delete_category
		 	};
         }
         case FIND_CATEGORY: {
		 	return {
		 		...state,
                 ind_status_find_category: action.payload.ind_status,
                 error_find_category: action.payload.error_gets_categories
		 	};
         }
         case GET_CATEGORIES: {

		 	return {
		 		...state,
                 dataCategories:action.payload.dataCategories,
                 ind_status: action.payload.ind_status,
                 error_gets_categories: action.payload.error_gets_categories
		 	};
         }
        default: {
            
            return state
            
        }
    }
}

export default CategoryReducer