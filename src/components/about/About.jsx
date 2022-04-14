import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FaLaptopCode} from 'react-icons/fa'
//import NFT from '../../assets/me.png'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className='about__me'>
            <div className="about__me-image"></div>
            
            <div className='about__content'>
              <div className="about__cards">
                <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>1 Year</small>
                </article>
                <article className='about__card'>
                  <FaLaptopCode className='about__icon'/>
                  <h5>Projects</h5>
                  <small>1 Year</small>
                </article>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia saepe pariatur minus aspernatur provident tempore incidunt facilis, necessitatibus iusto quas corporis, neque beatae maxime veniam ratione molestias, adipisci magni magnam.
              </p>
              <a href="#contact" className='btn btn-primary'>Let´s Talk</a>
            </div>
        
          </div>
        </div>
      </section>
  )
}

export default About