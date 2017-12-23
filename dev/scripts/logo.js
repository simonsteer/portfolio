import React from 'react'

export default class Logo extends React.Component {
  constructor() {
    super()
    this.state = {
      x: 0,
      y: 0
    }
  }
  onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
    this.style.transform = `translate(${this.state.x}, ${this.state.y})`
  }
  render() {
    return (
      <img
        className="header__logo"
        src="public/assets/images/logo.png"
        alt="Simon Steer logo"
      />
    )
  }
}