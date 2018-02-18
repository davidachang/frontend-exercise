import React, { Component } from 'react'
// TODO: uncomment this for Part 1
// import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Counter extends Component {
  render() {
    var count = this.props.count
    var incrementCount = function() {
      count++
      console.log(count)
    }
    var decrementCount = function() {
      count--
      console.log(count)
    }
    return (
      <div>
        <button onClick={incrementCount}>Add</button>
        <button onClick={decrementCount}>Subtract</button>
        <p>{count}</p>
      </div>
    )
  }
}

export default Counter
