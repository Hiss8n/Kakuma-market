import { createSlice } from "@reduxjs/toolkit";


const initialState={
    cart:[],
    
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addTocart:(state,action)=>{
             const product=action.payload 
          /*   state.cart.push({product}); */

    const existing = state.cart.find((item) => item.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity = +1) }
              : item
          ),
        };
      }
    
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }

},
    
        removeCartItem:(state,action)=>{
            state.cart.filter(item=>item.id!==action.payload.id);

        }
    }
)




export const {addTocart,removeCartItem}=cartSlice.actions;


export default cartSlice.reducer;

