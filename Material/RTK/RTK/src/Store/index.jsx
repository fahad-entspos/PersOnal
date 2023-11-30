import { configureStore }  from "@reduxjs/toolkit"
import  userSlice  from "./Slice/UserSlices"


const store = configureStore({
    reducer:{
        users : userSlice,
    }
})
export default store