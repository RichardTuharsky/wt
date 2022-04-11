import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from  './components/footer/footer'
import Experience from './components/experience/Experience'

 const app = () => {
  return (
    <>
       <Header />
       <Nav/>
       <About/>
       <Experience/>
       <Portfolio/>
       <Testimonials/>
       <Contact/>
       <Footer/>
    </>
  )
}

export default app