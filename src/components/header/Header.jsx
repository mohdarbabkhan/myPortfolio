import React from 'react'
import './Header.css'
import CTA from "./CTA"
import ME from "../../assets/me-bg.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='#' className='active'>
    <div className='container header-container'>
      <h5>Hello I'am</h5>
      <h1>Mohmmad Arbab</h1>
      <h5 className='text-light'>Web, Mobile Developer and Designer</h5>
      <CTA/>
      <HeaderSocials/>

      <div className='me'>
        <img src={ME} alt="mypic"/>
      </div>

      <a href='#contact' className='scroll-down'>Scroll Down</a>

    </div>
    </header>
  )
}

export default Header