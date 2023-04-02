// from https://github.com/mswjs/examples/blob/master/examples/with-jest/src/mocks/server.js
import { setupServer } from 'msw/node'
import { Request, Headers } from 'node-fetch'

import { handlers } from './handlers'

globalThis.Request = Request
globalThis.Headers = Headers

export const server = setupServer(...handlers)
