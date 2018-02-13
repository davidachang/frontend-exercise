import React, { Component } from 'react'
// TODO: uncomment this for Part 1
import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Instructions extends Component {
  render() {
    if (this.props.shouldDisplayImage) {
      return (
        <div className="instructions">
          Follow the instructions on the README to get started!
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        </div>
      )
    } else {
      return (
        <div className="instructions">
          Follow the instructions on the README to get started!
        </div>
      )
    }
  }
}

this.PropTypes = {
  shouldDisplayImage: PropTypes.boolean
}

export default Instructions
