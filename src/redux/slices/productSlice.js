import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts",async () => {
   const response = await axios.get("https://dummyjson.com/products")
//    console.log(response.data.products);
   return response.data.products
  },)

const productSlice = createSlice({
    name:"products",
    initialState:{
        allProducts:[],
        loading:true,
        error:""
    },
    reducers:{
        //synchronous action functions
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.pending,(state,action)=>{
            state.loading = true
            state.allProducts = []
            state.error = ""
        })
        builder.addCase(fetchAllProducts.fulfilled,(state,action)=>{
            state.loading = false
            state.allProducts = action.payload
            state.error = ""
        })
        builder.addCase(fetchAllProducts.rejected,(state,action)=>{
            state.loading = false
            state.allProducts = []
            state.error = "API Call failed!!!"
        })
    }
})


export default productSlice.reducer
