export const ADD_CATEGORY = '[CATEGORY APP] ADD CATEGORY';
export const UPDATE_CATEGORY = '[CATEGORY APP] UPDATE CATEGORY';
export const DELETE_CATEGORY = '[CATEGORY APP] DELETE CATEGORY';
export const FIND_CATEGORY = '[CATEGORY APP] FIND CATEGORY';
export const GET_CATEGORIES = '[CATEGORY APP] GET CATEGORIES';

export const addCategory=async (response)=>{
    return {
        type: ADD_CATEGORY,
        payload: {
            dataCategories : response.data,
            ind_status_add_category : response.status
        }
    }
 }

 export const updateCategory=async (response)=>{
    return {
        type: ADD_CATEGORY,
        payload: {
            ind_status_update_category : response.status
        }
    }
 }

 export const deleteCategory=async (response)=>{
    return {
        type: DELETE_CATEGORY,
        payload: {
            ind_status_delete_category : response.data.status,
        }
    }
 }

  export const findCategory=(response)=>{
    return {
        type: FIND_CATEGORY,
        payload: {
            ind_status_find_category : response.status
        }
    }
  }

  export const getCategories=(response)=>{
    return {
        type: GET_CATEGORIES,
        payload: {
            dataCategories : response.data,
            ind_status_gets_categories : response.status
        }
    }
    }
 