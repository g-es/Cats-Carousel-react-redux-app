import React, { Component } from 'react'
import { connect } from 'react-redux'
import Home from './components/Home.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="wholeApp">
          <Home />
        </div>
      </div>
    )
  }
}

export default connect()(App)
