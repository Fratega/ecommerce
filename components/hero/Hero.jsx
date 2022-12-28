import React from 'react'
import Image from 'next/image'
import Jordans from '../../Public/img/Jordans.png'

const Hero = () => {
  return (
    <section>
        <div className='bg-red-600 w-100 h-80 relative'>
          <Image src={Jordans} alt=""  className='' fill />
        </div>
    </section>
  )
}

export default Hero