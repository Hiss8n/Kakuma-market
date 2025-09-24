"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchProducts = createAsyncThunk("api/fetch-poducts", async () => {
  const response = await fetch("http://localhost:3000/api/fetch-products");
  const data = await response.json();
  return data;
});

const initialState = {
  products: [],
  status:'idle'  , /* |'loading' | 'succeeded' | 'failed', */
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    
    },
    extraReducers:(builder)=>{
      builder
      .addCase(fetchProducts.pending,(state)=>{
        state.status='Pending'
      })
      .addCase(fetchProducts.fulfilled,(state,action)=>{
        state.status='succeeded'
        state.products=action.payload
      })
      .addCase(fetchProducts.rejected,(state,action)=>{
        state.status='failed'
        state.error=action.error.message
      })

    }
 

});


export const { addToCart, removeCartItem } = productsSlice.actions;
export default productsSlice.reducer;
