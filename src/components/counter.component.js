import React, { Component } from 'react'
// TODO: uncomment this for Part 1
import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Counter extends Component {
  state = { count: 0 }
  handleAdd = () => {
    this.setState({ count: this.state.count + 1 })
  }
  handleSub = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <label>{count}</label>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleSub}>Subtract</button>
      </div>
    )
    // const display = this.props.shouldDisplayImage
    // const upperCase = true
    // if (display) {
    //   return (
    //     <div className="instructions">
    //       Follow the instructions on the README to get started!
    //       <img
    //         className="instructions__logo"
    //         src="https://uiuc.hack4impact.org/img/colored-logo.png"
    //         alt="h4i logo"
    //       />
    //       {this.props.items.map(
    //         item =>
    //           item.value.length >= 3 ?
    //             <div key={item.id}>
    //               <li>{this.props.items.indexOf(item) % 2 == 1 ? item.value.toUpperCase() : item.value}</li>
    //             </div>
    //             : null
    //       )}
    //     </div>
    //   )
    // }
    // return null
  }
}

export default Counter
