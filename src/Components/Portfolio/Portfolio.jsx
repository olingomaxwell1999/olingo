import React from 'react'
import './portfolio.scss'
import dictionary from '../../assets/dictionary.png'
import dashboard from '../../assets/dashboard.jpeg'
import todo from '../../assets/todo.jpeg'

const data = [
  {
    id:1,
    image: dictionary,
    title:'react dictionary app',
    github:'https://https://github.com/olingomaxwell1999/dictionarry-app',
    demo:'https://max-dictionary-app.netlify.app'
  },
  {
    id:2,
    image: dashboard,
    title:'react dashboard app',
    github:'https://github.com/olingomaxwell1999/admin-dashboard',
    demo:'https://react-dashboard-complete.netlify.app/'
  },
  {
    id:3,
    image: todo,
    title:'todo list app',
    github:'https://https://github.com/olingomaxwell1999/drag-and-drop-react',
    demo:'https://draggable-todo-list-app.netlify.app'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>projects</h5>
      <h2>my recent projects</h2>

      <div className="container portfolio-container">
        {
          data.map(({id,image,title,github,demo}) => {
            return(
              <article key={id} className="portfolio-item">
                <div className="portfolio-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                  <a href={github} rel='noreferrer' className='btn' target='_blank'>github</a>
                  <a href={demo} rel='noreferrer' target='_blank' className="btn-primary btn">live demo</a>
                </div>
              </article>
            )
          }
        )}
      </div>
    </section>
  )
}

export default Portfolio