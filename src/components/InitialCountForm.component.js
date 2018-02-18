import React, { Component } from 'react'
// TODO: uncomment this for Part 1
// import PropTypes from 'prop-types'
import './../styles/instructions.css'

class InitialCountForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Initial Count:
          <input
            type="text"
            value={this.props.state.value}
            onChange={this.props.onChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default InitialCountForm
