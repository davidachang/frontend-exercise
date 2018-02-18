import React, { Component } from 'react'
import { Instructions } from './components'
import './styles/app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions shouldDisplayImage={false} />
        <Instructions items={['Tree', 'Dog', 'Star']} />
      </div>
    )
  }
}

export default App
