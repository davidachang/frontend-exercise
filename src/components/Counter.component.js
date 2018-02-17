import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  static PropTypes = {
    count: PropTypes.int
  }
  state = {count: this.props.count}
  increment = () => {
    this.setState({count: this.state.count + 1})
  }
  decrement = () => {
    this.setState({count: this.state.count - 1})
  }
  render(){
    return (
      <div className="counter">
        <label>{this.state.count}</label>
        <button onClick={this.increment} type="button">increment</button>
        <button onClick={this.decrement} type="button">decrement</button>
      </div>
    )
  }
}

export default Counter
