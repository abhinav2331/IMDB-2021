import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import comingSoonReducer from './comingSoonReducer';

const rootReducer = combineReducers({
    myCounter: counterReducer,
    comingsoon: comingSoonReducer
})

export default rootReducer;