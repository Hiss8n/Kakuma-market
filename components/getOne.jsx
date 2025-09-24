import React from 'react'

const ProductId = () => {
      const getOneProduct = async () => {
            const res = await fetch(`http:localhost:3000/api/fetch-products/${params.id}`);
            const prodcutId = await res.json();
            return prodcutId
    
    
        }

  return (
    <div>ProductId</div>
  )
}

export default ProductId