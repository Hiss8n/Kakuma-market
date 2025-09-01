'use client'

import { addUser } from '@/lib/addProduct'

import React, { useState } from 'react'

const SignUpPage = () => {
/* 
  const [user,setUser]=useState({
    name:"",
    email:"",
    password:""
  })
 */
 const SignUp= async(formData)=>{

  const {message,user}= await addUser(formData);
  if(message){
    console.log(message)
  }

 }


  return (
    <div className='px-4 w-full max-w-7xl mx-auto pb-28 pt-23 min-h-screen'> 
  
        <form action={SignUp} className='w-full max-w-xl mx-auto flex flex-col items-center justify-center space-y-5 pt-3 md:pt-5'>
            <h2 className='text-lg text-center text-black font-medium '>Register</h2> 
    
            
    
          <div className="w-full flex flex-col">
            <label className='font-bold'>name:</label>
            <input type='text' name='name' placeholder='Enter product name'
            className="w-full px-3 py-1.5 md:py-3 text-[#252421] border  rounded-lg bg-white-500 border-gray-300" 
            />
          </div>
          <div className="w-full flex flex-col">
            <label className='font-bold'>email:</label>
            <input type='email' name='email' placeholder='Enter your email..'
            className="w-full px-3 py-1.5 md:py-3 text-[#252421] border  rounded-lg bg-white-500 border-gray-300"
             />
          </div>
          <div className="w-full flex flex-col">
            <label className='font-bold'>Passowrd:</label>
            <input type='password'  name="password" placeholder='Enter Your password...'
            className="w-full px-3 py-1.5 md:py-3 text-[#252421] border  rounded-lg bg-white-500 border-gray-300"
            />
          </div>
          <button type="submit" className="w-full bg-[#000f00] text-2xl text-center mx-auto px-2 py-1 md:px-4 md:py-2 text-[#fff]">Sign Up</button>
    
        </form>
        </div>
  )
          
}

export default SignUpPage