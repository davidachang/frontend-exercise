import React, { Component } from 'react'
import { Instructions, Counter } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { userInput: '', initialCount: 0 }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ userInput: event.target.value })
  }

  handleSubmit() {
    if (isNaN(this.state.userInput)) {
      alert("This wasn't a number, try again")
    } else {
      this.setState(state => {
        return { initialCount: +state.userInput }
      })
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>

        <Instructions
          shouldDisplayImage={true}
          items={['ra', 'dog', 'sh', 'doggo', 'cat', 'bo', 'elephant']}
        />

        <form onSubmit={this.handleSubmit}>
          <label>
            initialCount:
            <input value={this.state.userInput} onChange={this.handleChange} />
          </label>
          <button type="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>

        <Counter initialCount={this.state.initialCount} />
      </div>
    )
  }
}

export default App
