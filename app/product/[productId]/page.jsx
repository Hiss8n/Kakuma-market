
import React from 'react';
import ProductId from '@/components/getOne';

const Product = async ({ params }) => {

    const getItem = ProductId()
    console.log(getItem);

    return (
        <div className='min-h-screen w-full mx-auto flex-col pt-20 items-center'>
            {getItem}
            <div>Items By id</div>
        </div>
    )
}

export default Product;