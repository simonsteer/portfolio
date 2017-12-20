import React from 'react'
import data from './data'

export default class Projects extends React.Component {
  render() {
    const { projects } = data
    const devices = ['macbook', 'ipad', 'iphone']
    return (
      <section className="projects">
        <div className="wrapper">
          <h1 className="section__h1">Projects</h1>
          {Object.keys(projects).map(project => {
            return (
              <figure className="fade-in">
                <figcaption>
                  <h2 className="projects__heading">{project}</h2>
                  <p>{projects[project].description}</p>
                  <h2 className="subheading">Technologies Used</h2>
                  <ul className="skills">
                    {projects[project].technologies.map(skill => {
                      return (
                        <li>
                          <img src={`public/assets/icons/${skill}.svg`} />
                        </li>
                      )
                    })}
                  </ul>
                </figcaption>
                <div className="projects__project-images carousel">
                    {devices.map(device => {
                    return <img src={`public/assets/images/projects/${project}/${project}-${device}.gif`} />
                    })}
                </div>
              </figure>
            )
          })}
        </div>
      </section>
    )
  }
}