import React, { Component } from 'react'
import './../styles/instructions.css'

class Instructions extends Component {
  render() {
    let shouldDisplayImage = this.props.shouldDisplayImage
    let items = this.props.items
    items = items.filter(word => word.length >= 3)
    items = items.map(function(word, index) {
      if (index % 2 == 1) {
        return word.toUpperCase()
      } else {
        return word.toLowerCase()
      }
    })

    if (shouldDisplayImage) {
      return (
        <div className="instructions">
          Follow the instructions on the README to get started!
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
          <br />
          {items.map(item => (
            <ul>
              <li>{item}</li>
            </ul>
          ))}
        </div>
      )
    } else {
      return (
        <div className="instructions">
          Follow the instructions on the README to get started!
          <br />
          {items.map(item => (
            <ul>
              <li>{item}</li>
            </ul>
          ))}
        </div>
      )
    }
  }
}

export default Instructions
