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

      <section className="">
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
          className="h-26 my-4 w-52 rounded border border-solid border-white px-4 py-3"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div className="w-44">count is: {count}</div>
      </section>
    </main>
  )
})
Counter.displayName = 'Counter'
export default Counter
