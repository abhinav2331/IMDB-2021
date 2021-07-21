import * as types from './actionTypes';

export const comingsoon = () => {
    return dispatch => {
        dispatch({
            type: types.COMINGSOON
        })
    }
}