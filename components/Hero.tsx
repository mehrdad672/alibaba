import Image from 'next/image'
import React from 'react'

type Props = {
    source:string
}

const Hero = ({source}: Props) => {
  return (
    <div className='z-10  max-w-full'>
        <Image width={2500} height={552} src={source} alt='hero' />
    </div>
  )
}

export default Hero