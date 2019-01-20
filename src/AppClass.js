import React, { Component } from 'react'

class App extends Component {
  state = {
    count: 0
  }

  incrementCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    const { count } = this.state
    return (
      <button style={{ color: 'red' }}>Clicked AppClass {count} times</button>
    )
  }
}

export default App
