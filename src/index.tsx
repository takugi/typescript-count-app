import * as React from 'react'
import * as ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import CountApp from './countApp'

ReactDOM.render(
  <Provider store={store}>
    <CountApp />
  </Provider>
  , document.getElementById('root')
)
