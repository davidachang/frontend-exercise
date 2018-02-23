import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import { InitialCountForm } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    this.updateCounter = this.updateCounter.bind(this)
  }

  updateCounter(newCount) {
    // Usually call setState with a callback function because setState operates asynchronously
    this.setState({ count: newCount })
  }

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

        <InitialCountForm
          updateCounter={this.updateCounter}
          val={this.state.val}
        />
        <Counter count={this.state.count} />
      </div>
    )
  }
}

export default App
