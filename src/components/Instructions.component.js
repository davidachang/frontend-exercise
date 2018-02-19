import React, { Component } from 'react'
// TODO: uncomment this for Part 1
// import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Instructions extends Component {
  render() {
    var myitems = this.props.items.filter(function(item) {
      return item.length > 2
    })

    myitems = myitems.map(function(item) {
      if (myitems.indexOf(item) % 2 === 0)
        return item.charAt(0).toUpperCase() + item.slice(1)
      else return item
    })

    var listitems = myitems.map(x => <li>{x}</li>)

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
        <ul>{listitems}</ul>
      </div>
    )
  }
}

export default Instructions
