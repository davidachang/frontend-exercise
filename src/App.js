import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import { InitialCountForm } from './components'
import './styles/app.css'
import PropTypes from 'prop-types'

class App extends Component {
  state = { initialCount: 0, shouldUpdate: false }

  myCallback = (initialCount, shouldUpdate) => {
    this.setState({ initialCount: initialCount, shouldUpdate: shouldUpdate })
  }

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
        <InitialCountForm callbackFromParent={this.myCallback} />
        {this.state.shouldUpdate && <Counter count={this.state.initialCount} />}
      </div>
    )
  }
}

App.propTypes = {
  initialCount: PropTypes.number
}

export default App
