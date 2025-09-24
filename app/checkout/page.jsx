"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { removeCartItem } from "@/store/cartSlice";

export default function CheckoutPage() {

  const cartItems=useSelector((state)=>state.cart.cart);
  
 
 const dispatch=useDispatch();

 
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item?.product.price * item?.quantity,
    0
  );

  const price =cartItems.map(item=>{
    return Number(item?.product.price);
  })

  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cartItems }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url; // redirect to Stripe Checkout
    }
  };

  return (
    <div  className="min-h-screen w-full mx-auto flex-col pt-20 items-center">
      <div className="p-4 w-full justify-center"> 
      <div className="h-[60px] bg-gradient-to-b from-blue-700 to-blue-400 flex items-center justify-center text-center uppercase">  <h1 className="text-md text-white">CART ITEMS</h1></div>
      <div className="w-full overflow-hidden flex items-center justify-between bg-amber-50 h-[30px] px-4">
        <h3 className="text-shadow-black w-[240px]">ITEM</h3>
        <h3 className="text-shadow-black">PRICE</h3>
        <h3 className="text-shadow-black">QUANTITY</h3>
        <h3 className="text-shadow-black">TOTAL</h3>

      </div>
    
      <div className="h-[160px] top-60">
        {cartItems.map((item) => (
          <div
            key={item?.product._id}
            className="w-full overflow-hidden flex items-center justify-between"
          >
           <div className="flex w-[200px] items-center ">
          <Image
            src={item?.product.image}
            width={380}
            height={200}
            alt={item?.product.name}
            className="cover overflow-hidden mr-3"
            />
            <div className="mb-2 flex-col">
              <span className="font-bold text-md mb-8">{item?.product.name}</span>
              
              <button className=' text-gray-500 text-md mt-5'
              onClick={()=>{dispatch(removeCartItem({item:item?.product._id}))}}
              >Remove</button>
            </div>
            

           </div>
           <div>
            <span> $ {price}</span>
           </div>
           <div>{item?.quantity}</div>
            <div>{parseInt(Math.ceil(item?.product.price*item.quantity).toFixed(2))}</div>
          </div>
        ))}
      </div>

      
    </div>
    <h2>Subtotal: USD {subtotal}</h2>
      <h2>Total: USD {subtotal}</h2>

      <button
        onClick={handleCheckout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Pay Amount
      </button>
    </div>
  );
}
