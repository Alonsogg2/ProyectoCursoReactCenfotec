export const OPEN_MODAL = '[OPEN MODAL] OPEN MODAL';

export const openModal = estado => {
    alert(estado)
    return{
    type: OPEN_MODAL, 
    payload: {
        show: estado
    }
  }
}