require('dotenv').config();


import mongoose from "mongoose";


const MONGODB_URI=process.env.MONGODB_URI;
console.log(MONGODB_URI)

const connectDb=async()=>{

    const connectionState=mongoose.connection.readyState
    if(connectionState===1){
        console.log("Already connected")
        return;
    }

    if(connectionState===2){
        console.log("connecting...");
         return ;
    } 


    try {
       await mongoose.connect(MONGODB_URI,{
            dbName:'kakuma_market_db',
            bufferCommands:true,

        }).then(()=>console.log('Connected to Database successfully!!!')).catch((e)=>console.log(e))
     
        
    } catch (error) {
        console.log('Error',error)
    return new Error("Error in server",error)
        
    }
}

export default connectDb;