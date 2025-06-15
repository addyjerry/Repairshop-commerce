import Link from "next/link";
import React from "react";
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
  return (
    <nav>
      <ul className="flex gap-10 text-xl text-white">
        {items.map((item, index) => (
          <Link key={index} href={item.href}>
            {" "}
            <li className="hover:cursor-pointer hover:mt-1">{item.label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
