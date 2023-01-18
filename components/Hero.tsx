import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import airplaneHero from '../public/hero-e1fa22fb.webp'
import foreignAirplaneHero from '../public/hero-b5a880ed.webp'
import trainHero from '../public/hero-f5969150.webp'
import busHero from '../public/hero-824e4df4.webp'
type Props = {
    source:string
}

const Hero = ({source}: Props) => {
  const [heroSrc,setHeroSrc]=useState(airplaneHero)
  const router=useRouter()

  useEffect(()=>{
    if (router.asPath==='/'){setHeroSrc(airplaneHero)}
    if (router.asPath==='/foreign'){setHeroSrc(foreignAirplaneHero)}
    if (router.asPath==='/train'){setHeroSrc(trainHero)}
    if (router.asPath==='/bus'){setHeroSrc(busHero)}
    
  },[router.asPath])
  
  return (
    <div className='z-10  max-w-full'>
        <Image  width={2500} height={552} src={heroSrc} alt='hero' />
    </div>
  )
}

export default Hero