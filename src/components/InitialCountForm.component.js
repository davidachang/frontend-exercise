import React, { Component } from 'react'
// TODO: uncomment this for Part 1
// import PropTypes from 'prop-types'
import './../styles/instructions.css'

class InitialCountForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input
          className="input-element"
          type="text"
          onChange={this.props.onChangeHandler}
        />
        <div className="input-element">{this.props.message}</div>
      </div>
    )
  }
}

export default InitialCountForm
