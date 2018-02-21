import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  state = { count: this.props.count }

  handleIncrementClick = () => {
    const { count } = this.state
    const currentCount = count
    this.setState({ count: 1 + currentCount })
  }

  handleDecrementClick = () => {
    const { count } = this.state
    const currentCount = count
    this.setState({ count: currentCount - 1 })
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <button onClick={this.handleIncrementClick}> Increment </button>
        <label>{count}</label>
        <button onClick={this.handleDecrementClick}> Decrement </button>
      </div>
    )
  }
}

Counter.propTypes = {
  count: PropTypes.number
}

export default Counter
