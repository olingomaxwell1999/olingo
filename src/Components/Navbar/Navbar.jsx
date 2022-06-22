import React, { useState } from 'react'
import { AiFillHome, AiOutlineProject, AiOutlineUser } from 'react-icons/ai'
import './navbar.scss'
import { BsBook } from 'react-icons/bs'
import { RiServiceFill } from 'react-icons/ri'
import { MdMessage } from 'react-icons/md'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <>
    <nav>
      <a onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} href="#home">
        <AiFillHome className='icon'/>
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser className='icon'/>
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <BsBook className='icon' />
      </a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <AiOutlineProject className='icon'/>
      </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceFill className='icon'/>
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <MdMessage className='icon'/>
      </a>
    </nav>
    </>
  )
}

export default Navbar