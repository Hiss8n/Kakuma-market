

import axios from "axios";

import { create } from "zustand";




export const useAuthStore=create((set)=>({
    isLoading:false,
     users: [],

  setUsers: (users) => set({ users }),

  // helper to check role of a given user
  checkRole: (userId) => {
    const { users } = useUserStore.getState();
    const user = users.find((u) => u._id === userId);
    return user?.role; // default to "user"
  },

    checkAuth:async()=>{
        set({isLaoding:true})
        try {
            const res= await axios.get('api/fetch-users')

            const user=res.data.find(user=>user.role==="user");
          
           if(!user){
            return

           }
           return{success:true}
           
            
        
            
        } catch (error) {
            set({user:null,isLaoding:false})
            
        }
    },

    register:async()=>{
       set({isLaoding:true})
        try {
            axios.get('api/fetch-users')
            .then((res)=>{
                
                set({user:res});
                const myUser=localStorage.setItem("user");
                set({user:JSON.parse(myUser)})
            }
        )
            
        } catch (error) {
            console.log('Error',error)
            set({user:null,isLoading:false})
            
        }
    },
}))