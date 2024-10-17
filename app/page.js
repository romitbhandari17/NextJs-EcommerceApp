
import Image from "next/image";
import Footer from "./components/Footer/page";
import Navbar from "./components/Navbar/page";

export default function Home() {
  return (
      <div>
        <Image height={4000} width={6000} src='/images/home.jpg' alt="Picture of Fashion"></Image>
      </div>
  );
}
