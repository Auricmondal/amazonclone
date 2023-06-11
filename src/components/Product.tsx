import Image from 'next/image';
import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import Currency from 'react-currency-formatter';


interface ProductProps {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    key: number;
}

const Product:React.FC<ProductProps> = ({
    title,
    price,
    description,
    category,
    image,
    key
}) => {
    const [rating]=useState(
        Math.floor(Math.random() * (5 - 1 + 1)) + 1
    );
    const [hasPrime]=useState(Math.random() < 0.5);
  return (
    <div className='flex flex-col m-5 bg-white z-30 p-10 relative'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
        <Image alt='' src={image} height={200} width={200} className='m-auto'/>
        <h4 className='my-3'>{title}</h4>
        <div className='flex'>
            {Array(rating)
            .fill('')
            .map(( _ , i )=>(
                <AiFillStar className='text-yellow-500' key={i} size={20}/>
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div className='mb-5'>
            <Currency quantity={price} currency='GBP' />
        </div>
        {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
            <img className='w-12' src='https://links.papareact.com/fdw' alt=''/>
            <p className='text-sm text-gray-500'>FREE next day delivery</p>
        </div>)} 
        <button className='mt-auto button'>Add to Basket</button>
            
    </div>
  )
}

export default Product