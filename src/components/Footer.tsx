import Image from "next/image";
import logo from "../assets/logo/lo1.png";
import Navbar from "./Navbar";
export default function Footer() {
  return (
    <div className="bg-gray-700 text-white text-md relative p-10 w-full bottom-0">
      <div className="flex justify-between items-center px-40">
        <div className="">
          <Image src={logo} width={100} height={100} alt="logo" />
        </div>
        <div className="pr-20">
          <Navbar />
        </div>
      </div>
      <div className="text-sm text-center">
        <p>@All rights reserved 2025</p>
      </div>
    </div>
  );
}
