import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import { InitialCountForm } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.onInputChange = this.onInputChange.bind(this)
    this.state = {
      initialCount: 10,
      message: ''
    }
  }

  onInputChange(e) {
    let input = e.target.value
    // when user delete all inputs
    if (input === '') {
      console.log('em')
      this.setState({
        initialCount: 0,
        message: ''
      })
    } else if (!isNaN(input)) {
      console.log(input)
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
    let items = ['a', 'ab', 'abc', 'abcd', 'abcde']
    console.log('enter')
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
