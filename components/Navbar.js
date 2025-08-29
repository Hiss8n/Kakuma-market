import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { MenuIcon, ShoppingCart } from 'lucide-react'
import Image from 'next/image';



const Navbar = () => {
  return (
  <nav className='w-full h-[70px] bg-gradient-to-r from-green-800 via-yellow-600 to-black-800 items-center justify-between px-12 py-2 pt-2 overflow-hidden'>
       
        <div className='flex items-center justify-between '>
             <div className='flex items-center  gap-3'>
                 <Image
            src='/logo.jpg'
            width={120}
            height={120}
            className=''
            />
        <span className=' uppercase text-sm text-white font-semibold md:text-xl'>Kauma Market</span>


        </div>
            <div className='hidden  md:flex items-center justify-end gap-3 text-xl text-yellow-300 '>

            <Link href={'/'}>Home</Link>
            <Link href={'/'}>About</Link>
            <Link href={'/'}>Contact</Link>
            </div>
            <div className=' hidden md:flex justify-between'>
                
               <Link href='checkout'> 
                <Button className='px-16 py-2 bg-black rounded-b-sm p-4 text-slate-700'  >
                    <span className='text-shadow-white font-extrabold text-md text-white'>2</span>
                    
                     <ShoppingCart  size={44} color='#fff'/>
                   
                   

                </Button>
                 </Link>
               
               
            </div>
            <MenuIcon size={16} color='#4c4c4c' className='md:hidden'></MenuIcon>

        </div>

    </nav>
  )
}

export default Navbar