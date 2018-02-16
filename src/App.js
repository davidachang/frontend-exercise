import React, { Component } from 'react'
import { Instructions } from './components'
import './styles/app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Hello H4I!</h1>
        <Instructions shouldDisplayImage={false} />
      </div>
      //bool values are JS so need {}, pass in props sim constructor but specify
      //avoid stuff in <div> - HTML-like stuff
    )
  }
}

export default App
