import React, { Component } from 'react'

import './../styles/instructions.css'

class InitialCountForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: this.props.userInput,
      initialCount: this.props.initialCount
    }
  }

  handleChange = event => {
    this.setState({ userInput: event.target.value })
  }

  handleSubmit = () => {
    if (isNaN(this.state.userInput)) {
      alert("This wasn't a number, try again")
    } else {
      this.setState(state => {
        return { initialCount: this.state.userInput }
      })
      this.props.callBack(this.state.userInput)
    }
  }

  render() {
    return (
      <div className="InitialCountForm">
        <form>
          <label>
            initialCount:
            <input value={this.state.userInput} onChange={this.handleChange} />
          </label>
          <button type="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default InitialCountForm
