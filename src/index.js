import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './configureStore'

class Root extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false }))
    }
  }

  render () {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))
