import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: this.props.initialCount }
  }

  render() {
    return <div>Count state: {this.state.count}</div>
  }
}

export default Counter
