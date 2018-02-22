import React, { Component } from 'react'
import { Instructions, Counter, InitialCountForm } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { userInput: '', initialCount: 0 }
  }

  handleChildClick = childCount => {
    this.setState(state => {
      return { initialCount: childCount }
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>

        <Instructions
          shouldDisplayImage={true}
          items={['ra', 'dog', 'sh', 'doggo', 'cat', 'bo', 'elephant']}
        />

        <InitialCountForm
          callBack={this.handleChildClick}
          initialCount={this.state.initialCount}
          userInput={this.state.userInput}
        />

        <Counter initialCount={this.state.initialCount} />
      </div>
    )
  }
}

export default App
