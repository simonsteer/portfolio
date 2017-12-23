import React from 'react'

const Footer = () => {
  const footerClass = window.location.pathname === ('/')
    ? 'fade-out'
    : '';
  return (
    <footer className={footerClass}>
      design &amp; development © Simon Steer 2017
    </footer>
  )
} 

export default Footer