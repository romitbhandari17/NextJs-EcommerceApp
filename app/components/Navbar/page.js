import Image from 'next/image'
import Link from 'next/link'
import { FaCartShopping } from "react-icons/fa6";

export default async function Navbar() {
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
      <div className="absolute right-4 my-6 mx-2"><FaCartShopping className="text-xl md:text-3xl" /></div>
    </div>
  )
}