import { render } from '@testing-library/react'

import Spinner from './Spinner'

test('updates when its props change', () => {
  const { rerender, getByTestId } = render(<Spinner size="sm" />)

  rerender(<Spinner size="xl" className="text-red-500" />)

  expect(getByTestId('loading')).toHaveClass('h-24', 'w-24', 'text-red-500')
})
