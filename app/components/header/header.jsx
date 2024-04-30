import React from 'react'
import Link from 'next/link'
import Navbar from '../navbar/navbar'
import styles from "./header.module.css"

import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";



const Header = () => {
  return (
    <div style={{borderBottom:"1px solid black"}} className='lg:h-16 relative flex w-full h-28 pl-7 pr-7 justify-between overflow-hidden'>
        <div className={styles.circleBig}></div>
        <div className={styles.circleSmall}></div>
        <Link className='pr-7 p-2 w-800 flex items-center  border-r-2 border-zinc-900' href="/"><img  src="https://i.ibb.co/g3sXtKf/kedoio.png" alt="logo" /></Link>
        <Navbar/>
        <div className='flex gap-5 items-center justify-end pl-7 border-l-2 border-zinc-900 lg:pl-0 lg:border-l-0 '>
            <Link href="/" className='hover:scale-95 md:p-7 '><IoSearchSharp size={30}/></Link>
            <Link href="/" className='hover:scale-95 md:hidden'><FaRegHeart size={30}/></Link>
            <Link href="/" className='hover:scale-95 md:hidden'><MdOutlineShoppingCart size={30}/></Link>
            <Link href="/" className='hover:scale-95 md:hidden'><MdOutlinePerson size={35}/></Link>
        </div>
    </div>
  )
}

export default Header