import React, { Component } from 'react'
import { Instructions } from './components'
// import Counter from './components'
import './styles/app.css'

class Counter extends Component {
  state = { count: 0 }
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

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayImage={true}
          items={['apple', 'banana', 'c']}
        />
        <Counter />
      </div>
    )
  }
}

export default App
