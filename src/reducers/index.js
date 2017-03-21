import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    placeholder: ()=>{
        return {placeholder: ''};
    }
});

export default rootReducer;