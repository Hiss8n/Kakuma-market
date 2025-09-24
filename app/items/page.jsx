'use client'

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "@/store/productsSlice";

import Image from "next/image";
import { addTocart } from "@/store/cartSlice";
import { useRouter } from "next/navigation";


const ProductListPage = () => {

  const ruoter=useRouter();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  const cartItem = useSelector((state) => state.products.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);
 


  const handleAddToCart = (product) => {

    dispatch(addTocart({product}));

  }


  return (
    <div className='p-2 overflow-hidden top-60 w-full h-full pt-30'>
      <h2 className="text-md md:text-xl font-bold text-teal-950 pl-4 py-4 bg-slate-50 ">
        {" "}
        Prodcust List Page
      </h2>
      <div className="grid grid-cols-1 items-center md:grid-cols-3 gap-4 px-6 p-6 hover:transition-opacity-100 cursor bg-slate-100">

        {products.length === 0 ? (<p>No products found</p>) : (products.map((product) => (
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
              onClick={()=>ruoter.push(`product/${product._id}`)}
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
                onClick={()=>{handleAddToCart(product)}}
                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )))}
      </div>


    </div>
  )
}

export default ProductListPage