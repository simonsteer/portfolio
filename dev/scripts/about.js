import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import data from './data'

const About = () => {
    const { skillset, social } = data
    return (
      <section className="about">
        <div className="wrapper">
          <h1 className="section__h1">About</h1>
          <figure>
            <figcaption className="slide-from-left">
              <p className="slide-down">
                {data.about}
              </p>
              <h2 className="subheading">Skillset</h2>
              <ul className="skills">
                {skillset.map(skill => {
                  return (
                  <li key={skill}>
                    <img src={`public/assets/icons/${skill}.svg`}/>
                  </li>
                  )
                })}
              </ul>
              <h2 className="subheading">Find me on</h2>
              <ul className="skills">
                {Object.keys(social).map(platform => {
                  return (
                  <li key={platform}>
                    <a href={social[platform]} target="_blank">
                      <img src={`public/assets/icons/${platform}.svg`} />
                    </a>
                  </li>
                  )
                })}
              </ul>
            </figcaption>
            <img src="public/assets/images/portrait.jpg" alt="portrait photo of Simon Steer" className="slide-from-right" />
          </figure>
        </div>
      </section>
    )
  }

export default About