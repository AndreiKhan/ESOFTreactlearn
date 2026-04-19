import '@/components/Header.scss'
import cart from '@/assets/images/cart.svg'
import profile from '@/assets/images/profile.svg'

function HeaderCategories() {
  const categories = [
    {id: 1, label: 'TV', value: '/tv'},
    {id: 2, label: 'Phone', value: '/phone'},
    {id: 3, label: 'Laptop', value: '/laptop'},
  ]

  return (
    <>
      {categories.map((category) => (
        <a
          className={`header__link ${window.location.pathname === category.value ? 'header__link--active' : ''}`}
          href={category.value}
          key={category.id}
        >
          {category.label}
        </a>
      ))}
    </>
  )
}

function Header() {

  return (
    <header className='header center'>
      <div className='header__content'>
        <div className='header__left'>
          <a className='header__logo' href="/">
            TechStore
          </a>
          <nav className='header__nav header__nav--desktop'>
            <HeaderCategories />
          </nav>
        </div>
        <div className='header__right'>
          <a className='header__icon' href="/">
            <img src={cart} alt="cart" />
          </a>
          <button className='header__icon' type='button'>
            <img src={profile} alt="profile" />
          </button>
        </div>
      </div>
      <div className='header__nav header__nav--mobile'>
        <HeaderCategories />
      </div>
    </header>
  )
}

export default Header
