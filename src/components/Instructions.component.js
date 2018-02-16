import React, { Component } from 'react'
// TODO: uncomment this for Part 1
import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Instructions extends Component {
  render() {
    let shouldDisplayImage = this.props.shouldDisplayImage
    //let to declare variable
    //this.props to access (sim instance fields)

    if (shouldDisplayImage) {
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

export default Instructions
