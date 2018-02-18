import React, { Component } from 'react'
// TODO: uncomment this for Part 1
// import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Counter extends Component {
  //this stuff before render
  state = { count: 0 }
  inc = () => {
    this.setState({ count: this.state.count + 1 })
  }
  dec = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    return (
      <div className="counter">
        Count: {this.state.count}
        <div>
          <p>
            <button onClick={this.inc}>Increment</button>
          </p>
          <p>
            <button onClick={this.dec}>Decrement</button>
          </p>
        </div>
      </div>
    )
  }
}

export default Counter
