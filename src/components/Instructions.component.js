import React, { Component } from 'react'
// TODO: uncomment this for Part 1
// import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Instructions extends Component {
  render() {
    let items = this.props.items
    items = items
      .filter(item => item.length >= 3)
      .map((item, idx) => (idx % 2 === 0 ? item.toUpperCase() : item))
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        {this.props.shouldDisplayImage && (
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        )}
        <ul>{items.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
      </div>
    )
  }
}

export default Instructions
