import React from 'react'
import ReactDOM from 'react-dom'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from './header'
import About from './about'
import Contact from './contact'
import Projects from './projects'
import Footer from './footer'

import PageShell from './page-shell'

import { frickityInit } from './frickity'
import cube from './threejs'

frickityInit()
cube()

class App extends React.Component {
  render() {
    return (
      <div>
        <Header key='header' />
        <Route path='/about' component={PageShell(About)} />
        <Route path='/contact' component={PageShell(Contact)} />
        <Route path='/projects' component={PageShell(Projects)} />
        <Route path='/:path' component={PageShell(Footer)} />
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.querySelector('#root'));