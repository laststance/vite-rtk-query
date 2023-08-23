import '@testing-library/jest-dom/vitest'
import { Headers, Request } from 'node-fetch'

import { server } from '../mocks/server'

// @ts-ignore
globalThis.Request = Request
globalThis.Headers = Headers

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

afterEach(() => server.resetHandlers())

afterAll(() => {
  server.close()
})
