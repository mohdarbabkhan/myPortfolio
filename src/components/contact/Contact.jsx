import React from 'react'
import "./Contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {BsInstagram} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
            <MdOutlineEmail className='contact-icon'/>
            <h4>Email</h4>
            <h5>ak2077719@gmail.com</h5>
            <a href='mailto:ak2077719@gmail.com' target="_blank">Send a message</a>
          </article>

          <article className='contact-option'>
            <BsInstagram className='contact-icon'/>
            <h4>instagram</h4>
            <h5>arbab.khann</h5>
            <a href='https://www.instagram.com/arbab.khaann/?next=%2F' target="_blank">Send a message</a>
          </article>

          <article className='contact-option'>
            <BsWhatsapp className='contact-icon'/>
            <h4>whatsapp</h4>
            <h5>9123456789</h5>
            <a href='https://api.whatsapp.com/send?phone=916387012594' target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of contact options */}
        <form action=''>
          <input type="text" name="name" placeholder="Your Full name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact