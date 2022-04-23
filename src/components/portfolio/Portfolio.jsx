import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.jpg'

/*dymaicke pridavanie projektov do portfolia*/
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Web App using React, .NET Core and Microsoft SQL **in progress**',
    github: 'https://github.com/RichardTuharsky'
  },
  {
    id: 2,
    image: IMG3,
    title: 'School project interactive map in JavaScript using Google API',
    github: 'https://github.com/RichardTuharsky/U-10--mapa'
  },
  {
    id: 3,
    image: IMG4,
    title: 'A simple tic tac toe project that Bill Gates also started with when he was learning to code',
    github: 'https://github.com/RichardTuharsky/tic-tac-toe'
  },
  {
    id: 4,
    image: IMG5,
    title: 'Also one of my first projects, a drawing app',
    github: 'https://github.com/RichardTuharsky/Drawing-app'
  },
] 

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github}) => {
            return ( 
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn'>Github</a>
              </div>
            </article>
            )
          })
        }
      </div>
      </section>
  )
}

export default Portfolio