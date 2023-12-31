import Image from 'next/image'
import React from 'react'
import { AiOutlineSearch,AiOutlineMenu,AiOutlineShoppingCart } from 'react-icons/ai'

const Header = () => {
  return (
    <header>
      {/* top nav */}
      <div 
        className='flex items-center bg-amazon_blue p-1 flex-grow py-2'
      >
        <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 px-2'>
          <Image 
          src="https://links.papareact.com/f90" 
          className='cursor-pointer'
          alt="logo" 
          width={150} 
          height={40}
          />
        </div>

        {/* Search */}
        <div className='hidden sm:flex items-center cursor-pointer h-10 flex-grow rounded-md bg-yellow-400 hover:bg-yellow-500 transition'>
          <input type='text' className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md outline-none'  />
          <AiOutlineSearch size={16} className='m-4'/>
        </div>

        {/* Right  */}

        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div className='link'>
            <p>Hello Auric Mondal</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div className='link relative flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black'>0</span>
            <AiOutlineShoppingCart size={34} />
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
          </div>
        </div>
      </div>
      {/* bottom nav */}
      <div>
        <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
          <p className='link flex items-center'>
            <AiOutlineMenu size={20} className='mr-1'/>
            All
          </p>
          <p className='link'>Prime Video</p>
          <p className='link'>Amazon Business</p>
          <p className='link'>Today&apos;s Deals</p>
          <p className='link hidden lg:inline-flex'>Electronics</p>
          <p className='link hidden lg:inline-flex'>Food & Grocery</p>
          <p className='link hidden lg:inline-flex'>Prime</p>
          <p className='link hidden lg:inline-flex'>Buy Again</p>
          <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
          <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
          <p className='link hidden lg:inline-flex'>Gift Cards</p>
          <p className='link hidden lg:inline-flex'>Pet Supplies</p>
        </div>
      </div>
    </header>
  )
}

export default Header