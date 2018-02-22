import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InitialCountForm extends Component {
  state = { submitted: false, valid: true }
  displayCounter = event => {
    event.preventDefault()
    let input = event.target[0].value
    if (isNaN(input)) {
      this.setState({ countSubmitted: true, invalidInput: true })
    } else {
      this.setState({
        countSubmitted: true,
        invalidInput: false,
        count: parseInt(input)
      })
    }
  }
  render() {
    return (
      <form onSubmit={this.props.handler}>
        <label>
          Input Initial Count:
          <input name="Initial Count: " type="number" />
        </label>
        <button type="submit">Submit</button>
        <br />
      </form>
    )
  }
}
export default InitialCountForm
