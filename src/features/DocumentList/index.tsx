import React, { memo } from 'react'

import { useGetDocsListQuery } from '../../services/docs'

interface Props {}

const DocumentList: React.FC<Props> = memo(() => {
  const { data, error, isLoading } = useGetDocsListQuery()
  return (
    <>
      {' '}
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
        ) : null}
      </p>
    </>
  )
})

export default DocumentList
