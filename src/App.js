import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import './styles/app.css'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.handleClickIncrement = () => {
      this.setState({ count: this.state.count + 1 })
    }
    this.handleClickDecrement = () => {
      this.setState({ count: this.state.count - 1 })
    }
  }
  render() {
    return (
      <div>
        <div>Count is: {this.state.count}</div>
        <button onClick={this.handleClickIncrement}>Increment</button>
        <button onClick={this.handleClickDecrement}>Decrement</button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldDisplayImage: true
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

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayImage={this.state.shouldDisplayImage}
          list_items={this.items}
        />
        <Counter />
      </div>
    )
  }
}

export default App
