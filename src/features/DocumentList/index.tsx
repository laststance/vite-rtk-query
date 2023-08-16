import React from 'react'

import Spinner from '../../compoments/Spinner'
import { useGetDocsListQuery } from '../../services/docs'

import styles from './index.module.css'

const DocumentList: React.FC = () => {
  const { data, error, isLoading } = useGetDocsListQuery()

  if (error)
    return (
      <main className={styles.container}>
        <p className={styles.error}>{JSON.stringify(error)}</p>
      </main>
    )

  return (
    <main className={styles.container}>
      <header className={styles.header}>Document List</header>
      {isLoading && <Spinner size="xl" />}
      <section className={styles.documentList}>
        {data &&
          data.map((doc, i) => (
            <a key={i} className={styles.button} href={doc.url} target="_blank">
              {doc.name}
            </a>
          ))}
      </section>
    </main>
  )
}

export default DocumentList
