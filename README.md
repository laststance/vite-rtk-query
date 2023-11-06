# vite-rtk-query [![Typecheck](https://github.com/laststance/vite-rtk-query/actions/workflows/typecheck.yml/badge.svg)](https://github.com/laststance/vite-rtk-query/actions/workflows/typecheck.yml) [![Test](https://github.com/laststance/vite-rtk-query/actions/workflows/test.yml/badge.svg)](https://github.com/laststance/vite-rtk-query/actions/workflows/test.yml) [![Build](https://github.com/laststance/vite-rtk-query/actions/workflows/build.yml/badge.svg)](https://github.com/laststance/vite-rtk-query/actions/workflows/build.yml) [![Lint](https://github.com/laststance/vite-rtk-query/actions/workflows/lint.yml/badge.svg)](https://github.com/laststance/vite-rtk-query/actions/workflows/lint.yml)

> Vite RTK Query temptelte.  
> This include React+TS with familiar pre-setup tooling  
> Redux Toolkit, RTK Query, React Router, eslint-config-ts-prefixer, Vitest/TS/react-testing-library/MSW, tailwindcss, CSS Modules GitHub Actions CI.

## [Try this Online!](https://codesandbox.io/p/github/laststance/vite-rtk-query/main?import=true&layout=%257B%2522sidebarPanel%2522%253A%2522GIT%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clld7m4o8000h3b6hsmaawe7i%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clld7m4o8000c3b6hpg0lt6ua%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clld7m4o8000g3b6h3s4es0r6%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clld7m4o8000e3b6h9st3psvm%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B47.960956959972194%252C52.039043040027806%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clld7m4o8000c3b6hpg0lt6ua%2522%253A%257B%2522id%2522%253A%2522clld7m4o8000c3b6hpg0lt6ua%2522%252C%2522activeTabId%2522%253A%2522clomqiwf8005h3b6lc4dltc9x%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fpackage.json%2522%252C%2522id%2522%253A%2522clomqiwf8005h3b6lc4dltc9x%2522%252C%2522mode%2522%253A%2522temporary%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%257D%252C%2522clld7m4o8000e3b6h9st3psvm%2522%253A%257B%2522id%2522%253A%2522clld7m4o8000e3b6h9st3psvm%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522SYSTEM_METRICS%2522%252C%2522id%2522%253A%2522clly7wlzp02e13b6ivx71nygd%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A3000%252C%2522id%2522%253A%2522clly8lfuo00ny3b6hdm37bbuy%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clly8lfuo00ny3b6hdm37bbuy%2522%257D%252C%2522clld7m4o8000g3b6h3s4es0r6%2522%253A%257B%2522id%2522%253A%2522clld7m4o8000g3b6h3s4es0r6%2522%252C%2522activeTabId%2522%253A%2522clld7mipg00ke3b6hpzob7gzb%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clld7m4o8000f3b6hmbw6fmqd%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clld7m4xm001xdai15pqz8fct%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clld7mipg00ke3b6hpzob7gzb%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522CSB_RUN_OUTSIDE_CONTAINER%253D1%2520devcontainer%2520templates%2520apply%2520--template-id%2520%255C%2522ghcr.io%252Fdevcontainers%252Ftemplates%252Ftypescript-node%255C%2522%2520--template-args%2520%27%257B%257D%27%2520--features%2520%27%255B%255D%27%2522%252C%2522id%2522%253A%2522clomqn67i00bh3b6lqzvdc6qd%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

<div align="center">
    <a href="https://codesandbox.io/p/github/laststance/vite-rtk-query/main?import=true&layout=%257B%2522sidebarPanel%2522%253A%2522GIT%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clld7m4o8000h3b6hsmaawe7i%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clld7m4o8000c3b6hpg0lt6ua%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clld7m4o8000g3b6h3s4es0r6%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clld7m4o8000e3b6h9st3psvm%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B47.960956959972194%252C52.039043040027806%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clld7m4o8000c3b6hpg0lt6ua%2522%253A%257B%2522id%2522%253A%2522clld7m4o8000c3b6hpg0lt6ua%2522%252C%2522activeTabId%2522%253A%2522clomqiwf8005h3b6lc4dltc9x%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fpackage.json%2522%252C%2522id%2522%253A%2522clomqiwf8005h3b6lc4dltc9x%2522%252C%2522mode%2522%253A%2522temporary%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%257D%252C%2522clld7m4o8000e3b6h9st3psvm%2522%253A%257B%2522id%2522%253A%2522clld7m4o8000e3b6h9st3psvm%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522SYSTEM_METRICS%2522%252C%2522id%2522%253A%2522clly7wlzp02e13b6ivx71nygd%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A3000%252C%2522id%2522%253A%2522clly8lfuo00ny3b6hdm37bbuy%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clly8lfuo00ny3b6hdm37bbuy%2522%257D%252C%2522clld7m4o8000g3b6h3s4es0r6%2522%253A%257B%2522id%2522%253A%2522clld7m4o8000g3b6h3s4es0r6%2522%252C%2522activeTabId%2522%253A%2522clld7mipg00ke3b6hpzob7gzb%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clld7m4o8000f3b6hmbw6fmqd%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clld7m4xm001xdai15pqz8fct%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clld7mipg00ke3b6hpzob7gzb%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522CSB_RUN_OUTSIDE_CONTAINER%253D1%2520devcontainer%2520templates%2520apply%2520--template-id%2520%255C%2522ghcr.io%252Fdevcontainers%252Ftemplates%252Ftypescript-node%255C%2522%2520--template-args%2520%27%257B%257D%27%2520--features%2520%27%255B%255D%27%2522%252C%2522id%2522%253A%2522clomqn67i00bh3b6lqzvdc6qd%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D">
        <img src="https://digital3.nyc3.cdn.digitaloceanspaces.com/vite-rtk-query.gif" />
    </a>
</div>

- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [eslint-config-ts-prefixer](https://github.com/laststance/eslint-config-ts-prefixer). Specialized fixable(`--fix` option) rule sets. Zero extend any recommended for confortable DX. 
- [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [MSW](https://mswjs.io/)
- [tailwindcss](https://tailwindcss.com/)
- [Github Actions](https://github.com/features/actions)

All npm package are keeping least release version powered by [Dependabot](https://github.com/dependabot).

# Installation

```
npx degit laststance/vite-rtk-query myapp
```

- Install [pnpm](https://pnpm.io/installation)

### pnpm

```sh
cd myapp
pnpm install
pnpm validate
pnpm dev
```

If you don't need TailwindCSS, run `pnpm remove:tailwind` after `pnpm install`.

## Commands

```bash
pnpm dev             # start development server
pnpm start           # start development server
pnpm validate        # run test,lint,build,typecheck concurrently
pnpm test            # run vitest
pnpm test:watch      # run vitest watch mode
pnpm lint            # run eslint
pnpm lint:fix         # run eslint with --fix option
pnpm typecheck       # run TypeScript compiler check
pnpm build           # build production bundle to 'dist' directly
pnpm prettier        # run prettier for json|yml|css|md|mdx files
pnpm clean           # remove 'node_modules' 'yarn.lock' 'dist' completely
pnpm serve           # launch server for production bundle in local
pnpm remove:tailwind # remove TailwindCSS
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
