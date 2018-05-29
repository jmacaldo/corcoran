import { LOAD_PRESIDENTS } from '../actions';

const initialState = {
    presidents: []
}

const demo = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRESIDENTS:
            return { ...state, presidents: action.data }
        default:
            return state
    }
}

export default demo;
