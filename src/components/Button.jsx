import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title="Start a Project"}) => {
  return (
    <div className='w-[10vw] px-4 py-2 bg-white text-zinc-900 rounded-full justify-around flex items-center font-medium text-sm'>
        <h1>{title}</h1>
        <IoIosReturnRight className='w-5 h-5'/>
    </div>
    
  )
}

export default Button