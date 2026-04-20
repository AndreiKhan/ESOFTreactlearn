import { useState } from 'react'
import '@/components/ProductCard.scss'
import arrow from '@/assets/images/arrow.svg'
import minus from '@/assets/images/minus.svg'
import plus from '@/assets/images/plus.svg'

function AddToCart() {
  const [productQuantity, setProductQuantity] = useState(0)

  const addProduct = () => {
    setProductQuantity((previous) => previous + 1)
  }
  const removeProduct = () => {
    setProductQuantity((previous) => (previous === 0 ? previous : previous - 1))
  }

  return (
    <>
      {productQuantity > 0 ? (
        <div className='product-card__buttons'>
          <button
            className='product-card__button-count primary-button'
            type='button'
            onClick={removeProduct}
          >
            <img className='product-card__minus' src={minus} alt="minus" />
          </button>
          <p className='product-card__counter-text'>{productQuantity} in cart</p>
          <button
            className='product-card__button-count primary-button'
            type='button'
            onClick={addProduct}
          >
            <img className='product-card__plus' src={plus} alt="plus" />
          </button>
        </div>
      ) : (
        <button
          className='product-card__button primary-button'
          type='button'
          onClick={addProduct}
        >
          Add to Cart
        </button>
      )}
    </>
  )
}

function Carousel({ images, slide, onPrev, onNext }) {
  return (
    <>
      <div className='product-card__slide-numbers'>
        {images.map((image, index) => (
          <div
            key={image}
            className={`product-card__slide ${index === slide ? 'product-card__slide--active' : ''}`}
          />
        ))}
      </div>
      <button
        className='product-card__slide-button'
        type='button'
        onClick={onPrev}
      >
        <img className='product-card__arrow' src={arrow} alt="arrow" />
      </button>
      <button
        className='product-card__slide-button'
        type='button'
        onClick={onNext}
      >
        <img className='product-card__arrow' src={arrow} alt="arrow" />
      </button>
    </>
  )
}

function ProductCard({product}) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [slide, setSlide] = useState(0)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const images = product.images ?? []

  const previousImage = () => {
    setSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }
  const nextImage = () => {
    setSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className='product-card'>
      <div className='product-card__preview'
        style={{ backgroundImage: `url(${images[slide]})` }}
      >
        {product.isSpecialOffer && (
          <p className='product-card__special-offer'>Special Offer</p>
        )}
        <button 
          className={`product-card__favorite ${isFavorite ? 'product-card__favorite--active' : ''}`}
          type='button'
          onClick={toggleFavorite}
        >
          <svg className='product-card__heart' width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8C12.9933 7.02667 14 5.86 14 4.33333C14 3.36087 13.6137 2.42824 12.926 1.74061C12.2384 1.05297 11.3058 0.666666 10.3333 0.666666C9.15996 0.666666 8.33329 0.999999 7.33329 2C6.33329 0.999999 5.50663 0.666666 4.33329 0.666666C3.36083 0.666666 2.4282 1.05297 1.74057 1.74061C1.05293 2.42824 0.666626 3.36087 0.666626 4.33333C0.666626 5.86667 1.66663 7.03333 2.66663 8L7.33329 12.6667L12 8Z" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {images.length >= 2 && (
          <Carousel
            images={images}
            slide={slide}
            onPrev={previousImage}
            onNext={nextImage}
          />
        )}
      </div>
      <div className='product-card__content'>
        <div className='product-card__info'>
          <p className='product-card__brand'>{product.make}</p>
          <h3 className='product-card__model'>{product.model}</h3>
        </div>
        <div className='product-card__footer'>
          <p className='product-card__price'>
            ${product.price.toLocaleString('en-US')}
          </p>
          <AddToCart />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
