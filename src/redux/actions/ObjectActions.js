export const ADD_OBJECT = '[OBJECT APP] ADD OBJECT';
export const UPDATE_OBJECT = '[OBJECT APP] UPDATE OBJECT';
export const DELETE_OBJECT = '[OBJECT APP] DELETE OBJECT';
export const FIND_OBJECT = '[OBJECT APP] FIND OBJECT';
export const GET_OBJECTS = '[OBJECT APP] GET OBJECTS';

export const addObject=async (response)=>{
    return {
        type: ADD_OBJECT,
        payload: {
            dataObjects : response.data,
            ind_status_add_object : response.status
        }
    }
 }

 export const updateObject=async (response)=>{
    return {
        type: ADD_OBJECT,
        payload: {
            ind_status_update_object : response.status
        }
    }
 }

 export const deleteObject=async (response)=>{
    return {
        type: DELETE_OBJECT,
        payload: {
            ind_status_delete_object : response.data.status,
        }
    }
 }

  export const findObject=(response)=>{
    return {
        type: FIND_OBJECT,
        payload: {
            ind_status_find_object : response.status
        }
    }
  }

  export const getObjects=(response)=>{
    return {
        type: GET_OBJECTS,
        payload: {
            dataObjects : response.data,
            ind_status_gets_categories : response.status
        }
    }
    }
 