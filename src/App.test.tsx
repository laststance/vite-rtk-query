import { waitFor } from '@testing-library/dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux'

import App from './App'
import { store } from './store'

test('Show App Component', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(screen.getByText('Hello Vite + React!')).toBeInTheDocument()
})

test('Working Counter', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(getByText('count is: 0')).toBeInTheDocument()

  const button = getByText('Increment')

  act(() => userEvent.click(button))
  expect(getByText('count is: 1')).toBeInTheDocument()

  act(() => userEvent.click(button))
  expect(getByText('count is: 2')).toBeInTheDocument()

  act(() => userEvent.click(button))
  expect(getByText('count is: 3')).toBeInTheDocument()
})

test('working with msw', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  await waitFor(() => {
    expect(screen.getByText('Redux Toolkit')).toBeInTheDocument()
    expect(screen.getByText('MSW')).toBeInTheDocument()
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument()
  })
})
