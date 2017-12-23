import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Logo from './logo'

const Header = () => {
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
              <Logo />
            </Link>
          </div>
          <nav>
            <ul>
              <li><Link onClick={() => window.scrollTo(0,0)} to='/about'>about</Link></li>
              <li><Link onClick={() => window.scrollTo(0,0)} to='/projects'>projects</Link></li>
              <li><Link onClick={() => window.scrollTo(0,0)} to='/contact'>contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }

export default Header