import React from 'react'

const Video = () => {
  return (
    <div className='flex w-full flex-col items-center justify-center mb-20 overflow-x-hidden'>
        <div className='sm:text-3xl mt-7 mb-7 uppercase text-center font-bold text-7xl md:text-5xl md:mb-0'>new <span style={{color:"#fff", WebkitTextStroke:"1px #000"}}>collection</span></div>
        <video autoPlay loop  muted preload="auto"
        className='md:p-7 pr-28 pl-28 overflow-x-hidden'
        style={{objectFit:"cover", alignItems: "center", width: "min(100%)", height:"560px"}}>
            <source src="./images/video.mp4" type="video/mp4"/>
        </video>
    </div>
  )
}

export default Video