import React from 'react'
import data from './data'
import { frickity } from './frickity'

export default class Projects extends React.Component {
  componentDidMount() {
    frickity()
  }
  render() {
    const { projects } = data
    const devices = ['macbook', 'ipad', 'iphone']
    frickity()
    return (
      <section className="projects">
        <div className="wrapper">
          <h1 className="section__h1">Projects</h1>
          {Object.keys(projects).map(project => {
            return (
              <figure className="fade-in" key={project}>
                <figcaption>
                  <h2 className="projects__heading">{project}</h2>
                  <p>{projects[project].description}</p>
                  <a href={projects[project].url} className="projects__project-url" target="_blank">view live</a>
                  <h2 className="subheading">Technologies Used</h2>
                  <ul className="skills">
                    {projects[project].technologies.map(skill => {
                      return (
                        <li key={`${project}-${skill}`}>
                          <img src={`public/assets/icons/${skill}.svg`} />
                        </li>
                      )
                    })}
                  </ul>
                </figcaption>
                <div className="projects__project-images carousel">
                    {devices.map(device => {
                    return <img src={`public/assets/images/projects/${project}/${project}-${device}.gif`} key={`${project}-${device}`} />
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