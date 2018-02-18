import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Counter extends Component {
  state = { count: 0 }
  handlePlusClick = () => {
    this.setState(state => {
      state.count++
      return { count: state.count }
    })
  }
  handleReset = () => {
    this.setState({ count: 0 })
  }
  handleMinusClick = () => {
    this.setState(state => {
      state.count--
      return { count: state.count }
    })
  }
  render() {
    return (
      <div classname="counter">
        <label>{this.state.count}</label>
        <button onClick={this.handlePlusClick}>+</button>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handleMinusClick}>-</button>
      </div>
    )
  }
}

export default Counter
