import React, { Component } from 'react'
import { Instructions } from './components'
import './styles/app.css'

class App extends Component {
  render() {
    var items = ['hey', 'hi', 'hello', 'hola']
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions shouldDisplayImage={true} items={items} />
      </div>
    )
  }
}

export default App
