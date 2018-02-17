import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import './styles/app.css'

class App extends Component {
  render() {
    var items = [
      { string: 'f1' },
      { string: 'second bullet' },
      { string: 'third bullet' },
      { string: 'fourth bullet' },
      { string: 'fifth bullet' }
    ]

    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayName={true}
          items={items.filter(item => item.string.length >= 3)}
        />
        <Counter />
      </div>
    )
  }
}

export default App
