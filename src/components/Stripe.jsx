import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] h-15 px-10 py-4 border-zinc-600 border-r-[1.2px] border-y-[1.2px] flex items-center justify-between'>
        <img src={val.url} alt="" />
        <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripe