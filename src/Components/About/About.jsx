import React from 'react'
import './about.scss'
import max from '../../assets/max.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <div>
      <section id='about'>
        <h5>get to know me</h5>
        <h2>about me</h2>

        <div className="container about-container">
          <div className="about-me">
            <div className="about-image">
              <img src={max} alt="olingo maxwell" />
            </div>

          </div>

          <div className="about-content">

            <div className="about-cards">
              <article className="about-card">
                <FaAward className='about-icon'/>
                <h5>Experience</h5>
                <small>6 months working</small>
              </article>

              <article className="about-card">
                <FiUsers className='about-icon'/>
                <h5>Clients</h5>
                <small>5+ Locally</small>
              </article>

              <article className="about-card">
                <VscFolderLibrary className='about-icon'/>
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>

            </div>
              
            <p>I am an ambitious and hard-working  Web Developer who understands the web cycle, from identifying a great design, transforming the great  design into code, hosting a website, collaborating with other developers using tools like Git and maintaining. I am a recent graduate of Nairobits Trust where I was equipped with great tools for both the frontend and the backend. My strength lies in the frontend. <br/>
            My main career goal is to enhance my professional skills, capabilities and knowledge in an organization which recognizes the value of hard work and trusts me with responsibilities and challenges.</p>

            <a href="#contact" className='btn btn-primary'>Lets Talk</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About