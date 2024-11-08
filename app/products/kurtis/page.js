import Link from 'next/link'

export default async function Kurtis({ params }) {
  //const { slug } = params;
  let products = await getKurtisData();
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto md:mx-0">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).map((item) => {
              return(
              <div key={products[item]._id} className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-2">
                <Link passHref={true} href={`/product/${products[item].slug}`} className="block relative rounded overflow-hidden ">
                  <img alt="ecommerce" className="h-[36vh] block mx-auto" src={products[item].img} />
                </Link>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[item].category}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium text-xs">{products[item].title}</h2>
                  <p className="mt-1">₹{products[item].price}</p>
                  <p className="mt-1">
                    {products[item].size.includes('S') && <span className='border border-gray-400 p-1 m-1'>S</span>} 
                    {products[item].size.includes('M') && <span className='border border-gray-400 p-1 m-1'>M</span>} 
                    {products[item].size.includes('L') && <span className='border border-gray-400 p-1 m-1'>L</span>} 
                    {products[item].size.includes('XL') && <span className='border border-gray-400 p-1 m-1'>XL</span>} 
                    {products[item].size.includes('XXL') && <span className='border border-gray-400 p-1 m-1'>XXL</span>}
                    </p>
                    <p className="mt-1">
                    {products[item].color.includes('red') && <button className="border-2 border-red-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>} 
                    {products[item].color.includes('green') && <button className="border-2 border-green-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>} 
                    {products[item].color.includes('blue') && <button className="border-2 border-blue-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>} 
                    {products[item].color.includes('yellow') && <button className="border-2 border-yellow-300 ml-1 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none"></button>} 
                    {products[item].color.includes('black') && <button className="border-2 border-black ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                    </p>
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
    let productsResp = await fetch("http://localhost:3000/api/products", {
      cache: 'no-store',  // Forces fresh data on every request (SSR)
    });
    let products = await productsResp.json();
    //console.log('resp from api', products.data);
    let kurtiSets={};
    for(let item of products.data){
      if(item.title in kurtiSets){

        if(!kurtiSets[item.title].color.includes(item.color) && item.availableQty > 0){
          kurtiSets[item.title].color.push(item.color);
        }

        if(!kurtiSets[item.title].size.includes(item.size) && item.availableQty > 0){
          kurtiSets[item.title].size.push(item.size);
        }

      }else{
        kurtiSets[item.title] = JSON.parse(JSON.stringify(item));
        kurtiSets[item.title].color = [item.color];
        kurtiSets[item.title].size = [item.size];
      }
    }
    //console.log(kurtiSets);
    return kurtiSets;
  } catch (error) {
    console.error('Error fetching products', error);
    throw new Error("Could not fetch products. Please try again later.");
  }
}