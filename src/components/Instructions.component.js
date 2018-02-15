import React, { Component } from 'react'
// TODO: uncomment this for Part 1
import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Instructions extends Component {
  render() {
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        {this.props.shouldDisplayName && (
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        )}
        {this.props.items.map(item => <div> {item.string}</div>)}
      </div>
    )
  }
}

Instructions.propTypes = {
  shouldDisplayName: PropTypes.bool
}

export default Instructions
