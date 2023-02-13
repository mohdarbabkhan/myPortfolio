import React from 'react'
import {GrLinkedin} from "react-icons/gr"
import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href='www.linkedin.com/in/mohmmad-arbab-khan' target="_blank"><GrLinkedin/></a>
        <a href='https://github.com/mohdarbabkhan' target="_blank"><BsGithub/></a>
        <a href='https://www.instagram.com/arbab.khaann/' target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials