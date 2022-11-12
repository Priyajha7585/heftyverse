import formReducer from "./form";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    formAction: formReducer
})

export default allReducers;