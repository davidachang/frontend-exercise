import React, { Component } from 'react'
import { Instructions, Counter } from './components'
import './styles/app.css'

class InitialCountForm extends Component {
  constructor(props) {
    super(props)
    this.state = { initialCount: 0 }
  }
  handleSubmit = event => {
    event.preventDefault()
    //alert(event.target[0].value);
    this.setState({ initialCount: parseInt(event.target[0].value) })
    var newInitialCount = parseInt(event.target[0].value)
    this.props.collectInitialCount(newInitialCount)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Enter initialCount: <input type="text" />
        <br />
        <button type="submit">Set initial count</button>
      </form>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldDisplayImage: true,
      initialCount: 0
    }
    this.items = [
      'sceptile',
      'swampert',
      'wailord',
      'gardevoir',
      'pikachu',
      'latios',
      'ed',
      's'
    ]
  }

  handleCount = newCount => {
    this.setState({ initialCount: newCount })
  }
  // handleSubmit = event => {
  //   event.preventDefault()
  //   //alert(event.target[0].value);
  //   this.setState({ initialCount: parseInt(event.target[0].value) })
  // }

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayImage={this.state.shouldDisplayImage}
          list_items={this.items}
        />
        <InitialCountForm collectInitialCount={this.handleCount} />
        <Counter initialCount={this.state.initialCount} />
      </div>
    )
  }
}

export default App
