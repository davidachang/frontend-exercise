import React, { Component } from 'react'
// TODO: uncomment this for Part 1
// import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Instructions extends Component {
  render() {
    const display = this.props.shouldDisplayImage
    const upperCase = true
    if (display) {
      return (
        <div className="instructions">
          Follow the instructions on the README to get started!
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
          {this.props.items.map(
            item =>
              item.value.length >= 3 ? (
                this.props.items.indexOf(item) % 2 == 1 ? (
                  <div key={item.id}>
                    <li>{item.value.toUpperCase()}</li>
                  </div>
                ) : (
                  <div key={item.id}>
                    <li>{item.value}</li>
                  </div>
                )
              ) : null
          )}
        </div>
      )
    }
    return null
  }
}

export default Instructions
