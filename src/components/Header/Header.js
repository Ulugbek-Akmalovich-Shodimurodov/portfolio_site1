import React, { useRef } from 'react'
import Container from '../Container/Container'
import './Header.css'


function Header() {

  const barsRef = useRef()

  const barsAnimation = () =>{
    barsRef.current.classList.toggle('bars-animation')
    barsRef.current.parentElement.classList.toggle('mobile-nav__list')
  }
  return (
    <header className='site-header'>
        <Container>
          <nav className="site-nav">
            <span className='site-logo'>LOGO</span>
            <ul className="navbar-list">
              <li className="navbar-list__item"><p>Home</p></li>
              <li className="navbar-list__item"><p>About me</p></li>
              <li className="navbar-list__item"><p>Skills</p></li>
              <li className="navbar-list__item"><p>Portfolio</p></li>
              <li className="navbar-list__item"><p>Contacts</p></li>
            </ul>
            <span ref={barsRef} onClick={barsAnimation} className='navbar-bars'></span>
          </nav>
        </Container>
    </header>
  )
}

export default Header