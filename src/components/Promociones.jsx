import promotion2 from '../assets/promo-2.webp'
import promotion3 from '../assets/promo-1.webp'
import promotion4 from '../assets/promo-3.webp'
import promotion1 from '../assets/promo-4.webp'
import promoBuenFin1 from '../assets/promo-buen-fin-1.webp'
import promoBuenFin2 from '../assets/promo-buen-fin-2.webp'
import promoBuenFin3 from '../assets/promo-buen-fin-3.webp'
import promoBuenFin4 from '../assets/promo-buen-fin-4.webp'
import promoBuenFin5 from '../assets/promo-buen-fin-5.webp'
import promoBuenFin6 from '../assets/promo-buen-fin-6.webp'

const Promociones = () => {
  return (
    <div>
      <div className='promo'>
        <div className='title'>
          <h2>Promociones</h2>
        </div>
        <section className='promociones'>
          <div className='container-promo'>
            <img src={promoBuenFin1} alt='Promoción de blanqueamiento dental' className='promotion-img' />
            <a href='https://api.whatsapp.com/send?phone=525529484701' target='_blank' rel='noopener noreferrer'>Contáctanos</a>
          </div>
          <div className='container-promo'>
            <img src={promoBuenFin2} alt='Promoción de limpieza dental' className='promotion-img' />
            <a href='https://api.whatsapp.com/send?phone=525529484701' target='_blank' rel='noopener noreferrer'>Contáctanos</a>
          </div>
          <div className='container-promo'>
            <img src={promoBuenFin3} alt='Promoción extracción de muelas del juicio' className='promotion-img' />
            <a href='https://api.whatsapp.com/send?phone=525529484701' target='_blank' rel='noopener noreferrer'>Contáctanos</a>
          </div>
          <div className='container-promo'>
            <img src={promoBuenFin4} alt='Promoción extracción de muelas del juicio' className='promotion-img' />
            <a href='https://api.whatsapp.com/send?phone=525529484701' target='_blank' rel='noopener noreferrer'>Contáctanos</a>
          </div>
          <div className='container-promo'>
            <img src={promoBuenFin5} alt='Promoción extracción de muelas del juicio' className='promotion-img' />
            <a href='https://api.whatsapp.com/send?phone=525529484701' target='_blank' rel='noopener noreferrer'>Contáctanos</a>
          </div>
          <div className='container-promo'>
            <img src={promoBuenFin6} alt='Promoción extracción de muelas del juicio' className='promotion-img' />
            <a href='https://api.whatsapp.com/send?phone=525529484701' target='_blank' rel='noopener noreferrer'>Contáctanos</a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Promociones
