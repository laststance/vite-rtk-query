import React from 'react'
import { Link } from 'react-router-dom'

import { useAppSelector, useAppDispatch } from '../../hooks/redux'
import type { RootState } from '../../store'

import { decrement, increment } from './counterSlice'
import styles from './index.module.css'
import logo from './logo.svg'

const Counter: React.FC = () => {
  const count = useAppSelector((state: RootState) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <main className={styles.container}>
      <Link to="/doclist" className={styles.link}>
        &gt; DocList
      </Link>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h1>Hello Vite + Redux-Toolkit & RTK Query!</h1>
      </header>

      <section className={styles.buttonSection}>
        <button
          type="button"
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          type="button"
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </section>
      <section className={styles.countSection}>
        <p>count is: {count}</p>
      </section>
    </main>
  )
}
export default Counter
