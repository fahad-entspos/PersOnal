import {createStore, combineReducers} from 'redux';

function userSection(){
    
    return ["rameez", "hamid"];

}

function adSection(){

    return ["OPPO10", "HP650"]

}

let root = combineReducers({userSection, adSection});

let meraStore = createStore(root);

export default meraStore;