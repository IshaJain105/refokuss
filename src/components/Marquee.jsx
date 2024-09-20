import React from 'react'

const Marquee = ({imagesurls}) => {
  return (
    <div className='w-full flex items-center gap-20 py-7 overflow-hidden whitespace-nowrap' >
        {imagesurls.map((url,index)=>(
            <img className='w-[8vw] flex-shrink-0' key={index}  src={url} alt="" />
        ))}
        
    </div>
  )
}

export default Marquee