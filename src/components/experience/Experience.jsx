import React from 'react'
import "./Experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience' className='experience'>
    <h5>What skills I Have</h5>
    <h2>My Experience</h2>
    <div className='container experience-container'>
      <div className='experience-frontend'>
        <h3>Frontend Development</h3>
        <div className='experience-content'>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon' />
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon' />
            <div>
            <h4>CSS3</h4>
            <small className='text-light'>Intedmediate</small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon' />
            <div>
            <h4>MUI</h4>
            <small className='text-light'>Intedmediate</small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon' />
            <div>
            <h4>BootStrap</h4>
            <small className='text-light'>Intedmediate</small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon' />
            <div>
            <h4>Figma</h4>
            <small className='text-light'>Intedmediate</small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon' />
            <div>
            <h4>React/native</h4>
            <small className='text-light'>Intedmediate</small>
            </div>
          </article>
          
        </div>
      </div>
            {/* BackendDevelopment */}
            
      <div className='experience-frontend'>
        <h3>Backend Development</h3>
        <div className='experience-content'>
        <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon' />
            <div>
            <h4>Node/Express</h4>
            <small className='text-light'>Intedmediate</small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon' />
            <div>
            <h4>MongoDb</h4>
            <small className='text-light'>Intedmediate</small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon' />
            <div>
            <h4>MySql</h4>
            <small className='text-light'>Intedmediate</small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon' />
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon' />
            <div>
            <h4>Linux</h4>
            <small className='text-light'>Intedmediate</small>
            </div>
          </article>
          <article className='experience-details'>
            <BsPatchCheckFill className='experience-detail-icon' />
            <div>
            <h4>Git/Github</h4>
            <small className='text-light'>Intedmediate</small>
            </div>
          </article>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience