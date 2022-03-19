import { OPEN_MODAL } from '../actions/ModelActions'

const initialState = {
    show:''
}

const ModelReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
           
            return {
                show: !action.payload.show
            }
        default:
            return state
    }
}

export default ModelReducer