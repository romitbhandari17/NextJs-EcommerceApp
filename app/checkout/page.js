'use client';
import Link from 'next/link';
import React from 'react'
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { IoBagCheckOutline } from 'react-icons/io5';
import { useCart } from '@/app/context/CartContext';

const Checkout = () => {
  const { cart, subTotal, addToCart, removeFromCart } = useCart();
  return (
    <div className='m-auto container'>
      <h1 className='m-auto text-3xl font-bold text-center my-8'>Checkout</h1>
      <h2 className='text-xl font-semibold mx-2'>1. Delivery Details</h2>
      <div className="m-auto flex my-1">
        <div className="w-1/2 p-2">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="w-1/2 p-2">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <div className="w-full p-2 my-1">
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
        <textarea name="address" id="address" cols="30" rows="2" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <div className="m-auto flex my-1">
        <div className="w-1/2 p-2">
          <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
          <input type="text" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="w-1/2 p-2">
          <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
          <input type="text" id="city" name="city" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <div className="m-auto flex my-1">
        <div className="w-1/2 p-2">
          <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
          <input type="text" id="state" name="state" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="w-1/2 p-2">
          <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
          <input type="text" id="pincode" name="pincode" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
      </div>
      <h2 className='text-xl font-semibold mx-2'>2. Review Cart Items:</h2>
      <div className="w-full md:w-full z-20 bg-red-200 md:p-10 p-4">
        <h2 className='font-bold text-xl'>Shopping Cart</h2>
        <ol className='list-decimal font-normal mx-4'>
          {Object.keys(cart).length == 0 && <div className='my-2 text-sm text-red-600'> Your cart is empty!
          </div>}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className='items flex my-4'>
                  <div className='px-4 w-2/3 md:w-96 break-all'>{cart[k].name}</div>
                  <div className='w-1/3 flex items-center justify-center md:justify-start'><FaCirclePlus onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-red-600' /><span className='mx-2'>{cart[k].qty}</span>
                    <FaCircleMinus onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='cursor-pointer text-red-600' /></div>
                </div>
              </li>
            )
          })}
        </ol>
        <div className="mt-3 font-bold">
          <span>Subtotal: ₹{subTotal}</span>
        </div>
      </div>
      <div className='flex'>
          <Link href={'/pay'}>
            <button className="flex mx-2 mt-2 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded text-sm">Pay ₹{subTotal}</button>
          </Link>
        </div>
    </div>
  )
}

export default Checkout