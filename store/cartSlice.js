import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartQuantity: 0,
  cartAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;

        return;
      } else {
        state.cart.push({ ...item, cartQuantity: 1 });
        /* const temProduct=action.payload;
         state.cart.push(temProduct); */
        //state.cartQuantity +=1;
      }

      console.log(action.payload);

      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(index);
    },
    removeCartItem: (state, action) => {
      if (state.cart.filter((item) => item.id !== action.payload.id)) {
        console.log("removed!!!");
      }
    },
  },
});

export const { addTocart, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
