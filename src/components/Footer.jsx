import '@/components/Footer.scss'

function Footer() {

  return (
    <footer className='footer center'>
      <div className='footer__container'>
        <nav className='footer__links'>
          <h4 className='footer__title'>About</h4>
          <a className='footer__link' href="/">About Us</a>
          <a className='footer__link' href="/">Careers</a>
          <a className='footer__link' href="/">Press</a>
        </nav>
        <nav className='footer__links'>
          <h4 className='footer__title'>Support</h4>
          <a className='footer__link' href="/">Contact</a>
          <a className='footer__link' href="/">FAQ</a>
          <a className='footer__link' href="/">Shipping</a>
        </nav>
        <nav className='footer__links'>
          <h4 className='footer__title'>Legal</h4>
          <a className='footer__link' href="/">Privacy Policy</a>
          <a className='footer__link' href="/">Terms of Service</a>
          <a className='footer__link' href="/">Returns</a>
        </nav>
        <div className='footer__links footer__subscription'>
          <h4 className='footer__title'>Newsletter</h4>
          <form className='footer__send-info'>
            <label
              className='footer__link footer__label'
              htmlFor="subscribe-email"
            >
              Subscribe for exclusive deals
            </label>
            <div className='footer__email-info'>
              <input
                className='footer__email-input primary-input'
                type="email"
                placeholder='Email'
                id='subscribe-email'
                name='subscribe-email'
              />
              <button
                className='footer__email-button primary-button'
                type='button'
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <p className='footer__copyright'>
          © 2026 TechStore. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
