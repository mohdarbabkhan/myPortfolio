import React from 'react'
import "./About.css"
import ME from "../../assets/arbabprofilepic.jpg"
import { CgWebsite } from "react-icons/cg"
import { ImMobile } from "react-icons/im"
import { GiPencilBrush } from "react-icons/gi"
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about-container'>
        <div className='about-me'>
          <div className='about-me-img'>
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className='about-content'>
          <div className='about-cards'>
            <article className='about-card'>
              <CgWebsite className='about-icon' />
              <h5>Full stack Developer</h5>
              <small>I like to code things from scratch, and enjoy bringing ideas to life</small>
            </article>
            <article className='about-card'>
              <ImMobile className='about-icon'/>
              <h5>Mobile App Developer</h5>
              <small>I like to code and design mobile applications</small>
            </article>
            <article className='about-card'>
              <GiPencilBrush className='about-icon'/>
              <h5>Designer</h5>
              <small>I value clean design patterns and thoughtful interactions</small>
            </article>
          </div>
          <p className='about-para'>
          I am a Full-stack Web and Mobile application developer i also love to Design UI/UX
          I have developed and delivered some amazing looking mobile and Web applications to my clients, currently
          i am a Student of Computer Science and i have worked as a webdeveloper for stack flare.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About