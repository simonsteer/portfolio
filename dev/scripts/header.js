import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    const headerClass = window.location.pathname === ('/')
    ? '' 
    : 'header__alt header__before';
    return (
      <header className={headerClass}>
        <div className="wrapper">
          <h2 className="header__title"><Link to='/'>Simon Steer</Link></h2>
          <h3 className="header__subtitle">web developer</h3>
          <div>
            <Link to='/'>
              <img className="header__logo" src="public/assets/images/logo.png" alt="Simon Steer logo" />
            </Link>
          </div>
          <nav>
            <ul>
              <li><Link to='/about'>about</Link></li>
              <li><Link to='/projects'>projects</Link></li>
              <li><Link to='/contact'>contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}