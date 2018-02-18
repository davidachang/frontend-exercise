import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import { InitialCounterForm } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { initialC: '' }
  }
  passBack = passVal => {
    this.setState({ initialC: passVal })
  }
  render() {
    return (
      <div className="app">
        <h1>Hello H4I!</h1>
        <Instructions
          shouldDisplayImage={true}
          items={['This', 'is', 'for', 'pt', 'TWO']}
        />
        <br />
        <Counter count={Number(this.state.initialC)} />
        <InitialCounterForm passBack={this.passBack} />
      </div>
    )
  }
}

export default App
