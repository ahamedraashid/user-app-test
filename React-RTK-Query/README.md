# React Template v2.0

## Goals of this template

Improved Developer Experience (DevEx) with consistent project structure and code base across projects in SEED.

## What is inside?

This project uses many tools like:

- [Vite](https://vitejs.dev)
- [i18n](https://www.i18next.com/)
- [ReactJS](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Vitest](https://vitest.dev)
- [Testing Library](https://testing-library.com)
- [Tailwindcss](https://tailwindcss.com)
- [Eslint](https://eslint.org)
- [Prettier](https://prettier.io)
- [React Hook Form](https://www.react-hook-form.com/)
- [React Router V6](https://reactrouter.com/en/main)
- [Axios](https://axios-http.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [Dayjs](https://day.js.org/)

---

## Major Changes Based on v1.0

- Upgrade of ReactJS to v18.0 from v17.0
- Replace Create-React-App (CRA) to Vite compiler
- Replace Redux-Saga to RTK Query for API integration
- Remove of Ant Design Component (You may use ant design or material ui in future)
- Use of TailwindCSS for component styling
- Use of AirBnb Eslint Rules & other rules for better code checking
- Replace React-Router v5 to v6
- Use of Dayjs as alternative to Momentjs

## Minor Changes Based on v1.0

- Upgrade of i18next package
- Upgrade of typescript package
- Replace Jest with Vitest
- Upgrade of prettier package
- Upgrade of axios package

## Getting Started

#### 💡 Eslint (Recommended)

> [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
>
> Check that your VSCode settings have the following configurations.
>
> ```bash
> "editor.formatOnSave": true,
> "editor.defaultFormatter": "esbenp.prettier-vscode",
> ```

#### 💡 Husky - git hooks (Recommended)

From our observations, we have found that git hooks are a great way to ensure your code is consistent across the team.

We have included `pre-commit` git hooks in our template which will run `lint-staged`, which in turns run `eslint` and `type-check`.

To create new project using this boilerplate, we can download the project as a zip file or clone it from the repo then change the git remote URL.

### Install

Install dependencies.

```bash
npm install
```

Serve with hot reload.

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Test

```bash
npm run test
```

---

## API Code Generator

Provided to ways to generate a typed API client from an OpenAPI schema.

```
npm run api-codegen
```

and

```
npm run api-codegen-rtk-query
```

Use `api-codegen-rtk-query` only if you want to automatically generating API slice definitions.

## Folder Structure

`/components`
Generic and reusable components.

`/hooks`
Generic and reuseable hooks.

`/services`
API integration related functions.

`/redux`
Redux reducer logic and associated actions.

`/utils`
Generic utility functions.

`/features`
All functionality related to a specific feature.

## TailwindCSS PostCSS Nested

PostCSS (https://github.com/postcss/postcss-nested) plugin to unwrap nested rules closer to Sass syntax.

```
.phone {
    &_title {
        width: 500px;
        @media (max-width: 500px) {
            width: auto;
        }
        body.is_dark & {
            color: white;
        }
    }
    img {
        display: block;
    }
}

.title {
  font-size: var(--font);

  @at-root html {
      --font: 16px
  }
}
```

will be processed to:

```
.phone_title {
    width: 500px;
}
@media (max-width: 500px) {
    .phone_title {
        width: auto;
    }
}
body.is_dark .phone_title {
    color: white;
}
.phone img {
    display: block;
}

.title {
  font-size: var(--font);
}
html {
  --font: 16px
}
```

### Available Scripts

`dev`, `build`, `test`, `preview`
Standard react app script.

`analyze`
Analyze source map using source-map-explorer.

`lint`, `format`, `type-check`
Fix prettier and lint issues.

`api-codegen` 🔥 typescript-axios client generation (based on swagger specs) 🔥

`api-codegen-rtk-query` 🔥 generate RTK Query hooks for API integration based on the swagger specs 🔥

---

## Node Package Module

We are using private registry to install the NPM packages. Make sure you get access to https://nexus.ihis-hip.sg/ from HIP team in order to install all the NPM packages required by this project.

---

## Demo Page

1. Home Page (http://localhost:3000/)
   ![Features](./img/home-features.png)
2. React Hook Form Demo Page (http://localhost:3000/react-hook-form)
   ![React Hook Form](./img/react-hook-form.png)
3. RTK Query Demo Page (http://localhost:3000/rtk-query)
   ![RTK Querym](./img/rtk-query.png)

---

## Roadmap

- [ ] Demo page for the router
