import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import './styles/app.css'

class App extends Component {
  countInput(event) {
    this.initialCount = event.target.value
  }
  render() {
    return (
      <div>
        <label>
          Set count state:
          <input
          type='text'
          placeholder="set initial counter"
          onChange={this.handleForm.bind(this)}
          />
          </label>
          <button type="button" onClick={this.countInput.bind(this)}>
        <h1> Hello World! </h1>
        <Instructions
          shouldDisplayImage={true}
          list={['hello', 'my', 'name', 'is', 'shreyas']}
        />
        <Counter initialCount={0} />
      </div>
    )
  }
}

export default App
