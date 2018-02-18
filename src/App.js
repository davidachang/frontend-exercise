import React, { Component } from 'react'
import { Instructions } from './components'
import './styles/app.css'

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
      </div>
    )
  }
}

export default App
