// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {input: ''}

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {input} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="letters-count-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label htmlFor="inputPhrase" className="sentence">
                Enter the phrase
              </label>
              <input
                id="inputPhrase"
                type="text"
                className="input-text"
                placeholder="Enter the phrase"
                onChange={this.onChangeInput}
                value={input}
              />
            </div>
          </div>
          <div className="button-container">
            <p className="button">No.of letters: {input.length}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
