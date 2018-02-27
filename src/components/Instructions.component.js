import React, { Component } from 'react'
import './../styles/instructions.css'

// TODO: uncomment this for Part 1
import PropTypes from 'prop-types'
// module.exports = Instructions

class Instructions extends Component {
  constructor(props) {
    super()
    this.state = {
      inputValue: 0,
      counter: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onClick(e) {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  onSecClick(e) {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value })
  }

  handleSubmit(event) {
    this.setState({
      counter: parseInt(this.state.inputValue)
    })
    console.log(this.state.inputValue)
  }

  render() {
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        <img
          className="instructions__logo"
          src={shouldDisplay(props)}
          alt="h4i logo"
        />
        {/*PART II*/}
        {/* List before capitalization and filtering */}
        {allItems.map((item, index) => <li key={item.id}>{item.value} </li>)}
        {/*idk why this wont filter all items  < 3 */}
        {result.map((item, index) => <li key={item.id}>{item.value} </li>)}
        <p />
        {/*List after capitalization */}
        {allItems.map((item, index) => (
          <li key={item.id}>{jsUcfirst(item.value)} </li>
        ))}
        {/*PART II*/}
        {/*PART III*/}
        <div>
          <h1>{this.state.counter}</h1>
          <button onClick={this.onClick.bind(this)}> Incrementer </button>
          <button onClick={this.onSecClick.bind(this)}> Decrementor </button>
        </div>
        {/*PART III*/}
        {/*PART IV*/}
        <input value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}> submit </button>
        {/*PART IV*/}
      </div>
    )
  }
}

/* PART I*/
Instructions.propTypes = {
  shouldDisplayImage: PropTypes.bool
}

const props = {
  shouldDisplayImage: true,
  counter: 0
}

function shouldDisplay(props) {
  if (props.shouldDisplayImage) {
    return 'https://uiuc.hack4impact.org/img/colored-logo.png'
  }
  return ''
}
/* PART I*/

/*PART II*/

const allItems = [
  { id: 'chicken', value: 'chicken nuggets' },
  { id: 'shrek', value: 'gurl u shrexy' },
  { id: 'leave', value: 'gg' },
  { id: 'no', value: 'ay' },
  { id: 'croissant', value: 'are you gonna finish that croissant' },
  {
    id: 'memeless',
    value: 'I cant believe you guys dont even care about memes'
  }
]
const result = allItems.filter(item => item.length < 3)

//capitalization function
function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
/*PART II*/

export default Instructions
