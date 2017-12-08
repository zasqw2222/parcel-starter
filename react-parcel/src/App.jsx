import React, { Component } from 'react'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      count: 0
    }
    this.plus = this.plus.bind(this)
    this.reduce = this.reduce.bind(this)
  }

  plus(e) {
    this.setState({
      count: this.state.count + 1
    });
  }
  reduce(e) {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className="layout">
        <h1>{this.state.count}</h1>
        <button  onClick={this.plus}>加 1</button>
        <button  onClick={this.reduce}>减 1</button>
      </div>
    )
  }
}

export default App