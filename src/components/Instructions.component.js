import React, { Component } from 'react'
// TODO: uncomment this for Part 1
// import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Instructions extends Component {
  constructor(props) {
    super(props)
    this.displayImage = this.props.shouldDisplayImage
    this.list_items = this.props.list_items
  }

  render() {
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        {this.displayImage && (
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        )}
        <ul className="pokemon-list">
          {this.list_items
            .filter(item => item.length >= 3)
            .map(
              (item, i) =>
                i % 2 === 0 ? (
                  <li key={i}>{item}</li>
                ) : (
                  <li key={i}>{item.toUpperCase()}</li>
                )
            )}
        </ul>
      </div>
    )
  }
}

export default Instructions
