import React, { Component } from 'react'
import { Instructions } from './components'
// import Counter from './components'
import './styles/app.css'

class Counter extends Component {
  state = { count: this.props.initialState }
  handleUp = () => {
    this.setState({ count: this.state.count + 1 })
  }
  handleDown = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    const { count } = this.state
    return (
      <div>
        Count:
        <data> {count} </data>
        <button onClick={this.handleUp}> Increment </button>
        <button onClick={this.handleDown}> Decrement </button>
      </div>
    )
  }
}

class InitialInput extends Component {
  state = { submitted: false, valid: true }
  displayCounter = event => {
    event.preventDefault()
    let input = event.target[0].value
    if (isNaN(input)) {
      this.setState({ countSubmitted: true, invalidInput: true })
    } else {
      this.setState({
        countSubmitted: true,
        invalidInput: false,
        count: parseInt(input)
      })
    }
  }
  render() {
    return (
      <form onSubmit={this.props.handler}>
        <label>
          Input Initial Count:
          <input name="Initial Count: " type="number" />
        </label>
        <button type="submit">Submit</button>
        <br />
      </form>
    )
  }
}

class App extends Component {
  state = { submitted: true, valid: true, count: 0 }
  displayCounter = event => {
    event.preventDefault()
    let input = event.target[0].value
    if (isNaN(input)) {
      this.setState({ countSubmitted: true, invalidInput: true })
    } else {
      this.setState({
        countSubmitted: true,
        invalidInput: false,
        count: parseInt(input)
      })
    }
  }
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayImage={true}
          items={['apple', 'banana', 'c']}
        />
        <InitialInput handler={this.displayCounter} />
        {this.state.countSubmitted ? (
          this.state.invalidInput ? (
            <h3>Please enter a number</h3>
          ) : (
            <Counter initialState={this.state.count} />
          )
        ) : (
          <div />
        )}
      </div>
    )
  }
}

export default App
