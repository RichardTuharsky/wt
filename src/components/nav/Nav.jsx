import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BsCodeSquare} from 'react-icons/bs'
import {IoMdCall} from 'react-icons/io'

function Nav() {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><AiOutlineFundProjectionScreen/></a>
      <a href="#portoflio"><BsCodeSquare/></a>
      <a href="#contact"><IoMdCall/></a>
    </nav>
  )
}

export default Nav