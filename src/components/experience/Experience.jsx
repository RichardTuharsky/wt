import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>I use these technologies most often </h2>
      {/*frontend*/}
    <div className='container experience__container'>
        <div className='experience__frontend'>
        <h3>Frontend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__icon'/>
            <h4>HTML</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__icon'/>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__icon'/>
            <h4>JavaScript</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__icon'/>
            <h4>React</h4>
            <small className='text-light'>Beginner</small>
          </article>
        </div>
        </div>
     
        {/*koniec frontendu*/}

        {/*backend*/}
      <div className='experience__backend'>
      <h3>Backend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__icon'/>
            <h4>Node JS</h4>
            <small className='text-light'>Beginner</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__icon'/>
            <h4>C++</h4>
            <small className='text-light'>Beginner</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__icon'/>
            <h4>C</h4>
            <small className='text-light'>Beginner</small>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__icon'/>
            <h4>MySQL</h4>
            <small className='text-light'>Beginner</small>
          </article>
        </div>
      </div>
    </div>
      </section>
  )
}

export default Experience