import React, { Component } from 'react'
import './../styles/instructions.css'

// TODO: uncomment this for Part 1
import PropTypes from 'prop-types'
//

//"https://uiuc.hack4impact.org/img/colored-logo.png"
class Instructions extends Component {
  render() {
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        <img
          className="instructions__logo"
          src={shouldDisplay(props)}
          alt="h4i logo"
        />
      </div>
    )
  }
}

Instructions.PropTypes = {
  shouldDisplayImage: PropTypes.bool
}

const props = {
  shouldDisplayImage: true
}

function shouldDisplay(props) {
  if (props.shouldDisplayImage) {
    return 'https://uiuc.hack4impact.org/img/colored-logo.png'
  }
  return ''
}

export default Instructions
