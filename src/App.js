import React, { Component } from 'react'
import { Instructions, Counter } from './components'
import './styles/app.css'

class App extends Component {
  state = {countSubmitted: false, invalidInput: false}
  displayCounter = ev => {
    ev.preventDefault()
    var input = ev.target[0].value
    if (!isNaN(input)){
      this.setState({countSubmitted: true, invalidInput: false, count: parseInt(input)})
    } else {
      this.setState({countSubmitted: true, invalidInput: true})
    }
  }
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions shouldDisplayImage={true} items={["abcd", "ab", "abc", "a", "abcde", "abcdef"]}/>
        <form onSubmit={this.displayCounter}>
          <label>
            Initial Count:
            <input type="text" name="count"/>
          </label>
          <button type="submit">Submit</button>
        </form>
        {this.state.countSubmitted ? (this.state.invalidInput ?
          (<h3>Please enter a number</h3>) : (<Counter count={this.state.count}/>)) :
          (<div />)
        }
      </div>
    )
  }
}

export default App
