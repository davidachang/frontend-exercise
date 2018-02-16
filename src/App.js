import React, { Component } from 'react'
import { Instructions } from './components'
import './styles/app.css'

class App extends Component {
  render() {
    let items = ['a', 'ab', 'abc', 'abcd', 'abcde']
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions shouldDisplayImage={false} items={items} />
      </div>
    )
  }
}

export default App
