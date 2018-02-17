import React, { Component } from 'react'
import { Instructions } from './components'
import './styles/app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayImage={true}
          items={[
            { id: '0', value: 'apple' },
            { id: '1', value: 'by' },
            { id: '2', value: 'car' },
            { id: '3', value: 'dogs' }
          ]}
        />
      </div>
    )
  }
}

export default App
