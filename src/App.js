import React, { Component } from 'react'
import { Instructions } from './components'
import './styles/app.css'

class App extends Component {
  render() {
    var items = [
      { id: '0', string: 'f1' },
      { id: '1', string: 'second bullet' },
      { id: '2', string: 'third bullet' }
    ]

    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayName={true}
          items={items.filter(item => item.string.length >= 3)}
        />
      </div>
    )
  }
}

export default App
