
import { configureStore } from "@reduxjs/toolkit"
import SliceCompo from "../Slice/SliceCompo"

const StoreCompo=configureStore({
    reducer:{
        std_data:SliceCompo
    }
})
export default StoreCompo