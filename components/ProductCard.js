"use client";

import Image from "next/image";
import ProductListPage from "@/app/items/page";
/* import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "@/store/cartSlice";
import { fetchProducts } from "@/store/productsSlice"; */

export default function ProductPage() {
/*   const dispatch = useDispatch();
  const products = useSelector((item) => item.products.products);
  const status = useSelector((item) => item.products.status);
  const error = useSelector((item) => item.products.error);

  const cartItems = useSelector((item) => item.cart.cart);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handleAddToCart = (product) => {
    dispatch(addTocart({ product }));
  }; */

  return (
    <ProductListPage/>
   /*  <div className="p-2 overflow-hidden">
      <h2 className="text-md md:text-xl font-bold text-teal-950 pl-4 py-4 bg-slate-50 ">
        {" "}
        Fashion
      </h2>

      <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-4 px-6 p-6 hover:transition-opacity-100 cursor bg-slate-100">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl opacity:100 shadow-lg overflow-hidden 
        group hover:opacity-200  transform transition-transform duration-300 hover:scale-95 hover:bg-slate-650 hover:duration-200"
          >
            <Image
              src={product.image}
              alt={product._id}
              width={400}
              height={670}
              priority
              className="w-full  object-coverw-full h-64 object-cover group-hover:opacity-80 transition "
            />
            <div className="p-4 py-6">
              <p className="text-gray-700 text-xs rounded opacity-200 group-hover:opacity-100 transition md:text-md">
                {product.description}
              </p>
              <div className="text-red-400 text-xs md:text-xl">
                {" "}
                $ {product.price}
              </div>
              <button
                onClick={handleAddToCart(product)}
                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div> */
  );
}
