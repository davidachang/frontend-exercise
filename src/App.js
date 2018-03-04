import React, { Component } from 'react'
import Counter from './components/Counter.components'
import InitialCountForm from './components/InitialCountForm.components'
import { Instructions } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { initialCount: 0 }
  }
  countCallback = newCount => {
    this.setState({
      initialCount: newCount
    })
  }
  render() {
    const count = this.state.initialCount
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <p>
          <Counter initialCount={count} />
          <InitialCountForm appCallback={this.countCallback} />
        </p>
        <Instructions
          shouldDisplayImage={true}
          items={['first', 'second', 'third', 'fourth', 'gg', 'asdf', '12']}
        />
      </div>
    )
  }
}

export default App
