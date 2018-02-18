import React, { Component } from 'react'
// TODO: uncomment this for Part 1
// import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: this.props.initialCount }
  }
  handleClickIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }
  handleClickDecrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ count: nextProps.initialCount })
  }
  render() {
    return (
      <div>
        <div>Count is: {this.state.count}</div>
        <button onClick={this.handleClickIncrement}>Increment</button>
        <button onClick={this.handleClickDecrement}>Decrement</button>
      </div>
    )
  }
}

export default Counter
