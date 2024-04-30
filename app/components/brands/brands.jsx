import React from 'react'
import Link from 'next/link'
import styles from "./brands.module.css"
const Brands = () => {
  return (
    <div id="brands" className=' md:flex-col flex items-center w-full justify-center gap-12 relative mb-48'>
        <div className={styles.circleBig}></div>
        <div className={styles.circleSmall}></div>
        <Link href="#">
            <img className='hover:scale-90 transition-all' src="./images/adidas.svg"/>
        </Link>
        <Link href="#">
            <img className='hover:scale-90 transition-all' src="./images/puma.svg"/>
        </Link>
        <Link href="#">
            <img className='hover:scale-90 transition-all' src="./images/converse.svg"/>
        </Link>
        <Link href="#">
            <img className='hover:scale-90 transition-all' src="./images/vans.svg"/>
        </Link>
    </div>
  )
}

export default Brands