import React, { Component } from 'react'

import './../styles/instructions.css'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: this.props.initialCount }
  }

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
    if (nextProps.initialCount !== this.props.initialCount) {
      this.setState(state => {
        return { count: nextProps.initialCount }
      })
    }
  }

  render() {
    return (
      <div className="counter">
        <label>{this.state.count}</label>
        <button onClick={this.handlePlusClick}>+</button>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handleMinusClick}>-</button>
      </div>
    )
  }
}

export default Counter
