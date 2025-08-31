import connectDb from "@/lib/db"
import axios from "axios"




export const GET=async(req)=>{
    try {

        await connectDb()

        const data=await axios.get('/api/productlist');
        
    } catch (error) {
        
    }
}