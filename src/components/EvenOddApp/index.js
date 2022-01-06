import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          {count % 2 === 0 ? (
            <p className="count">Count is Even</p>
          ) : (
            <p className="count">Count is odd</p>
          )}
          <div className="button-container">
            <button className="button" type="button" onClick={this.onIncrement}>
              increment
            </button>
          </div>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
