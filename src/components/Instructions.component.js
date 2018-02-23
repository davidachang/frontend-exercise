import React, { Component } from 'react'
// TODO: uncomment this for Part 1
// import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Instructions extends Component {
  state = {
    shouldDisplayImage: true
  }

  static stringList = [
    { value: 'string1' },
    { value: 'askdfja' },
    { value: 'red' },
    { value: 'orange' },
    { value: 'yellow' },
    { value: 'green' },
    { value: 'blue' },
    { value: 'indigo' },
    { value: 'violet' }
  ]

  static lengthFormatted = Instructions.stringList.filter(function(stringItem) {
    return stringItem.value.length > 3
  })

  render() {
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        {this.state.shouldDisplayImage ? (
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        ) : null}
        <ul>
          {Instructions.lengthFormatted.map(
            (stringItem, index) =>
              index % 2 === 0 ? (
                <li key={index}>
                  {stringItem.value.charAt(0).toUpperCase() +
                    stringItem.value.slice(1)}
                </li>
              ) : (
                <li key={index}>{stringItem.value}</li>
              )
          )}
        </ul>
      </div>
    )
  }
}

export default Instructions
