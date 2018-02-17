import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InitialCountForm extends Component {
  state = {countSubmitted: false, invalidInput: false}
  displayCounter = ev => {
    ev.preventDefault()
    var input = ev.target[0].value
    if (!isNaN(input)){
      this.setState({countSubmitted: true, invalidInput: false, count: parseInt(input)})
    } else {
      this.setState({countSubmitted: true, invalidInput: true})
    }
  }
  render(){
    return (
      <div>
        <form onSubmit={this.props.handler}>
          <label>
            Initial Count:
            <input type="text" name="count"/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default InitialCountForm
