import Link from 'next/link'

export default async function Kurtis({ params }) {
  //const { slug } = params;
  const productsJson = await getKurtisData();
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto md:mx-0">
          <div className="flex flex-wrap -m-4 justify-center">
            {productsJson.map((item) => {
              return(
              <div key={item._id} className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-2">
                <Link href={`/product/${item.slug}`} className="block relative rounded overflow-hidden ">
                  <img alt="ecommerce" className="h-[36vh] block mx-auto" src={item.img} />
                </Link>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                  <p className="mt-1">₹{item.price}</p><p className="mt-1">S, M, L, XL, XXL</p>
                </div>
              </div>)
            })}
          </div>
        </div>
      </section >
    </div >
  )
}


async function getKurtisData() {
  try {
    let products = await fetch("http://localhost:3000/api/products", {
      cache: 'no-store',  // Forces fresh data on every request (SSR)
    });
    let productsJson = await products.json();
    // console.log('resp from api');
    console.log(productsJson.data);
    return productsJson.data;
  } catch (error) {
    console.error('Error fetching products', error);
    throw new Error("Could not fetch products. Please try again later.");
  }
}