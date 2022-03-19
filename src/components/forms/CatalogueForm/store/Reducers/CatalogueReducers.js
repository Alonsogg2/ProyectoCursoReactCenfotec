import * as Actions from '../Actions'
import _ from '@lodash';

const initialState = {
    dataCatalogs: [],
    ind_status_add_catalog: null,
    error_add_catalog:null,
    error_delete_catalog:null,
    error_update_catalog:null
}

const CatalogueReducer = (state = initialState, action) => {
    switch( action.type ) {
        case Actions.ADD_CATALOG: {
			return {
				...state,
                ind_status_add_colaborador: action.ind_status_add_colaborador,
                error_add_catalog: action.error_add_catalog
			};
        }
        // case Actions.UPDATE_COLABORADOR: {
		// 	return {
		// 		...state,
        //         ind_status: action.ind_status,
        //         error_modificar_colaborador: action.error_modificar_colaborador
		// 	};
        // }
        // case Actions.DELETE_COLABORADOR: {
		// 	return {
		// 		...state,
        //         ind_status_delete_colaborador: action.ind_status_delete_colaborador,
        //         error_eliminar_colaborador: action.error_eliminar_colaborador
		// 	};
        // }
        // case Actions.VER_STATUS: {
		// 	return {
		// 		...state,
        //         ind_status: action.ind_status
		// 	};
        // }
        // case Actions.CAMBIA_STATUS: {
		// 	return {
		// 		...state,
        //         ind_status: action.ind_status
		// 	};
        // }
        // case Actions.VER_STATUS_ADD_COLABORADOR: {
		// 	return {
		// 		...state,
        //         ind_status_add_colaborador: action.ind_status_add_colaborador
		// 	};
        // }
        // case Actions.CAMBIA_STATUS_ADD_COLABORADOR: {
		// 	return {
		// 		...state,
        //         ind_status_add_colaborador: action.ind_status_add_colaborador
		// 	};
        // }
        // case Actions.VER_STATUS_DELETE_COLABORADOR: {
		// 	return {
		// 		...state,
        //         ind_status_delete_colaborador: action.ind_status_delete_colaborador
		// 	};
        // }
        // case Actions.CAMBIA_STATUS_DELETE_COLABORADOR: {
		// 	return {
		// 		...state,
        //         ind_status_delete_colaborador: action.ind_status_delete_colaborador
		// 	};
        // }
        // case Actions.GET_COLABORADOR_ID: {
		// 	return {
		// 		...state,
        //         datosColaborador: action.payload
		// 	};
		// }
        // case Actions.SET_COLABORADORES_SEARCH_TEXT: {
        //     return {
        //         ...state,
        //         searchText: action.searchText
        //     }
        // }
        // case Actions.SET_NOMBRE_TEXT: {
        //     return {
        //         ...state,
        //         nombre: action.nombre
        //     }
        // }
        // case Actions.SET_APELLIDO_TEXT: {
        //     return {
        //         ...state,
        //         apellido: action.apellido
        //     }
        // }
        // case Actions.SET_COLABORADOR_TEXT: {
        //     return {
        //         ...state,
        //         colaborador: action.colaborador
        //     }
        // }
        // case Actions.DESHABILITAR_EXPORTAR: {
        //     return {
        //         ...state,
        //         deshabilitar: action.deshabilitar
        //     }
        // }
        // case Actions.GET_ENCGINMEDIATO_COMBO: {
        //     return {
        //         ...state,
        //         EncargadosInmediatos: action.EncargadosInmediatos
        //     }
        // }
        // case Actions.GET_PAISES_COMBO: {
        //     return {
        //         ...state,
        //         Paises: action.Paises
        //     }
        // }
        // case Actions.GET_UBICACIONES_COMBO: {
        //     return {
        //         ...state,
        //         Ubicaciones: action.Ubicaciones
        //     }
        // }
        // case Actions.GET_HORARIO: {
		// 	return {
		// 		...state,
        //         datosHorario: action.datosHorario
		// 	};
		// }
        // case Actions.MODIFICAR_HORARIO: {
		// 	return {
		// 		...state,
        //         ind_status: action.ind_status
		// 	};
        // }
        default: {
            return state
        }
    }
}

export default CatalogueReducer