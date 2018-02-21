import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './../styles/instructions.css'

function moreThan3(str) {
  return str.length > 3
}
class Instructions extends Component {
  render() {
    const ListItems = this.props.items
      .filter(moreThan3)
      .map(item => <li>{item.toUpperCase()}</li>)
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
        <ul>{ListItems}</ul>
      </div>
    )
  }
}

export default Instructions
