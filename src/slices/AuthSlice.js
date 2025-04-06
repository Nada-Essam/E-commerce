import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{
       user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
       token: localStorage.getItem("token") || null,
       isLoggedIn: localStorage.getItem("token") ? true : false,

    },

    reducers:{
        setAuth: (state, action) => {
            state.user = action.payload.user ?? null;  // ✅ تأكدنا أن user لا يكون undefined
            state.token = action.payload.token ?? null;  // ✅ تأكدنا أن token لا يكون undefined
            state.isLoggedIn = !!action.payload.token;  // ✅ تحويل token إلى true/false
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", action.payload.token);

          },

          

        logout:(state)=>{
           
            state.user = null
            state.token = null
            state.isLoggedIn = false
             localStorage.removeItem("user");
            localStorage.removeItem("token");
        }
    }
})

export const {setAuth,logout} = authSlice.actions
export default authSlice.reducer