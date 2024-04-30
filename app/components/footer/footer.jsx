import React from 'react'
import Link from 'next/link'
import styles from "./footer.module.css"

import { FaTelegramPlane } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" style={{borderTop:"1px solid black"}} className=' xl:flex-col xl:items-center xl:text-center text-left font-bold relative flex justify-between overflow-hidden items-start pr-24 pl-24 pb-24  pt-24 xl:p-4 xl:pt-10'>
       <div className={styles.circleBig}></div>
       <div className={styles.circleSmall}></div>
          <div className='flex flex-col xl:order-2'>
              <Link href="/">о нас</Link>
              <Link href="/">связаться с нами</Link>
              <Link href="/">гарантия и возврат</Link>
          </div>
          <div className='flex flex-col xl:order-3'>
          <Link href="/">доставка</Link>
          <Link href="/">оплата</Link>
          <Link href="/">новости</Link>
          </div>
          <div className='flex flex-col xl:order-4'>
          <Link href="/">контакты</Link>
          <Link href="/">форма обратной связи</Link>
          </div>

        <div className='xl:pl-0 xl:mb-10 flex flex-col justify-center items-center gap-6 pl-24'>
            <span className='text-center'>подпишись на нас:</span>
            <div className='flex gap-4 justify-between'>
                <Link  className='hover:scale-110' href="/"><FaTelegramPlane size={30}/></Link>
                <Link className='hover:scale-110' href="/"><RiInstagramFill size={30}/></Link>
                <Link className='hover:scale-110' href="/"><FaYoutube size={30}/></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer