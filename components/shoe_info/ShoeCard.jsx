import React from 'react'
import Image from 'next/image'

const ShoeCard = ({img, nombre, precio}) => {
  return (
    <article className='border border-slate-300'>
        <div className='bg-slate-100 p-2'>
            <Image src={img} alt="" />
        </div>
        <div className='m-3'>
            <h2 className='text-xl'>{nombre}</h2>
            <p className='text-2xl font-bold'>{`$${precio}`}</p>
        </div>

    </article>
  )
}

export default ShoeCard