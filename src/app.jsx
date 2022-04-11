import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from  './components/footer/Footer'
import Experience from './components/experience/Experience'

const App = () => (
  <div className="app">
    <Nav/>
    <Header />
    <About />
    <Testimonial/>
    <Footer />
  </div>
);

export default App