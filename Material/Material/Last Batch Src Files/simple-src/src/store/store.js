import { createStore, combineReducers } from "redux";




let initialData = {
    name:"mohsin"
}

function userReducer(olData = initialData, newData){
   
    if(newData.type == "User_ADDED"){
        olData.name = newData.abc;
    }

    return {...olData};

}

function adReducer(){

    return {
        ads:[
            {
                name:"OPPO29",
                price:34000
            }
        ]
    }
    
}

let bigREducer = combineReducers({userReducer, adReducer});


let meraStore = createStore(bigREducer);    

export default meraStore;