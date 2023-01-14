import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

type Props = {
    source:string
}

const Hero = ({source}: Props) => {
  const router=useRouter()
const [heroSource,setHeroSource]=useState<string>("/../public/hero-e1fa22fb.webp")
  useEffect(()=>{
    if (router.asPath==='/'){setHeroSource("/../public/hero-e1fa22fb.webp")}
    if (router.asPath==='/foreign'){setHeroSource("/../public/hero-b5a880ed.webp")}
    if (router.asPath==='/train'){setHeroSource("/../public/hero-f5969150.webp")}
    if (router.asPath==='/bus'){setHeroSource("/../public/hero-824e4df4.webp")}
    
  },[router.asPath])
  
  return (
    <div className='z-10  max-w-full'>
        <Image  width={2500} height={552} src={heroSource} alt='hero' />
    </div>
  )
}

export default Hero