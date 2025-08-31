'use server'

import Product from "@/model/Product.js";
import cloudinary from "./cloudinary.config.js";
import connectDb from "./db.js";



export const addAction=async(formData)=>{

    try {
    const image= formData.get("image") ;
    const name= formData.get("name") ;
    const price= formData.get("price") ;
    const description= formData.get("description") ;
        

    if(!image || !name ||!price || !description){
        console.log('all fields are required!!!..')
        return {
            error:"All fields are required"
        }
    }
     await connectDb()
     //image processes
    


     const arrayBuffer= await image.arrayBuffer()
     const buffer=new Uint8Array(arrayBuffer)

     const imageRespone= await new Promise((resolve,reject)=>{
        cloudinary.uploader.upload_stream(
            {
            resource_type:"auto",
            folder:"products"
        },
        async(error,result)=>{
            if(error){
                return reject(error.message)
            }
            return resolve(result)
        }
        
        
    ).end(buffer)
      
     })
      
    

    
     const newProduct=await Product.create({
        image:imageRespone.secure_url,
        name,
        price,
        description
     })

    if(newProduct){
         return {
        success:"Product added successfully"
     }

    }
    
     
    } catch (error) {
        return{
            error:"can not add product to data base,"
        }
        
    }


    
 

}