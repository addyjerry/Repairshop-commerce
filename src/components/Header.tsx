import Image from "next/image";
import Link from "next/link";
import logo1 from "../assets/logo/lo2.png";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <header className="p-5 md:p-10 flex w-full z-90 justify-between bg-gray-600 fixed ">
      <div className="-mt-15 -mb-20">
        <Link href="/">
          <Image src={logo1} width={200} height={200} alt="logo" />
        </Link>
      </div>
      <Navbar />
      {/* <div className="flex gap-5">
        <Button className="bg-gray-200 text-black hover:text-white hover:cursor-pointer">
          Sign Up
        </Button>
        <Button className="bg-blue-400 hover:cursor-pointer">Sign In</Button>
      </div> */}
    </header>
  );
}
