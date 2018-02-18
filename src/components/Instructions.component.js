import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Instructions extends Component {
  render() {
    return (
      <div className="instructions">
        Follow the instructions on the README to get started
        {this.props.shouldDisplayImage && (
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        )}
        <ul>
          {this.props.list
            .map(item => item.toUpperCase())
            .filter(item => item.length < 3)
            .map(item => <li>{item}</li>)}
        </ul>
      </div>
    )
  }
}

Instructions.propTypes = {
  shouldDisplayImage: PropTypes.bool
}

export default Instructions
