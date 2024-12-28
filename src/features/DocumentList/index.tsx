import React from 'react'
import { Link } from 'react-router'

import Spinner from '../../components/Spinner'
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
      <Link to="/" className={styles.link}>
        &gt; Counter
      </Link>
      <header className={styles.header}>
        <h1>Document List</h1>
      </header>
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
