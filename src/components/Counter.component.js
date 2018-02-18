import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { 
        count: this.props.initialCount }
  }
  increment = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  }
  decrement = () => {
    this.setState(state => ({
      count: state.count - 1
    }))
  }
  render() {
    return (
      <div>
        <button onClick={this.decrement}>-</button>
        Count state: {this.state.count}
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

Counter.propTypes = {
  initialCount: PropTypes.number.isRequired
}

export default Counter
