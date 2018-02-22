import React, { Component } from 'react'

import './../styles/instructions.css'

class Instructions extends Component {
  render() {
    const items = this.props.items.filter(str => str.length > 2)
    const listItems = items.map((str, index) => (
      <li key={str}>{index % 2 ? str.toUpperCase() : str}</li>
    ))
    return (
      <div className="instructions">
        {this.props.shouldDisplayImage && (
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        )}
        <ul>{listItems}</ul>
      </div>
    )
  }
}

export default Instructions
