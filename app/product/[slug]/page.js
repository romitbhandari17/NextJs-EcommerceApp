"use client"; // This marks the component as a Client Component
import { useCart } from '@/app/context/CartContext';
import React, { useEffect, useState } from 'react'

// async function getProductData(slug) {
//     try {
//         let productResp = await fetch("http://localhost:3000/api/products/" + slug, {
//             cache: 'no-store',  // Forces fresh data on every request (SSR)
//         });
//         let product = await productResp.json();

//         let varResponse = await fetch("http://localhost:3000/api/products?title=" + product.title, {
//             cache: 'no-store',  // Forces fresh data on every request (SSR)
//         });

//         let variants = await varResponse.json();

//         let colorSizeSlug = {}; // {color: {size: {slug: 'kurti red xl'}}}
//         for (let item of variants) {
//             if (Object.keys(colorSizeSlug).includes(item.color)) {
//                 colorSizeSlug[item.color][item.size] = { slug: item.slug };
//             }
//             else {
//                 colorSizeSlug[item.color] = {};
//                 colorSizeSlug[item.color][item.size] = { slug: item.slug };
//             }
//         }
//         setData({ variants: colorSizeSlug, product: product });

//     } catch (error) {
//         console.error('Error fetching variants', error);
//         throw new Error("Could not fetch variants. Please try again later.");
//     }


//     //console.log(kurtiSets);
//     return kurtiSets;
// }


function FetchProductData(slug) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                let productResp = await fetch("http://localhost:3000/api/products/" + slug)
                //
                let product = await productResp.json();
                console.log('prod in ui 1',product.data);

                let varResponse = await fetch("http://localhost:3000/api/products?slug=" + slug,{
                    cache: 'no-store',  // Forces fresh data on every request (SSR)
                });
                let variants = await varResponse.json();
                console.log('prod in ui 2',variants.data);
                let colorSizeSlug = {}; // {color: {size: {slug: 'kurti red xl'}}}
                for (let item of variants.data) {
                    if (Object.keys(colorSizeSlug).includes(item.color)) {
                        colorSizeSlug[item.color][item.size] = { slug: item.slug };
                    }
                    else {
                        colorSizeSlug[item.color] = {};
                        colorSizeSlug[item.color][item.size] = { slug: item.slug };
                    }
                }
                setData({ variants: colorSizeSlug, product: product.data ? product.data: {} });
            } finally {
                setLoading(false);
            }

        }
        fetchData();
    }, [slug]);

    return { data, loading };
}

export default function ProductPage({ params }) {
    const { slug } = params;
    const [pin, setPin] = useState();
    const [service, setService] = useState();
    const { cart, subTotal, addToCart, removeFromCart, clearCart } = useCart();
    const { data, loading } = FetchProductData(slug);
    console.log('product color and size data', data);
    //const [color, setColor] = useState(data.product.color);
    //const [size, setSize] = useState(data.product.size);

    const onChangePin = (e) => {
        setPin(e.target.value);
    }

    const checkServicability = async () => {

        //console.log(pin);
        try {
            let apiData = await fetch("/api/pincode");
            let jsonData = await apiData.json();
            //console.log(jsonData, pin);
            if (jsonData.includes(parseInt(pin))) {
                setService(true)
            } else {
                setService(false);
            }
        } catch (error) {
            console.error('Error fetching pincode', error);
        }
    }

    const refreshVariant = (newsize, newcolor)=>{
        console.log(data.variants, newsize, newcolor);
        let url = `http://localhost:3000/product/${data.variants[newcolor][newsize]['slug']}`;

        window.location = url;
    }

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-10 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-center rounded" src="/images/kurti-demo.jpg" />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">REDLILY</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Red Bandhej Ethinc Kurta Set with Pant</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    {Object.keys(data.variants).includes('yellow') && Object.keys(data.variants['yellow']).includes(data.product.size) && <button onClick={(e)=>{refreshVariant(data.product.size, 'yelllow')}} className={`border-2 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none ${data.product.color==='yellow'? 'border-black': 'border-gray-300'}`}></button>}
                                    {Object.keys(data.variants).includes('blue') && Object.keys(data.variants['blue']).includes(data.product.size) && <button onClick={(e)=>{refreshVariant(data.product.size, 'blue')}} className={`border-2 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none ${data.product.color==='blue'? 'border-black': 'border-gray-300'}`}></button>}
                                    {Object.keys(data.variants).includes('red') && Object.keys(data.variants['red']).includes(data.product.size) && <button onClick={(e)=>{refreshVariant(data.product.size, 'red')}} className={`border-2 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none ${data.product.color==='red'? 'border-black': 'border-gray-300'}`}></button>}
                                </div>
                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select value={data.product.size} onChange={(e)=>{refreshVariant(e.target.value, data.product.color)}} className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base pl-3 pr-10">
                                        {Object.keys(data.variants[data.product.color]).includes('S') && <option value='S'>S</option>}
                                        {Object.keys(data.variants[data.product.color]).includes('M') && <option value='M'>M</option>}
                                        {Object.keys(data.variants[data.product.color]).includes('L') && <option value='L'>L</option>}
                                        {Object.keys(data.variants[data.product.color]).includes('XL') && <option value='XL'>XL</option>}
                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">₹599</span>
                                <button onClick={() => { addToCart(slug, 1, 499, 'Red Bandhej Ethinc Kurta Set with Pant', 'S', 'Blue') }} className="flex ml-3 text-white bg-red-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-red-600 rounded">Add to Cart</button>
                                <button className="flex ml-3 text-white bg-red-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-red-600 rounded">Buy Now</button>
                                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-3 flex space-x-2">
                                <input onChange={onChangePin} type="text" className="border-2 p-2 rounded-md border-red-300" placeholder="Enter pincode" />
                                <button onClick={checkServicability} className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Check Pin</button>
                            </div>

                            {service && service != null && <div className='text-green-500 text-sm mt-2'>
                                Yay! your pincode is servicable.
                            </div>}
                            {!service && service != null && <div className='text-red-500 text-sm mt-2'>
                                Sorry, we don`t provide delivery on this pincode yet.
                            </div>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}