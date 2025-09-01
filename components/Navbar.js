'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { MenuIcon, ShoppingCart } from 'lucide-react'
import Image from 'next/image';
import axios from 'axios';



const Navbar = () => {


  useEffect(()=>{
     axios.get('api/fetch-users')
     .then((res)=>{console.log(res)})
     .catch((e)=>console.log(e))

     
  },[])
  return (
  <nav className='w-full h-[70px] bg-gradient-to-r from-green-800 via-yellow-600 to-black-800 items-center justify-between px-12 py-2 pt-2 overflow-hidden fixed z-50 pb-12'>
       
        <div className='flex items-center justify-between'>
          <Link href={'/'}>
         
             <div className='flex items-center  gap-3'>
                 <Image
            src='/logo.jpg'
            width={120}
            height={120}
            alt='logo'
            />
        <span className=' uppercase text-sm text-white font-semibold md:text-xl'>Kakuma Market</span>


        </div>
         </Link>

            <div className='hidden  md:flex items-center justify-end gap-3 text-xl text-yellow-300 '>

            <Link href={'/'}>Home</Link>
            
            <Link href={'/add-product'}>
            <Button className='px-4 py-2 rounded-lg bg-gradient-to-r ml-3 from-green-600 to-green-400 text-lg text-white' >Add products</Button>
            </Link>
            </div>
            <div className=' hidden md:flex justify-between'>
                
               <Link href='checkout'> 
                <Button className='px-16 py-2 bg-black rounded-b-sm p-4 text-slate-700'  >
                    <span className='text-shadow-white font-extrabold text-md text-white'>2</span>
                    
                     <ShoppingCart  size={44} color='#fff'/>
                   
                   

                </Button>
                 </Link>
                 <Link href={'Auth/sign-up'}>
                 <Button className='ml-2'>SignUp</Button>
                 </Link>
               
               
            </div>
            <MenuIcon size={16} color='#4c4c4c' className='md:hidden'></MenuIcon>

        </div>

    </nav>
  )
}

export default Navbar