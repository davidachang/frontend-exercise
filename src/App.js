import React, { Component } from 'react'
import { Instructions } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldDisplayImage: true
    }
  }
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions shouldDisplayImage={this.state.shouldDisplayImage} />
      </div>
    )
  }
}

export default App
