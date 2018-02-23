import React, { Component } from 'react'
// TODO: uncomment this for Part 1
import PropTypes from 'prop-types'
import './../styles/instructions.css'

class InitialCountForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    this.updateCounter = this.updateCounter.bind(this)
  }

  updateCounter(event) {
    this.props.updateCounter(event.target.initialCount.value)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form onSubmit={this.updateCounter}>
          <label>
            Initial Count:
            <input type="number" value={this.state.value} name="initialCount" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default InitialCountForm
