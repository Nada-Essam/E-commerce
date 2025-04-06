import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [], 
        totalQuantity: 0, 
        totalAmount: 0, 
      },
    reducers:{
        addToCart:(state,action)=>{
            const existingItem = state.items.find((item)=>item.id===action.payload.id)
            if(existingItem){
                existingItem.quantity++;

            }else{
                state.items.push({...action.payload,quantity:1})

            }
            
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            localStorage.removeItem("cart");
        },
        clearCart:(state)=>{
            state.items=[]
            localStorage.removeItem("cart");
        },

        SetCartData:(state,action)=>{
            if(action.payload===null){
                state.items=[]
            }else{
             state.items=action.payload;

            }
        }

    }
})

export const {addToCart,removeFromCart,clearCart,SetCartData}=cartSlice.actions
export default cartSlice.reducer