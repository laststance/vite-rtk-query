import { rest } from 'msw'

export const handlers = [
  rest.get('https://jsonplaceholder.com/api/docs_list', (req, res, ctx) => {
    const data = [
      { name: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' },
      { name: 'MSW', url: 'https://mswjs.io/' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
    ]

    return res(ctx.status(200), ctx.json(data))
  }),
]
