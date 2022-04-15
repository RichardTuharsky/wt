import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My experience</h2>
      <div className='container experience__container'>
        <h3>Frontend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill/>
            <h4>HTML</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill/>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill/>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill/>
            <h4>React</h4>
            <small className='text-light'>Beginner</small>
          </article>
        </div>
      </div>
      <div className='experience__backend'>

      </div>
      </section>
  )
}

export default Experience