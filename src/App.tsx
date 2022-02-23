import React from 'react'

import './App.css'
import { Counter } from './features/counter/Counter'
import logo from './logo.svg'
import { useGetDocsListQuery } from './services/docs'

const App: React.FC = () => {
  const { data, error, isLoading } = useGetDocsListQuery()

  return (
    <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Counter />
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            data.map((v, i) => {
              return (
                <span key={i}>
                  {' | '}
                  <a
                    className="App-link"
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {v.name}
                  </a>
                </span>
              )
            })
          ) : (
            false
          )}
        </p>
      </header>
    </main>
  )
}

export default App
