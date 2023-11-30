import { createStore, combineReducers } from "redux";




let initialData = {
    currentUser:null,
    users:[]
}

function userReducer(olData = initialData, newData){
   
    if(newData.type == "User_ADDED"){
        
        olData.users.push(newData.payload);
    }else if(newData.type == "USER_UPDATED"){

        olData.users[newData.someINdex]  = newData.newUser;
    
    }else if(newData.type == "USER_LOGGED_IN"){
        olData.currentUser = newData.payload;
        
    }else if(newData.type == "USER_LOGGED_OUT"){
        olData.currentUser = null;
        
    }

    return {...olData};

}

let initialAdData  = {
    ads:[]
}

function adReducer(olData = initialAdData, newData){

     if(newData.type == "CREATED_AD"){
        olData.ads.push(newData.payload);
     }else if(newData.type == "AD_DELETED"){     

        olData.ads = olData.ads.filter((ad)=>{
            return ad.id != newData.id;
        });

     }

     


    return {
        ...olData
    }
    
}

let bigREducer = combineReducers({userReducer, adReducer});


let meraStore = createStore(bigREducer);

export default meraStore;