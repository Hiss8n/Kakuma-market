'use client'

import { addAction } from "@/lib/addProduct"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"


const AddForm = () => {

    const router=useRouter()
    const {imageUrl,setImageUrl}=useState('')


    const clientAddAction= async( formData )=>{
        const {error,success}=await addAction(formData)
        if(error){
            toast.error(error)
            
        }
        if(success){
            toast.success(success)

            router.push('/')
            setImageUrl("")
        
        }

    }

const handelImageChange=(e)=>{
    const file= e.target.file?.[0]
    if(file){
    const fileSize=file.size

    if(Math.round(fileSize/ 1024)>1024){
        toast.error("Image lager that 1mb are not allowed")
    }else{
        setImageUrl(URL.createObjectURL(file));
    }
    }


    
}
        
  return (
    <form action={clientAddAction} className='w-full max-w-xl mx-auto flex flex-col items-center justify-center space-y-5 pt-3 md:pt-5'>

        {false && (<Image src={imageUrl} width={100} height={200} alt="image" className="max-w-full max-h-72 object-cover object-center rounded-lg"/>)}
     
      <div className="w-full flex flex-col">
        
        <label className='font-bold mb-4'>image:</label>
        <input type='file' name='image' accept='image/*' 
        onChange={handelImageChange}
        className="w-full px-3 py-1.5 md:py-3 text-[#252421] border  rounded-lg bg-white-500 border-gray-300"
        />
      </div>

      <div className="w-full flex flex-col">
        <label className='font-bold'>name:</label>
        <input type='text' name='name' placeholder='Enter product name'
        className="w-full px-3 py-1.5 md:py-3 text-[#252421] border  rounded-lg bg-white-500 border-gray-300" 
        />
      </div>
      <div className="w-full flex flex-col">
        <label className='font-bold'>price:</label>
        <input type='number' name='price' placeholder='Enter product price'
        className="w-full px-3 py-1.5 md:py-3 text-[#252421] border  rounded-lg bg-white-500 border-gray-300"
         />
      </div>
      <div className="w-full flex flex-col">
        <label className='font-bold'>description:</label>
        <textarea  name="description" placeholder='Enter description...' rows={4}
        className="w-full px-3 py-1.5 md:py-3 text-[#252421] border  rounded-lg bg-white-500 border-gray-300"
        />
      </div>
      <button type="submit" className="w-full bg-[#000f00] text-2xl text-center mx-auto px-2 py-1 md:px-4 md:py-2 text-[#fff]">ADD</button>

    </form>
  )
}

export default AddForm