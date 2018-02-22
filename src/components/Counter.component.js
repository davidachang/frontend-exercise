import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  state = { count: this.props.initialState }
  handleUp = () => {
    this.setState({ count: this.state.count + 1 })
  }
  handleDown = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    const { count } = this.state
    return (
      <div>
        Count:
        <data> {count} </data>
        <button onClick={this.handleUp}> Increment </button>
        <button onClick={this.handleDown}> Decrement </button>
      </div>
    )
  }
}

export default Counter
