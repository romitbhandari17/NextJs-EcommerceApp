'use client';
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react';
import { FaCartShopping, FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";

export default function Navbar() {

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    } else if (!ref.current.classList.contains('translate-x-full')) {
      //alert('inside x-0')
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef();
  return (
    <div className='flex flex-col md:flex-row justify-center md:justify-start items-center shadow-md'>
      <Link href={'/'}>
        <div className="mx-5">
          <Image src="/images/redlily-logo-text.png" width={200} height={40} alt="store logo"></Image>
        </div>
      </Link>
      <div>
        <ul className='flex items-center font-bold space-x-4 my-6'>
          <Link className="mx-4" href={'/products/kurtis'}><li>Kurtis</li></Link>
          <Link href={'/products/kaftans'}><li>Kaftans</li></Link>
          <Link href={'/products/earrings'}><li>Earrings</li></Link>
        </ul>
      </div>
      <div onClick={toggleCart} className="absolute right-4 my-6 mx-2 cursor-pointer"><FaCartShopping className="text-xl md:text-3xl" />
      </div>
      <div ref={ref} className="w-72 z-10 absolute top-0 right-0 bg-red-200 p-10 transform transition-transform translate-x-full">
        <span onClick={toggleCart}><IoIosCloseCircle className='absolute top-4 right-2 text-2xl cursor-pointer text-red-700' /></span>
        <h2 className='font-bold text-xl'>Shopping Cart</h2>
        <ol className='list-decimal font-semibold'>
          <li >
            <div className='items flex my-4'>
              <div className='px-4 w-2/3 break-all'>Redlily Kurtiddgdf gdfgdfgdfgdfgdg</div>
              <div className='w-1/3 flex items-center justify-center'><FaCirclePlus className='cursor-pointer text-red-600' /><span className='mx-2'>1</span>
                <FaCircleMinus className='cursor-pointer text-red-600' /></div>
            </div>
          </li>
          <li >
            <div className='items flex my-4'>
              <div className='px-4 w-2/3 break-all'>Redlily Kurtiddgdf gdfgdfgdfgdfgdg</div>
              <div className='w-1/3 flex items-center justify-center'><FaCirclePlus className='cursor-pointer text-red-600' /><span className='mx-2'>1</span>
                <FaCircleMinus className='cursor-pointer text-red-600' /></div>
            </div>
          </li>
          <li >
            <div className='items flex my-4'>
              <div className='px-4 w-2/3 break-all'>Redlily Kurtiddgdf gdfgdfgdfgdfgdg</div>
              <div className='w-1/3 flex items-center justify-center'><FaCirclePlus className='cursor-pointer text-red-600' /><span className='mx-2'>1</span>
                <FaCircleMinus className='cursor-pointer text-red-600' /></div>
            </div>
          </li>
          <li >
            <div className='items flex my-4'>
              <div className='px-4 w-2/3 break-all'>Redlily Kurtiddgdf gdfgdfgdfgdfgdg</div>
              <div className='w-1/3 flex items-center justify-center'><FaCirclePlus className='cursor-pointer text-red-600' /><span className='mx-2'>1</span>
                <FaCircleMinus className='cursor-pointer text-red-600' /></div>
            </div>
          </li>
          <li >
            <div className='items flex my-4'>
              <div className='px-4 w-2/3 break-all'>Redlily Kurtiddgdf gdfgdfgdfgdfgdg</div>
              <div className='w-1/3 flex items-center justify-center'><FaCirclePlus className='cursor-pointer text-red-600' /><span className='mx-2'>1</span>
                <FaCircleMinus className='cursor-pointer text-red-600' /></div>
            </div>
          </li>
          <li >
            <div className='items flex my-4'>
              <div className='px-4 w-2/3 break-all'>Redlily Kurtiddgdf gdfgdfgdfgdfgdg</div>
              <div className='w-1/3 flex items-center justify-center'><FaCirclePlus className='cursor-pointer text-red-600' /><span className='mx-2'>1</span>
                <FaCircleMinus className='cursor-pointer text-red-600' /></div>
            </div>
          </li>
        </ol>
        <div className='flex'>
          <button className="flex mx-auto mt-2 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-sm"><IoBagCheckOutline className='m-1' />Checkout</button>
          <button className="flex mx-auto mt-2 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-sm">Clear Cart</button>
        </div>
      </div>
    </div>
  )
}