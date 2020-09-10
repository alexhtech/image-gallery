import * as React from 'react'
import { render } from 'react-dom'
import { createBrowserHistory } from 'history'

import App from './App'
import { setupAxios } from './api'
import { RootStore } from './store'

setupAxios()

const history = createBrowserHistory()
const store = new RootStore()

function renderApp() {
  render(<App history={history} store={store} />, document.getElementById('react-root'))
}

renderApp()
