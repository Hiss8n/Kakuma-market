'use server'

import Product from "@/model/Product.js";
import cloudinary from "./cloudinary.config.js";
import connectDb from "./db.js";
import User from "@/model/User.js";
import bcrypt from "bcryptjs"



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


export const addUser=async(formData)=>{
    try {
        const name= formData.get("name")?.toString()
        const email= formData.get("email")?.toString()
        const password= formData.get("password")?.toString();


    await connectDb();

    const existUser= await User.findOne({email});
    if(existUser) return {error:"User already exists"}

    const salt = await bcrypt.genSalt(10)
    const hashedPassword= await bcrypt.hash(password,salt)

    const user=await User.create({
      name,
      email,
      password:hashedPassword
    })


    if(user){
        return json({message:'User registered successfully',user:{
            id:user._id,
            name:user.name,
            password:null
        }})
    } 


        
    } catch (error) {
        console.log(error)
        return {error:'Unable to register'}
        
    }
}
