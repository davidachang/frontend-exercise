import React, { Component } from 'react'
import { Instructions, Counter } from './components'
import './styles/app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions shouldDisplayImage={true} items={["abcd", "ab", "abc", "a", "abcde", "abcdef"]}/>
        <Counter />
      </div>
    )
  }
}

export default App
