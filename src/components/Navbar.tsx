"use client";
import { Logs, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo1 from "../assets/logo/lo2.png";

interface Navitems {
  label: string;
  href: string;
}
interface Navtools {
  items?: Navitems[];
}
const defaultNavitems: Navitems[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Contact",
    href: "/contact-us",
  },
  {
    label: "About",
    href: "/about",
  },
];
const Navbar: React.FC<Navtools> = ({ items = defaultNavitems }) => {
  const [sidemenu, setSidemenu] = useState(false);
  const handleSidemenu = () => {
    setSidemenu(!sidemenu);
  };
  return (
    <>
      <nav>
        <ul className="hidden md:flex gap-10 text-xl text-white">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              {" "}
              <li className="hover:cursor-pointer hover:mt-1">{item.label}</li>
            </Link>
          ))}
        </ul>
        <Logs className="md:hidden" onClick={handleSidemenu} />
      </nav>
      {sidemenu && (
        <div className="inset-0 z-99 bg-white md:hidden w-full h-full flex-col fixed">
          <div className="flex justify-between text-2xl text-center">
            <Image src={logo1} width={200} height={200} alt="logo" />
            <X onClick={handleSidemenu} className="mt-17 text-xl mr-5" />
          </div>
          <nav>
            <ul className="justify-center ">
              {items.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="p-5 text-2xl text-center border border-b-2"
                    onClick={handleSidemenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default Navbar;
