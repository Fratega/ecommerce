import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const GridItem = ({foto, nombre, ruta}) => {
  return (
    <article className='relative h-[15rem] lg:h-[20rem]'>
        <Image src={foto} fill placeholder='blur' className='object-cover brightness-50 -z-10 rounded-xl' alt="" />
        <h3 className='text-white font-bold uppercase text-4xl p-3'>{nombre}</h3>
        <Link href={ruta} className='bg-white py-2 px-6 rounded-xl absolute bottom-3 right-3 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white'>Ver más</Link>
    </article>
  )
}

export default GridItem;