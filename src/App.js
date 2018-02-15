import React, { Component } from 'react'
import { Instructions } from './components'
import './styles/app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayName={true}
          items={[
            { string: 'first bullet' },
            { string: 'second bullet' },
            { string: 'third bullet' }
          ]}
        />
      </div>
    )
  }
}

export default App
