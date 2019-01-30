// @flow

import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

const renderApp = Component => render(
  <Component />,
  document.getElementById('root'),
)

renderApp(App)

if (__DEV__ && module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp(App)
  })
}
