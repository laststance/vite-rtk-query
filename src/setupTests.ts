import matchers from '@testing-library/jest-dom/matchers'
import { Headers, Request } from 'node-fetch'

import { server } from '../mocks/server'
// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers)

// @ts-ignore
globalThis.Request = Request
globalThis.Headers = Headers

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterEach(() => server.resetHandlers())

afterAll(() => {
  server.close()
})
