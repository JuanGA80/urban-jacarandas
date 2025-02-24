import '../styles/hero.css'
import Foto1 from '../assets/slider-compu-buen-fin.jpg'
import HeroMov from '../assets/promo-buen-fin-2.webp'

import '../styles/modal.css'

const Hero = () => {
  return (
    <div className='hero'>
      <img
        src={Foto1}
        alt='Fotografía principal del hero Urban Sonríe'
        className='img-escritorio'
        loading='eager'
      />
      <img
        src={HeroMov}
        alt='Fotografía principal del hero Urban Sonríe'
        className='img-mov'
        loading='eager'
      />
      {/* <div className='texto-hero'>
        <div className='container-texto-hero'>
          <h1>Urban Sonríe</h1>
          <p>Tu mejor opción para volver a sonreír</p>
        </div>
      </div> */}
    </div>
  )
}
export default Hero
