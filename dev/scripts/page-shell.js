import React from 'react'
import Footer from './footer'

const PageShell = Page => {
  return props =>
  <div>
    <Page />
    <Footer />
  </div>
}

export default PageShell