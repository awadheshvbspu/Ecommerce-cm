import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import {ProductContext} from '../contexts/ProductContext'

export default function ProductDetails() {
  const {id} = useParams();
  const {products} = useContext(ProductContext)
  const {addToCart} =useContext(CartContext)

  const product = products.find((item)=>{
    return item.id === parseInt(id);
  })

  if(!product){
    return(
      <section className='h-screen flex justify-center items-center'>
      Loading ...
      </section>
    )
  }

  const {title,price,description, image} = product
  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
    <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row items-center'>
    <div className='flex flex-col justify-center items-center mb-8 lg:mb-0'>
    <img src={image} alt='' className='max-w-[200px]' />
    </div>
    <div className='flex-1 text-center px-[200px] lg:text-left'>
    <h1 className='text-[26px] font-bold mb-2 max-w-[450px] '>{title}</h1>
    <div className='text-2xl font-medium text-red-600 mb-6'>$ {price}</div>
    <p className='mb-8 text-xl'>{description}</p>
    <button onClick={()=> addToCart(product,id)} className='bg-primary py-4 px-8 text-white'>Add to Cart</button>
    </div>
    </div>
    </div>
    </section>
  )
}

