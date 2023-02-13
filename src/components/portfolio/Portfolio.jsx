import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/adgeniuspic.png"
import IMG2 from "../../assets/tindogpic.png"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

const data =[
  {
    id:1,
    image:IMG1,
    title:'AdGenius website, it turns products description into ad copy through OpenAi',
    github:'https://github.com/mohdarbabkhan/AdGenius-frontend',
    demo:'https://adgenius.onrender.com/'
  },
  {
    id:2,
    image:IMG2,
    title:'TinDog, A dating website for Dogs (:',
    github:'https://github.com/mohdarbabkhan/tindog',
    demo:'https://my-tindog.onrender.com/'
  },
  {
    id:3,
    image:IMG3,
    title:'Crypto Currenty dashboard',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:4,
    image:IMG4,
    title:'Crypto Currenty dashboard',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:5,
    image:IMG5,
    title:'Crypto Currenty dashboard',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:6,
    image:IMG6,
    title:'Crypto Currenty dashboard',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
]

const Portfolio = () => {
  return (
    <section id='#portfolio'>
    <h5>My recent work</h5>
    <h2>Portfolio</h2>

    <div className='container portfolio-container'>
    {
      data.map(({id,image,title,github,demo}) =>{
        return(
          <article className='portfolio-item'>
        <div className='portfolio-item-image'>
          <img src={image} alt="title" />
        </div>
        <h3>{title}</h3>
        <div className='portfolio-item-cta'>
        <a href={github} className='btn' target='_blank'>GitHub</a>
        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
        )
      })
    }
    </div>
    </section>
  )
}

export default Portfolio