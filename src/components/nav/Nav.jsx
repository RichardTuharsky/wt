import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BsCodeSquare} from 'react-icons/bs'
import {IoMdCall} from 'react-icons/io'
import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('/#')
  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')}className={activeNav === '#portfolio' ? 'active' : ''}><BsCodeSquare/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : ''}><IoMdCall/></a>
    </nav>
  )
}

export default Nav