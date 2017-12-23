import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition';

import Header from './header'
import About from './about'
import Contact from './contact'
import Projects from './projects'

import PageShell from './page-shell'

import { frickityInit } from './frickity'
import cube from './threejs'

frickityInit()
cube()

const App = () => {
    return (
      <div className="app">
        <Header />
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="animated-switch"
        >
          <Route path='/about' render={PageShell(About)} />
          <Route path='/contact' render={PageShell(Contact)} />
          <Route path='/projects' render={PageShell(Projects)} />
        </AnimatedSwitch>
      </div>
    )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.querySelector('#root'));