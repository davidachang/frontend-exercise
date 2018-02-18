import React, { Component } from 'react'
// TODO: uncomment this for Part 1
// import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.init
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      count: nextProps.init
    })
  }
  inc_count = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  dec_count = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div>
        {this.state.count}
        <div>
          <button onClick={this.inc_count}>increase</button>
          <button onClick={this.dec_count}>decrease</button>
        </div>
      </div>
    )
  }
}

export default Counter
