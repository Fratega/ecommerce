import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const GridItem = ({foto, nombre, direccion}) => {
  return (
    <article className='relative h-[15rem] lg:h-[20rem]'>
        <Image src={foto} fill className='object-cover brightness-50 -z-10 rounded-xl' alt="" />
        <h3 className='text-white font-bold uppercase text-4xl p-3'>{nombre}</h3>
        <Link href={direccion} className='bg-white py-2 px-6 rounded-xl absolute bottom-3 right-3'>Ver más</Link>
    </article>
  )
}

export default GridItem