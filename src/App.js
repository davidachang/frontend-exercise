import React, { Component } from 'react'
import { Instructions, InitialCountForm, Counter } from './components'
import './styles/app.css'

class App extends Component {
  state = { submitted: true, valid: true, count: 0 }
  displayCounter = event => {
    event.preventDefault()
    let input = event.target[0].value
    if (isNaN(input)) {
      this.setState({ countSubmitted: true, invalidInput: true })
    } else {
      this.setState({
        countSubmitted: true,
        invalidInput: false,
        count: parseInt(input)
      })
    }
  }
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayImage={true}
          items={['apple', 'banana', 'c']}
        />
        <InitialCountForm handler={this.displayCounter} />
        {this.state.countSubmitted ? (
          this.state.invalidInput ? (
            <h3>Please enter a number</h3>
          ) : (
            <Counter initialState={this.state.count} />
          )
        ) : (
          <div />
        )}
      </div>
    )
  }
}

export default App
