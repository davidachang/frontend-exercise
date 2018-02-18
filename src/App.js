import React, { Component } from 'react'
import { Instructions, Counter, InitialCountForm } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialCount: 10,
      message: ''
    }
  }

  onInputChange = e => {
    const input = e.target.value
    // when user delete all inputs
    if (input === '') {
      this.setState({
        initialCount: 0,
        message: ''
      })
    } else if (!isNaN(input)) {
      this.setState({
        initialCount: parseInt(input),
        message: ''
      })
    } else {
      this.setState({
        message: 'invalid input'
      })
    }
  }

  render() {
    const items = ['a', 'ab', 'abc', 'abcd', 'abcde']
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions shouldDisplayImage={true} items={items} />
        <InitialCountForm
          onChangeHandler={this.onInputChange}
          message={this.state.message}
        />
        <Counter init={this.state.initialCount} />
      </div>
    )
  }
}

export default App
