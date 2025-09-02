

import axios from 'axios'
import {create} from 'zustand'

export  const useProductStore=create((set)=>({
    products:[],
    isLoading:false,
    error:null,
    getProducts:async()=>{
        set({isLoading:true,error:null})
        try {
            const res=await axios.get('api/fetch-products')
            set({products:res.data,error:null})
                
            
            return {success:true}
        } catch (error) {
            console.log('Some thing went wrong',error)
            set({isLoading:true,error:'Failed to get producst'})
            
        }
    }
}))
