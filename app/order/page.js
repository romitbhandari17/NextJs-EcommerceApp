import React from 'react'

const Order = () => {
  return (
    <div><section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-red-500 tracking-widest">REDLILY</h2>
            <h1 className="text-red-900 text-3xl title-font font-medium mb-4">OrderId: #14456</h1>
            {/* <div className="flex mb-4">
              <a className="flex-grow text-red-500 border-b-2 border-red-500 py-2 text-lg px-1">Description</a>
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
            </div> */}
            <h3 className="text-gray-500 text-sm title-font font-medium mb-4">Your Order has been successfully placed.</h3>
            <div className="flex border-t border-gray-200 py-2 space-x-2 justify-between">
              <div className="text-red-600 w-2/3">Description</div>
              <div className="ml-auto text-red-600">Qty</div>
              <div className="ml-auto text-red-600">Item Price</div>
            </div>
            <div className="flex border-t border-gray-200 py-2 space-x-2 justify-between">
              <div className="text-red-500 text-sm w-2/3">Red Bandhej Ethinc Kurta Set with Pant (XL/Blue)</div>
              <div className="ml-auto text-gray-900">1</div>
              <div className="ml-auto text-gray-900">499</div>
            </div>
            <div className="flex border-t border-gray-200 py-2 space-x-2 justify-between">
              <div className="text-red-500 text-sm w-2/3">Red Bandhej Ethinc Kurta Set with Pant (L/Red)</div>
              <div className="ml-auto text-gray-900">1</div>
              <div className="ml-auto text-gray-900">499</div>
            </div>
            <div className="flex border-t border-gray-200 py-2 space-x-2 justify-between">
              <div className="text-red-500 text-sm w-2/3">Red Bandhej Ethinc Kurta Set with Pant (XL/Red)</div>
              <div className="ml-auto text-gray-900">1</div>
              <div className="ml-auto text-gray-900">499</div>
            </div>
            <div className="flex">
              <div className="title-font font-medium text-2xl text-gray-900">₹ 1497</div>
              <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Track Order</button>
            </div>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
        </div>
      </div>
    </section></div>
  )
}

export default Order