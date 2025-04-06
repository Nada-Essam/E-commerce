import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productslice";
import CartReducer from "./CartSlice";
import authReducer from "./AuthSlice";
const store = configureStore({
    reducer:{
        products:productSlice,
        Cart: CartReducer,
        auth: authReducer,
    },
})

export default store