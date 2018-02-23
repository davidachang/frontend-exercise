import React, { Component } from 'react'
// TODO: uncomment this for Part 1
// import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Counter extends Component {
  state = { count: this.props.count }
  componentWillReceiveProps(newProps) {
    this.setState({ count: newProps.count })
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 })
  }
  decrementCount = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    // var count = this.props.count

    return (
      <div>
        <button onClick={this.incrementCount}>Add</button>
        <button onClick={this.decrementCount}>Subtract</button>
        <p>{this.state.count}</p>
      </div>
    )
  }
}

export default Counter
