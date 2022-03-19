export const ADD_CATALOG = '[CATALOG APP] ADD CATALOG';
export const UPDATE_CATALOG = '[CATALOG APP] UPDATE CATALOG';
export const DELETE_CATALOG = '[CATALOG APP] DELETE CATALOG';
export const FIND_CATALOG = '[CATALOG APP] FIND CATALOG';
export const GET_CATALOGS = '[CATALOG APP] GET CATALOGS';

export const addCatalog=async (response)=>{
    return {
        type: ADD_CATALOG,
        payload: {
            dataCatalogs : response.data,
            ind_status_add_catalog : response.status
        }
    }
 }

 export const updateCatalog=async (response)=>{
    return {
        type: ADD_CATALOG,
        payload: {
            ind_status_update_catalog : response.status
        }
    }
 }

 export const deleteCatalog=async (response)=>{
    return {
        type: DELETE_CATALOG,
        payload: {
            ind_status_delete_catalog : response.data.status,
        }
    }
 }

  export const findCatalog=(response)=>{
    return {
        type: FIND_CATALOG,
        payload: {
            ind_status_find_catalog : response.status
        }
    }
  }

  export const getCatalogs=(response)=>{
    return {
        type: GET_CATALOGS,
        payload: {
            dataCatalogs : response.data,
            ind_status_gets_catalogs : response.status
        }
    }
    }
 