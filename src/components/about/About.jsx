import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FaLaptopCode} from 'react-icons/fa'
//import NFT from '../../assets/me.png'

const About = () => {
  return (
    <section id='about'>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className='about__me'>
            <div className="about__me-image"></div>
            
            <div className='about__content'>
              <div className="about__cards">
                <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>8 months</small>
                </article>
                <article className='about__card'>
                  <FaLaptopCode className='about__icon'/>
                  <h5>Projects</h5>
                  <small>8+</small>
                </article>
              </div>
              <p className='about__text'>
              Hello, my name is Richard, I'm glad you came to my personal portfolio page. For the last 8 months I have been working at IBM as a software tester, I work here in an agile international team where we work on mobile and web applications for an oil conglomerate as our client, at the same time I am studying computer sciences and I also create projects as a demonstration of my mastery of the mentioned technologies and the primary goal is to make progress in software development, more information you can find in my resume which can be downloaded directly here.
              </p>
            </div>
        
          </div>
        </div>
      </section>
  )
}

export default About