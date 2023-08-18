# vite-rtk-query [![Typecheck](https://github.com/laststance/vite-rtk-query/actions/workflows/typecheck.yml/badge.svg)](https://github.com/laststance/vite-rtk-query/actions/workflows/typecheck.yml) [![Test](https://github.com/laststance/vite-rtk-query/actions/workflows/test.yml/badge.svg)](https://github.com/laststance/vite-rtk-query/actions/workflows/test.yml) [![Build](https://github.com/laststance/vite-rtk-query/actions/workflows/build.yml/badge.svg)](https://github.com/laststance/vite-rtk-query/actions/workflows/build.yml) [![Lint](https://github.com/laststance/vite-rtk-query/actions/workflows/lint.yml/badge.svg)](https://github.com/laststance/vite-rtk-query/actions/workflows/lint.yml)

> Vite RTK Query temptelte.  
> This include React+TS with familiar pre-setup tooling  
> Redux Toolkit, RTK Query, React Router, eslint-config-ts-prefixer, Vitest/TS/react-testing-library/MSW, tailwindcss, CSS Modules GitHub Actions CI.

## [Try this Online!](https://codesandbox.io/p/github/laststance/vite-rtk-query/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clld7m4o8000h3b6hsmaawe7i%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clld7m4o8000c3b6hpg0lt6ua%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clld7m4o8000g3b6h3s4es0r6%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clld7m4o8000e3b6h9st3psvm%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B47.960956959972194%252C52.039043040027806%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clld7m4o8000c3b6hpg0lt6ua%2522%253A%257B%2522id%2522%253A%2522clld7m4o8000c3b6hpg0lt6ua%2522%252C%2522activeTabId%2522%253A%2522cllgh49qa01sb3b6ii86c2i81%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clld7m4o8000b3b6h0bqxv5rx%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252F.codesandbox%252Ftasks.json%2522%252C%2522id%2522%253A%2522cllgh3csk01ll3b6iwkzkbow4%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252F.codesandbox%252Fci.json%2522%252C%2522id%2522%253A%2522cllgh49qa01sb3b6ii86c2i81%2522%252C%2522mode%2522%253A%2522temporary%2522%257D%255D%257D%252C%2522clld7m4o8000e3b6h9st3psvm%2522%253A%257B%2522id%2522%253A%2522clld7m4o8000e3b6h9st3psvm%2522%252C%2522activeTabId%2522%253A%2522cllgh2mqn00xz3b6iufgh2rtj%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A3000%252C%2522id%2522%253A%2522cllgh2mqn00xz3b6iufgh2rtj%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clld7m4o8000g3b6h3s4es0r6%2522%253A%257B%2522id%2522%253A%2522clld7m4o8000g3b6h3s4es0r6%2522%252C%2522activeTabId%2522%253A%2522clld7mipg00ke3b6hpzob7gzb%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clld7m4o8000f3b6hmbw6fmqd%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clld7m4xm001xdai15pqz8fct%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clld7mipg00ke3b6hpzob7gzb%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

<div align="center">
    <a href="https://codesandbox.io/p/github/laststance/vite-rtk-query/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clld7m4o8000h3b6hsmaawe7i%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clld7m4o8000c3b6hpg0lt6ua%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clld7m4o8000g3b6h3s4es0r6%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clld7m4o8000e3b6h9st3psvm%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B47.960956959972194%252C52.039043040027806%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clld7m4o8000c3b6hpg0lt6ua%2522%253A%257B%2522id%2522%253A%2522clld7m4o8000c3b6hpg0lt6ua%2522%252C%2522activeTabId%2522%253A%2522cllgh49qa01sb3b6ii86c2i81%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clld7m4o8000b3b6h0bqxv5rx%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252F.codesandbox%252Ftasks.json%2522%252C%2522id%2522%253A%2522cllgh3csk01ll3b6iwkzkbow4%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252F.codesandbox%252Fci.json%2522%252C%2522id%2522%253A%2522cllgh49qa01sb3b6ii86c2i81%2522%252C%2522mode%2522%253A%2522temporary%2522%257D%255D%257D%252C%2522clld7m4o8000e3b6h9st3psvm%2522%253A%257B%2522id%2522%253A%2522clld7m4o8000e3b6h9st3psvm%2522%252C%2522activeTabId%2522%253A%2522cllgh2mqn00xz3b6iufgh2rtj%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A3000%252C%2522id%2522%253A%2522cllgh2mqn00xz3b6iufgh2rtj%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clld7m4o8000g3b6h3s4es0r6%2522%253A%257B%2522id%2522%253A%2522clld7m4o8000g3b6h3s4es0r6%2522%252C%2522activeTabId%2522%253A%2522clld7mipg00ke3b6hpzob7gzb%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clld7m4o8000f3b6hmbw6fmqd%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clld7m4xm001xdai15pqz8fct%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clld7mipg00ke3b6hpzob7gzb%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D">
        <img src="https://digital3.nyc3.cdn.digitaloceanspaces.com/vite-rtk-query.gif" />
    </a>
</div>

- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [eslint-typescript](https://github.com/typescript-eslint/typescript-eslint) and [Prettier](https://prettier.io/) integration. Rules are 100% my personal setup 💅
- [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library), [MSW](https://mswjs.io/)
- [tailwindcss](https://tailwindcss.com/)
- [Github Actions](https://github.com/features/actions)

All npm package are keeping least release version powered by [Renovate](https://github.com/renovatebot/renovate).

# Installation

```
npx degit laststance/vite-rtk-query myapp
```

### npm

```sh
cd myapp
npm install --force
npm run validate
npm run dev
```

If you don't need TailwindCSS, run `npm run remove:tailwind` after `npm install`.

## Commands

```bash
npm run dev             # start development server
npm run start           # start development server
npm run validate        # run test,lint,build,typecheck concurrently
npm run test            # run vitest
npm run test:watch      # run vitest watch mode
npm run lint            # run eslint
npm run lint:fix         # run eslint with --fix option
npm run typecheck       # run TypeScript compiler check
npm run build           # build production bundle to 'dist' directly
npm run prettier        # run prettier for json|yml|css|md|mdx files
npm run clean           # remove 'node_modules' 'yarn.lock' 'dist' completely
npm run serve           # launch server for production bundle in local
npm run remove:tailwind # remove TailwindCSS
```

# License

MIT

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://ryota-murakami.github.io/"><img src="https://avatars1.githubusercontent.com/u/5501268?s=400&u=7bf6b1580b95930980af2588ef0057f3e9ec1ff8&v=4?s=100" width="100px;" alt=""/><br /><sub><b>ryota-murakami</b></sub></a><br /><a href="https://github.com/laststance/vite-rtk-query/laststance/vite-rtk-query/commits?author=ryota-murakami" title="Code">💻</a> <a href="https://github.com/laststance/vite-rtk-query/laststance/vite-rtk-query/commits?author=ryota-murakami" title="Documentation">📖</a> <a href="https://github.com/laststance/vite-rtk-query/laststance/vite-rtk-query/commits?author=ryota-murakami" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
