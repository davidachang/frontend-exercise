import React, { Component } from 'react'
// TODO: uncomment this for Part 1
import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Instructions extends Component {
  render() {
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
        {this.props.items
          .filter(item => item.length > 3)
          .map((item, index) => (index % 2 === 1 ? item : item.toUpperCase()))
          .map(item => <div key={item.id}> {item.value}</div>)}
      </div>
    )
  }
}

Instructions.propTypes = {
  shouldDisplayImage: PropTypes.bool
}

export default Instructions
