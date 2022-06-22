import React from 'react'
import './header.scss'
import Cta from './Cta'
import Olingo from '../../assets/olingo.png'
import Socials from './Socials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Olingo Maxwell</h1>
        <h5 className="text-light">Web Developer</h5>

        <Cta />

        <div className="me">
          <img src={Olingo} alt="olingo maxwell" />
        </div>

        <Socials/>

        <a href="#contact" rel='noreferrer' className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header