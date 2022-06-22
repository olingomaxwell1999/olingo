import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import './contact.scss'
import { MdEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { FaWhatsappSquare } from 'react-icons/fa'

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_edrhikk', 'template_tz0ze54', form.current, 'pcxewfrEX3Zi-qdwW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>contact me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdEmail className='icon' />
            <h4>email</h4>
            <span>maxwellolingo8@gmail.com</span>
            <a href="mailto:maxwellolingo8@gmail.com">send message</a>
          </article>

          <article className="contact-option">
            <BsLinkedin className='icon' />
            <h4>linkedin</h4>
            <h5>olingo maxwell</h5>
            <a href="https://linkedin.com/olingo-maxwell-web-developer">send message</a>
          </article>

          <article className="contact-option">
            <FaWhatsappSquare className='icon' />
            <h4>WhatsApp</h4>
            <h5>+254720158827</h5>
            <a href="https://api.whatsapp.com/send?phone=254720158827">send  message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary' >send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact