import Product from '@/model/Product'
import {create} from 'zustand'




export const useCartStore=create((set)=>({
    cart:[],
    addToCart:async(product)=>{},
    removeItemFromCart:async(productId)=>{},
    updateItemFromCart:async(productId)=>{},
    updateQuantity:async(productId, amount)=>{},
    clearCart:async()=>{
        
    }

}))