import {ADD_OBJECT} from '../actions/ObjectActions'
import {UPDATE_OBJECT} from '../actions/ObjectActions'
import {DELETE_OBJECT} from '../actions/ObjectActions'
import {FIND_OBJECT} from '../actions/ObjectActions'
import {GET_OBJECTS} from '../actions/ObjectActions'

const initialState = {
    dataObject: [],
    ind_status_add_object: null,
    ind_status_delete_object: null,
    ind_status_update_object: null,
    ind_status_find_object: null,
    ind_status_gets_objects: null,
    error_add_object:null,
    error_delete_object:null,
    error_update_object:null,
    error_find_object:null,
    error_gets_objects:null
}

const ObjectReducer = (state = initialState, action) => {
    switch( action.type ) {
        case ADD_OBJECT: {
			return {
				...state,
                ind_status_add_object: action.payload.ind_status,
                error_add_object: action.payload.error_add_object
			};
        }
         case UPDATE_OBJECT: {
		 	return {
		 		...state,
                 ind_status_update_object: action.payload.ind_status,
                 error_delete_object: action.payload.error_delete_object
		 	};
         }
         case DELETE_OBJECT: {
		 	return {
		 		...state,
                 ind_status_delete_object: action.ind_status_delete_colaborador,
                 error_delete_object: action.error_delete_object
		 	};
         }
         case FIND_OBJECT: {
		 	return {
		 		...state,
                 ind_status_find_object: action.payload.ind_status,
                 error_find_object: action.payload.error_gets_objects
		 	};
         }
         case GET_OBJECTS: {
		 	return {
		 		...state,
                 dataObject:action.payload.dataObject,
                 ind_status: action.payload.ind_status,
                 error_gets_objects: action.payload.error_gets_objects
		 	};
         }
        default: {
            return state
        }
    }
}

export default ObjectReducer