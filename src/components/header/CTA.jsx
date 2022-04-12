import React from 'react'
import CV from '../../assets/CV.pdf'
function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download>Download my CV</a>
        <a href="contact">Let´s Talk</a>
    </div>
  )
}

export default CTA