import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo1 from "../assets/logo/lo2.png";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <header className="p-10 flex w-full z-99 justify-between bg-gray-600 fixed ">
      <div className="-mt-15 -mb-20">
        <Image src={logo1} width={200} height={200} alt="logo" />
      </div>
      <Navbar />
      <div className="flex gap-5">
        <Button className="bg-gray-200 text-black hover:text-white hover:cursor-pointer">
          Sign Up
        </Button>
        <Button className="bg-blue-400 hover:cursor-pointer">Sign In</Button>
      </div>
    </header>
  );
}
