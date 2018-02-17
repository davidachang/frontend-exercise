import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Instructions extends Component {
  static propTypes = {
    shouldDisplayImage: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.string),
  }
  render() {
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        {this.props.shouldDisplayImage ? (
          <img
          className="instructions__logo"
          src="https://uiuc.hack4impact.org/img/colored-logo.png"
          alt="h4i logo"
          />
        ) : (
          <div />
        )}
        <ul>
          {this.props.items.filter(function(item){
            return item.length >= 3
          }).map((item, index) => item.length < 3 ? (
            <div key={index}/>
          ) : index % 2 === 0 ? (
            <li key={index}>{item}</li>
          ) : (
            <li key={index}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Instructions
