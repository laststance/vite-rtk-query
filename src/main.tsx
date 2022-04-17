import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import { store } from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
)

if (process.env.NODE_ENV === 'development') {
  import('../mocks/browser')
    .then(({ worker }) => {
      worker.start()
    })
    .then(() => {
      root.render(
        <Provider store={store}>
          <App />
        </Provider>
      )
    })
} else {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  )
}
