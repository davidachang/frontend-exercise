import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InitialCountForm extends Component {
  state = { initialCount: 0, shouldUpdate: false }

  handleSubmitClick = event => {
    this.setState({ initialCount: event.target.value })
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({ shouldUpdate: true })
    this.props.callbackFromParent(
      this.state.initialCount,
      this.state.shouldUpdate
    )
  }

  render() {
    return (
      <div>
        <input
          type="number"
          name="Initial Value: "
          value={this.state.initialCount}
          onChange={this.handleSubmitClick}
        />
        <button onClick={this.handleChange}> Submit </button>
      </div>
    )
  }
}

export default InitialCountForm
