import '@/components/SpecialDeal.scss'
import close from '@/assets/images/close-white.svg'
import clock from '@/assets/images/clock.svg'

function SpecialDeal() {
  return (
    <div className='special-deal'>
      <div className='special-deal__header'>
        <img className='special-deal__img' src={clock} alt="clock" />
        <h3 className='special-deal__title'>
          Special Deal!
        </h3>
      </div>
      <p className='special-deal__text'>
        Register now to unlock exclusive offers and discounts
      </p>
      <div className='special-deal__offer'>
        <p className='special-deal__text'>Offer expires in:</p>
        <p className='special-deal__time'>0:53:50</p>
      </div>
      <button className='special-deal__close' type='button'>
        <img src={close} alt="close" />
      </button>
    </div>
  )
}

export default SpecialDeal
