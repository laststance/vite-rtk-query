import { rest } from 'msw'

import { sleep } from '../src/utils/sleep'

export const handlers = [
  rest.get('http://localhost:4000/api/docs_list', async (_req, res, ctx) => {
    const data = [
      { name: 'Vite', url: 'https://vitejs.dev/' },
      { name: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' },
      { name: 'React Router', url: 'https://reactrouter.com/en/main' },
      {
        name: 'Redux First History',
        url: 'https://github.com/salvoravida/redux-first-history',
      },
      { name: 'Vitest', url: 'https://vitest.dev/' },
      { name: 'MSW', url: 'https://mswjs.io/' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
      {
        name: 'CSS Modules',
        url: 'https://github.com/css-modules/css-modules',
      },
    ]
    await sleep(3000)

    return res(ctx.status(200), ctx.json(data))
  }),
]
