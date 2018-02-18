import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './../styles/instructions.css'

class inputForm extends Component {
    constructor() {
        super(props)
        this.state = {
            count: this.props.initialCount
        }
    }
    render() {
        return (
        <div>
        <label>
          Set count state:
          <input
          type='text'
          placeholder="set initial counter"
          onChange={this.handleForm.bind(this)}
          />
          </label>
          <button type="button" onClick={this.countInput.bind(this)}>
        </div>
        )
    }
}