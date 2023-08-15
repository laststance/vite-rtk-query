import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'

const ClientRenderer = () =>
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />)

if (process.env.NODE_ENV === 'development') {
  // Prepare MSW in a Service Worker
  import('../mocks/browser')
    .then(({ worker }) => {
      worker.start()
    })
    // Launched mock server, and then start client React app
    .then(() => {
      ClientRenderer()
    })
} else {
  ClientRenderer()
}
