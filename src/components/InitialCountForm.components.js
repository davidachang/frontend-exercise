import React, { Component } from 'react'

class InitialCountForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      newCount: 0
    }
  }
  handleSubmit(event) {
    this.setState({
      count: Number(this.state.newCount),
      newCount: this.state.newCount
    })
    this.props.appCallback(Number(this.state.newCount))
  }
  handleForm(event) {
    this.setState({
      count: Number(this.state.count),
      newCount: event.target.value
    })
  }
  render() {
    return (
      <div>
        <label>
          Set count state:
          <input
            type="text"
            placeholder="Set count state"
            onChange={this.handleForm.bind(this)}
          />
        </label>
        <button type="button" onClick={this.handleSubmit.bind(this)}>
          Submit this
        </button>
      </div>
    )
  }
}

export default InitialCountForm
