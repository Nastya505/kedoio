import React from 'react'
import Link from "next/link"
import { FaRegHeart } from "react-icons/fa";

import styles from "./card.module.css"

const Card = ({id, title, image, price}) => {
  return (
  
    <Link className='xl:w-1/2 md:w-full w-2/6' href={`/catalog/${id}`} >
        <div className=' bg-white p-7 font-bold' style={{border:"1px solid black"}}>
            <div className='flex justify-between'>
                <span>{title}</span>
                <Link href="/" className='hover:scale-110 transition-transform'><FaRegHeart size={30}/></Link>
            </div>
            <img className='hover:-rotate-3 transition-all scale-95' src={image} alt="photo"/>
            
            <div>
                {price[1] ? 
                <div className='flex justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                        <span>{price[0]} ₽</span>
                        <span className={styles.line}>{price[1]} ₽
                            <div className={styles.skewLine}/>
                        </span>
                    </div>
                    <span style={{fontSize: "16px",color:"#8F4AE9", lineHeight:"100%"}} className='pt-2 pb-2 pr-6 pl-6 uppercase bg-black'>скидка</span>
                </div>
                :
                <span>{price[0]} ₽</span>
                }
            </div>
        </div>
    </Link>
    
  
  )
}

export default Card;