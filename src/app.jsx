import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'

const App = () => (
  <div className="app">
    <Nav />
    <Header />
    <About/>
    <Experience/>
    <Portfolio/>
    <Contact/>
  </div>
);


export default App