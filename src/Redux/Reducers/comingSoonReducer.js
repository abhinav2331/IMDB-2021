import * as types from '../Actions/actionTypes';

const initState = {
    comingsoon: []
}

const comingSoonReducer = (state = initState, action) => {
    switch (action.type) {
        case types.COMINGSOON:
            return {
                ...state,   
                comingsoon:  action.data
            }
        default:
            return state
    }
}

export default comingSoonReducer;