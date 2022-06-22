import React from 'react'
import './footer.scss'
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import {  AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer-logo">olingo maxwell</a>

      <ul className="footer-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#services">Service</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer-socials">
      <a
        href="https://www.linkedin.com/in/olingo-maxwell-web-developer/"
        target="_blank" rel="noreferrer"
      >
        <BsLinkedin className='icon' />
      </a>
      <a href="https://github.com/olingomaxwell1999" target="_blank" rel="noreferrer">
        <FaGithub className='icon'/>
      </a>
      <a href="https://twitter.com/olingo_maxwell" target='_blank' rel="noreferrer">
        <AiFillTwitterCircle className='icon'/>
      </a>
      <a href="https://instagram.com/olingo_maxwell" target='_blank' rel="noreferrer">
        <AiFillInstagram className='icon'/>
      </a>
      <a href="https://facebook.com/olingo-maxwell" target='_blank' rel="noreferrer">
        <BsFacebook className='icon'/>
      </a>
      </div>

      <div className="footer-copyright">
        <small>&copy; Olingo Maxwell.  All Rights Reserved 2022</small>
      </div>
    </footer>
  )
}

export default Footer