import React, { Component } from 'react'
import './../styles/instructions.css'
import App from './../App'

class InitialCounterForm extends Component {
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
      this.props.passBack(this.state.initialCount)
    }
  }
  update(event) {
    this.setState({ initialCount: event.target.value })
  }
  render() {
    return (
      <div className="counter">
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
      </div>
    )
  }
}

export default InitialCounterForm
