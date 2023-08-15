import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import type { RootState } from '../../store'

import { decrement, increment } from './counterSlice'
import styles from './index.module.css'
import logo from './logo.svg'

const Counter: React.FC = memo(() => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>Hello Vite + Redux-Toolkit & RTK Query!</p>
      </header>

      <section className={styles.buttonsection}>
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
      <section className={styles.countsection}>
        <p>count is: {count}</p>
      </section>
    </main>
  )
})
Counter.displayName = 'Counter'
export default Counter
