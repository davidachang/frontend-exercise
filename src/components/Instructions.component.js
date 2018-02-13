import React, { Component } from 'react'
// TODO: uncomment this for Part 1
import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Instructions extends Component {
  // const{
  //   shouldDisplayImage
  // } = this.props

  render() {
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        {this.props.shouldDisplayImage && (
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        )}
      </div>
    )
  }
}

Instructions.propTypes = {
  shouldDisplayImage: PropTypes.bool
}

export default Instructions

// import React, { Component } from 'react'
// // TODO: uncomment this for Part 1
// import PropTypes from 'prop-types'
// import './../styles/instructions.css'
//
// class Instructions extends Component {
//   function DisplayImage(props) {
//     var shouldDisplayImage = props.shouldDisplayImage;
//     if (shouldDisplayImage) {
//       return <img
//         className="instructions__logo"
//         src="https://uiuc.hack4impact.org/img/colored-logo.png"
//         alt="h4i logo"
//       />;
//     }
//   }
//
//   render() {
//     return (
//       <div className="instructions">
//         Follow the instructions on the README to get started!
//         <DisplayImage shouldDisplayImage = {true} />
//       </div>
//     )
//   }
// }
//
// Instructions.propTypes = {
//   shouldDisplayImage: PropTypes.bool
// };
//
// export default Instructions
