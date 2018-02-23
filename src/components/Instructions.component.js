import React, { Component } from 'react'
// TODO: uncomment this for Part 1
// import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Instructions extends Component {
  render() {
    const items = this.props.items
    let newItems = []
    for (let i = 0; i < items.length; i++) {
      if (items[i].length <= 3) {
        if (i % 2 == 0) {
          let temp = items[i].toUpperCase()
          newItems.push(temp + ' ')
        } else {
          newItems.push(items[i] + ' ')
        }
      }
    }
    if (this.props.shouldDisplayImage) {
      return (
        <div className="instructions">
          Follow the instructions on the README to get started!
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
          <ul>{newItems}</ul>
        </div>
      )
    } else {
      return (
        <div className="instructions">
          Follow the instructions on the README to get started!
          <ul>{newItems}</ul>
        </div>
      )
    }
  }
}

export default Instructions
