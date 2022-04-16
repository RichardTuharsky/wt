import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BiPhoneCall} from 'react-icons/bi'


function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tuharsky.richard@gmail.com</h5>
            {/* Treba fix*/}
            <a href="mailto:tuharsky.richard@gmail.com" target= "_blank">Send me a message</a> 
          </article>
          <article className='contact__option'>
            <BiPhoneCall className='contact__option-icon'/>
            <h4>Call Me</h4>
            <h5>+421 915 620 067</h5>
            <a href="">Mon-Fri anytime</a>
          </article>
          </div>
          <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
  )
}

export default Contact