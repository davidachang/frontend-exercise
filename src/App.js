import React, { Component } from 'react'
import { Instructions, Counter } from './components'
import './styles/app.css'

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

  handleSubmit = event => {
    event.preventDefault()
    //alert(event.target[0].value);
    this.setState({ initialCount: parseInt(event.target[0].value) })
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayImage={this.state.shouldDisplayImage}
          list_items={this.items}
        />
        <form onSubmit={this.handleSubmit}>
          Enter initialCount: <input type="text" />
          <br />
          <button type="submit">Set initial count</button>
        </form>
        <Counter initialCount={this.state.initialCount} />
      </div>
    )
  }
}

export default App
