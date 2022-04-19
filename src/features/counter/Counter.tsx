import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import type { RootState } from '../../store'

import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className="flex items-center space-x-4">
        <button
          type="button"
          className="h-26 my-4 w-52 rounded border border-solid border-white px-4 py-3"
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
      </div>
    </div>
  )
}
