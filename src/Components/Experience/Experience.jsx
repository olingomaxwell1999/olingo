import React from 'react'
import './experience.scss'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>what skills i have</h5>
      <h2>my tools</h2>

      <div className="container experience-container">
        
        <div className="experience-frontend">
          <h3>frontend development</h3>

          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon'/>

              <div>
                <h4>html</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon'/>

              <div>
                <h4>css</h4>
                <small className="text-light">experienced</small>
              </div>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon'/>

              <div>
                <h4>sass</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon'/>

              <div>
                <h4>bootstrap</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon'/>

              <div>
                <h4>javascript</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon'/>

              <div>
                <h4>react js</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon'/>

              <div>
                <h4>tailwind css</h4>
                <small className="text-light">beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience-backend">
          <h3>backend development</h3>

          <div className="experience-content">
            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon'/>

              <div>
                <h4>node js</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon'/>

              <div>
                <h4>mongo db</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon'/>

              <div>
                <h4>firebase</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon'/>

              <div>
                <h4>git</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience-details">
              <BsPatchCheckFill className='experience-icon'/>

              <div>
                <h4>python</h4>
                <small className="text-light">beginner</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience