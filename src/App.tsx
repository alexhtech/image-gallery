import * as React from 'react'
import { hot } from 'react-hot-loader/root'
import { renderRoutes } from 'react-router-config'
import { Router } from 'react-router'
import { History } from 'history'

import routes from './routes'
import GlobalStyle from './globalStyle'
import { RootStore } from './store'
import { Provider } from './store/useStore'
import { StylesProvider } from '@material-ui/core'

interface Props {
  history: History
  store: RootStore
}

function App({ history, store }: Props) {
  return (
    <>
      <GlobalStyle />
      <StylesProvider injectFirst>
        <Provider value={store}>
          <Router history={history}>{renderRoutes(routes)}</Router>
        </Provider>
      </StylesProvider>
    </>
  )
}

export default hot(App)
