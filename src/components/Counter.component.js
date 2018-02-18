import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.count
    }

    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 })
  }

  handleDecrement() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return (
      <div>
        <label>{this.state.count}</label>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}

Counter.propTypes = {
  count: PropTypes.number
}

export default Counter
