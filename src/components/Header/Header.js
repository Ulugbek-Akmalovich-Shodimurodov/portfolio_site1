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
              <li className="navbar-list__item">Home</li>
              <li className="navbar-list__item">About me</li>
              <li className="navbar-list__item">Skills</li>
              <li className="navbar-list__item">Portfolio</li>
              <li className="navbar-list__item">Contacts</li>
            </ul>
            <span ref={barsRef} onClick={barsAnimation} className='navbar-bars'></span>
          </nav>
        </Container>
    </header>
  )
}

export default Header