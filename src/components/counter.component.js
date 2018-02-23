import React, { Component } from 'react'
// TODO: uncomment this for Part 1
import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: this.props.count
    }
  }

  // InitialCountForm receives user input and passes props to App, which updates its shared variable and triggers this function
  componentWillReceiveProps(nextProps) {
    this.setState({ count: nextProps.count })
  }

  handleAdd = () => {
    this.setState({ count: parseInt(this.state.count) + 1 })
  }
  handleSub = () => {
    this.setState({ count: parseInt(this.state.count) - 1 })
  }

  render() {
    return (
      <div>
        <label>Count is: {this.state.count}</label>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleSub}>Subtract</button>
      </div>
    )
  }
}

export default Counter
