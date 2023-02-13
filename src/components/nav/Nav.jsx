import React from 'react'
import { useState } from 'react'
import "./Nav.css"
import {BiHomeAlt} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' className={activeNav ==="#" ? 'active' : ""} onClick={()=>setActiveNav("#")}><BiHomeAlt/></a>
      <a href='#about' className={activeNav ==="#about" ? 'active' : ""} onClick={()=>setActiveNav("#about")}><AiOutlineUser/></a>
      <a href='#experience' className={activeNav === "#experience"? 'active' : ""} onClick={()=>setActiveNav("#experience")}><BiBook/></a>
      <a href='#services' className={activeNav ==="#services" ? 'active' : ""} onClick={()=>setActiveNav("#services")}><RiServiceLine/></a>
      <a href='#contact' className={activeNav ==="#contact" ? 'active' : ""} onClick={()=>setActiveNav("#contact")}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav