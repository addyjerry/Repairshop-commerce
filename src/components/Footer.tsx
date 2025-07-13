import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo/lo1.png";

interface Navitems {
  label: string;
  href: string;
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
export default function Footer() {
  return (
    <div className="bg-gray-700 text-white text-md  p-10 justify-between w-full bottom-0">
      <div className="flex justify-between  md:px-40">
        <div className="">
          <Image src={logo} width={100} height={100} alt="logo" />
        </div>
        <div className="pr-20">
          <ul className="flex flex-wrap justify-between gap-3 text-sm text-white">
            {defaultNavitems.map((item, index) => (
              <Link key={index} href={item.href}>
                {" "}
                <li className="hover:cursor-pointer hover:mt-1">
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-sm text-center">
        <p>@All rights reserved 2025</p>
      </div>
    </div>
  );
}
