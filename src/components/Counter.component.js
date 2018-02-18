import React, { Component } from 'react'
import './../styles/instructions.css'

class Counter extends Component {
  state = { count: 0 }
  //also confused about this
  componentWillReceiveProps(newProps) {
    this.setState({ count: newProps.count })
  }
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
