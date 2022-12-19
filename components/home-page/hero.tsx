/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
// import bgHeaderDesktop from '../../public/images/bg-header-desktop.svg'
// import bgHeaderMobile from '../../public/images/bg-header-mobile.svg'
import classes from './hero.module.css'

const Hero = () => {
  const [isDesktop, setDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth > 650 : true
  )

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  return (
    <div className={classes.hero}>
      <span className={classes.imageWrapper}>
        <img
          alt='background header'
          src={
            isDesktop
              ? '/images/bg-header-desktop.svg'
              : '/images/bg-header-mobile.svg'
          }
        />
      </span>
    </div>
  )
}

export default Hero
