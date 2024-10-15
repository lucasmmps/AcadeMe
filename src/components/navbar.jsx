import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { TbBook } from "react-icons/tb";

function Navbar() {
  return (
    <div className='p-2 flex justify-between items-center mx-auto px-4 bg-[#003465] text-white'>
      <div className='pr-2'>
          <TbBook size={30} />
        </div>
        <h1 className='w-full text-3xl font-bold text-white'>AcadeMe</h1>
        <ul className='flex'>
            <li className='mr-4 rounded-full text-center bg-[#006ACB]' style={{ width: '99.71px', height: '17.11' }}>cadastro</li>
            <li className='mr-4 rounded-full text-center bg-[#2C9AFF]' style={{ width: '99.71px', height: '17.11'  }}>login</li>
        </ul>
        <div className='hidden'>
          <AiOutlineMenu size={20} />
        </div>
        <div className='hidden fixed right-0 top-0 w-[50%] h-full border-r border-r-white bg-[#003465]'>
        <ul className='p-4 pt-16'>
            <li className='p-4 border-b'>login</li>
            <li className='p-4 border-b'>cadastro</li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar