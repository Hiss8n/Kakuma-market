"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./store/cartSlice"
import productsSlice from "./store/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart:cartSlice
  },
});
