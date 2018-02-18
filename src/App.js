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
            { id: 'a', value: 'apple' },
            { id: 'b', value: 'banana' },
            { id: 'c', value: 'clementine' },
            { id: 'd', value: 'dragonfruit' },
            { id: 'e', value: 'eg' }
          ]}
        />
      </div>
    )
  }
}

export default App
