import React, { Component } from 'react'
// TODO: uncomment this for Part 1
import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Instructions extends Component {
  render() {
    const display = this.props.shouldDisplayImage
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        {display && (
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        )}
        {this.props.items.map(item => (
          <div key={item.id}>
            {item.value.length >= 3 && (
              <li>
                {this.props.items.indexOf(item) % 2 == 1
                  ? item.value.toUpperCase()
                  : item.value}
              </li>
            )}
          </div>
        ))}
      </div>
    )
  }
}

export default Instructions
