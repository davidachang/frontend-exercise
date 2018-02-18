import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import './styles/app.css'

class App extends Component {
  //idrk what the constructor does because im spoiled with java but whatever
  constructor(props) {
    super(props)
    this.state = { initialCount: '' }
    this.validate = this.validate.bind(this)
    this.update = this.update.bind(this)
  }
  validate(event) {
    if (isNaN(this.state.initialCount)) {
      alert(
        "Stop trying to fuck with me by putting in '" +
          this.state.initialCount +
          "'"
      )
    } else {
      this.setState(state => {
        count: state.initialCount
      })
    }
  }
  update(event) {
    this.setState({ initialCount: event.target.value })
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
        <Counter count={Number(this.state.initialCount)} />
        <form>
          <label>
            Set Counter:
            <input
              type="text"
              value={this.state.initialCount}
              onChange={this.update}
            />
          </label>
          <button type="button" onClick={this.validate}>
            Set
          </button>
        </form>
        <br />
      </div>
    )
  }
}

export default App
