import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import { InitialCountForm } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '', init: '' }

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
    } else {
      this.setState({ init: this.state.value })
    }
    event.preventDefault()
  }

  render() {
    var items = ['hey', 'hi', 'hello', 'hola']
    var initialCount = this.state.init

    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions shouldDisplayImage={true} items={items} />

        <InitialCountForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          state={this.state}
        />

        <Counter count={this.state.init} />
      </div>
    )
  }
}

export default App
