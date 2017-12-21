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

import { frickityInit } from './frickity'

frickityInit()

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route path={`/about`} component={About} />
        <Route path={`/contact`} component={Contact} />
        <Route path={`/projects`} component={Projects} />
        <Route path={`/:path`} component={Footer} />
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.querySelector('#root'));

// <Route path={`/projects`} component={<Projects />} />
// <Route path={`/contact`} component={<Contact />} />