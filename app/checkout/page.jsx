"use client";
import { useState } from "react";

export default function CheckoutPage() {
 
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "ankara green", price: 2500, quantity: 1 },
    { id: 2, name: "Afro women dress", price: 4000, quantity: 2 },
  ]);

 
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }} className="h-[560px]">
      <div className="h-[60px] bg-gradient-to-b from-blue-700 to-blue-400 flex items-center justify-center text-center uppercase">  <h1 className="text-md text-white">Checkout</h1></div>
    
      <div className="h-[160px]">
        {cartItems.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 0",
              padding: "10px",
              borderBottom: "1px solid #ccc",
            }}
          >
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>USD {item.price * item.quantity}</span>
          </div>
        ))}
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
