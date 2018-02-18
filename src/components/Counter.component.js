import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Counter extends Component {
  state = { count: this.props.initialCount }
  handlePlusClick = () => {
    this.setState(state => {
      return { count: state.count + 1 }
    })
  }
  handleReset = () => {
    this.setState({ count: 0 })
  }
  handleMinusClick = () => {
    this.setState(state => {
      return { count: state.count - 1 }
    })
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.initialCount !== this.state.count) {
      this.setState(state => {
        return { count: nextProps.initialCount }
      })
    }
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
