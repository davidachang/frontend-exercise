import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  static propTypes = {
    initialCount: PropTypes.number.isRequired
  }
  constructor(props) {
    super(props)
    this.state = { count: this.props.initialCount }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      count: nextProps.initialCount
    })
  }
  incClick = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  }
  decClick = () => {
    this.setState(state => ({
      count: state.count - 1
    }))
  }
  render() {
    return (
      <div>
        Count state: {this.state.count}
        <button onClick={this.decClick}>Decrease</button>
        <button onClick={this.incClick}>Increase</button>
      </div>
    )
  }
}

export default Counter
