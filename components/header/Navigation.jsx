import React from 'react'
import Link from 'next/link'
import {AiOutlineClose} from "react-icons/ai"

const Navigation = ({trigger}) => {
  return (
    <div className='bg-black w-full h-full fixed top-0 left-0 z-20 flex items-center justify-center md:hidden'>
        <div className='absolute top-[1rem] left-[1rem]'>
            <AiOutlineClose className='text-white text-3xl cursor-pointer' onClick={trigger} />
        </div>

        <div className='text-white text-3xl flex flex-col gap-5 text-center font-thin uppercase tracking-widest'>
            <Link href="/" onClick={trigger} >Home</Link>
            <Link href="/categorias" onClick={trigger} >Categorias</Link>
        </div>



    </div>
  )
}

export default Navigation