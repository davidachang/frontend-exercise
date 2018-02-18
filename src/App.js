import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    console.log('initial count: ' + this.state.value)
    if (isNaN(this.state.value)) {
      alert('Input must be a number')
      this.setState({ value: '' })
    }
    event.preventDefault()
  }

  render() {
    var items = ['hey', 'hi', 'hello', 'hola']
    var initialCount = this.state.value

    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions shouldDisplayImage={true} items={items} />

        <form onSubmit={this.handleSubmit}>
          <label>
            Initial Count:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <Counter count={initialCount} />
      </div>
    )
  }
}

export default App
