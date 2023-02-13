import React from 'react'
import "./Footer.css"
import {FiInstagram} from "react-icons/fi"
import {FaFacebookF} from "react-icons/fa"
import {IoLogoTwitter} from "react-icons/io"
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer-logo'>Arbab</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer-socials'>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className='footer-copyright'>
        <small>&copy; Arbab.com. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer