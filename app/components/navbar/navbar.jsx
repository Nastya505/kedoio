"use client"
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    const links = [
        {label: "новинки", href: "/#new"},
        {label: "бренды", href: "/#brands"},
        {label: "каталог", href: "/catalog"},
        {label: "контакты", href: "#footer"},
    ];

    const currentPath = usePathname();
return (
  <div className='lg:order-3 lg:border-l-2 border-zinc-900 flex  justify-center items-center'>
   <div  className='hidden  lg:flex pl-7'><IoMdMenu size={30}/></div> 
  <div className='lg:hidden flex gap-10 pr-2 pl-2 justify-center items-center'>
    {links.map((link, index) => {
      return (
        <Link
          key={index}
          className={classnames({
            "text-zinc-800 font-bold": currentPath !== link.href,
            "text-zinc-900 font-bold": currentPath === link.href,
            "hover:text-zinc-500 transition-colors": true,
          })}
          href={link.href}
        >
          {link.label}
        </Link>
      );
    })}
  </div>
  </div>
);
}

export default Navbar;