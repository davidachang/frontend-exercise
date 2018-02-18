import React, { Component } from 'react'
import { Instructions, Counter } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialCount: 0
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ initialCount: e.target.value })
  }

  handleSubmit(e) {
    alert('You inputted: ' + this.state.initialCount)
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayImage={true}
          items={['first string', 'second string', 'aa', 'third string']}
        />
        <Counter count={this.state.initialCount} />
        <form onSubmit={this.handleSubmit}>
          <input type="number" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default App
