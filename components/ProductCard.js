'use client'

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductPage() {


  const [products,setProducts]=useState([]);




  useEffect(()=>{
     axios.get('/api/fetch-products')
     .then((res)=>{
      console.log(res.data);
      setProducts(res.data)
     })
     .catch((e)=>{console.log(e)})
    
  },[]);

  console.log(products);

  /* const items = [
    {
      id: 1,
      src: "/pic1.jpg", // stored in /public folder
      alt: "Nyama choma",
      price:150,
      cancel:500,
      description: "Delicous mouth watering beef."
    },
    {
      id: 2,
      src: "/pic2.jpg",
      alt: "Family Suite",
       price:450,
       cancel:500,
      description: "Perfect for families, includes 2 bedrooms and a lounge."
    },
    {
      id: 3,
      src: "/pic3.jpg",
      alt: "Honeymoon Suite",
       price:320,
       cancel:500,
      description: "Romantic suite with a private balcony and jacuzzi."
    },
    {
      id: 4,
      src: "/img1.jpg",
      alt: "Professional Staff",
       price:380,
       cancel:500,
      description: "High class professional staff and managemant board"
    }
    , {
      id: 5,
      src: "/img2.jpg",
      alt: "Professional Security",
       price:390,
       cancel:500,
    description: "High class Security team staff and CCTV cameras"
    },
     {
      id: 6,
      src: "/img3.jpg",
      alt: "Professional Security",
       price:690,
       cancel:500,
    description: "High class Security team staff and CCTV cameras"
    }
  ];
 */

  const addToCart=()=>{
    
  }

  return (
    <div  className="p-2 overflow-hidden">
      <h2 className="text-md md:text-xl font-bold text-teal-950 pl-4 py-4 bg-slate-50 "> Fashion</h2>
      
    <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-4 px-6 p-6 hover:transition-opacity-100 cursor bg-slate-100">
      {products.map((product) => (
        <div key={product._id} className="bg-white rounded-xl opacity:100 shadow-lg overflow-hidden 
        group hover:opacity-200  transform transition-transform duration-300 hover:scale-95 hover:bg-slate-650 hover:duration-200">
          <Image
            src={product.image}
            alt={product.alt}
            width={400}
            height={670}
            className="w-full  object-coverw-full h-64 object-cover group-hover:opacity-80 transition "
          />
          <div className="p-4 py-6">
            <p className="text-gray-700 text-xs rounded opacity-200 group-hover:opacity-100 transition md:text-md">{product.description}</p>
            <div className="text-red-400 text-xs md:text-xl"> $ {product.price}</div>
            <button
              onClick={() => addToCart()}
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>

          </div>
        </div>
      ))}
    </div>
      </div>
  );
}


















