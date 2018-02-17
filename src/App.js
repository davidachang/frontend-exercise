import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import './styles/app.css'
import PropTypes from 'prop-types'

class App extends Component {
  state = { initialCount: 0, shouldUpdate: false }

  handleSubmitClick = event => {
    this.setState({ initialCount: event.target.value })
  }

  handleChange = event => {
    event.preventDefault()
    this.setState({ shouldUpdate: true })
  }

  render() {
    var items = [
      { string: 'f1' },
      { string: 'second bullet' },
      { string: 'third bullet' },
      { string: 'fourth bullet' },
      { string: 'fifth bullet' }
    ]

    const { count } = this.state.initialCount

    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayName={true}
          items={items.filter(item => item.string.length >= 3)}
        />
        <input
          type="number"
          name="Initial Value: "
          value={this.state.initialCount}
          onChange={this.handleSubmitClick}
        />
        <button onClick={this.handleChange}> Submit </button>
        {this.state.shouldUpdate && <Counter count={this.state.initialCount} />}
      </div>
    )
  }
}

App.propTypes = {
  initialCount: PropTypes.number
}

export default App
