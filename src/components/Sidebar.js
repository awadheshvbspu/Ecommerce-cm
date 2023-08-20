import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import CartItem from '../components/CartItem';
// import SidebarProvider from '../contexts/SidebarContext';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsFillTrash2Fill } from 'react-icons/bs';
import { FiTrash2 } from 'react-icons/fi'


export default function Sidebar() {
  const { cart, clearCart, total, itemAmount } = useContext(CartContext)
  const { isOpen, handleclose } = useContext(SidebarContext)
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
        <div className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward onClick={handleclose} className='text-3xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => {
          return (
            <CartItem item={item} key={item.id} />
          )
        })}</div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div onClick={clearCart} className='cursor-pointer py-4 bg-red-600 text-white w-12 h-12 flex justify-center items-center text-xl'>
            <FiTrash2 />
          </div>
        </div>
        <Link to={'/'} className='bg-gray-300 flex p-4 justify-center items-center text-primary w-full font-medium'>View Cart</Link>
        <Link to={'/'} className='text-white flex p-4 justify-center items-center bg-primary w-full font-medium'>Checkout</Link>
      </div>
    </div>
  )
}

