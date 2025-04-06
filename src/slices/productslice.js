import{createSlice, createAsyncThunk} from '@reduxjs/toolkit'
export const getProducts=createAsyncThunk('products/getProducts',async()=>{
    const res=await fetch('https://fakestoreapi.com/products')
    const data=await res.json()
    localStorage.setItem('products',JSON.stringify(data))
    return data
})

export const getCategories=createAsyncThunk('products/getCategories',async()=>{
    const res=await fetch('https://fakestoreapi.com/products/categories')
    const data=await res.json() 
    return data
})

export const getProductInCategory=createAsyncThunk('products/getProductInCategory',async(category)=>{
    const res=await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data=await res.json()
    return data
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        items: localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [],
        categories:[],
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(getProducts.pending,(state)=>{
            state.loading=true
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.items=action.payload
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });

          builder.addCase(getCategories.pending, (state) => {
            state.loading = true;
          })
          .addCase(getCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload; // حفظ الفئات في الـ state
          })
          .addCase(getCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });

          builder
      .addCase(getProductInCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductInCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; 
      })
      .addCase(getProductInCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer


