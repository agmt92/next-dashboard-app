# Next.js Dashboard App

This project is a comprehensive example of a modern web application built with Next.js, showcasing various features and best practices. In addition to the 16 chapters outlined below, I have created a customers page that lists customer information and allows for searching and pagination.

The deployed application is available at [Next.js Dashboard App](https://next-dashboard-app-gray.vercel.app).

For visitors, you can use the following credentials to log in:
- **Username:** user@nextmail.com
- **Password:** 1 till 6

## Table of Contents

1. [Cloning the Boilerplate and Installation](#chapter-1)
2. [CSS Styling](#chapter-2)
3. [Optimizing Fonts and Images](#chapter-3)
4. [Creating Layouts and Pages](#chapter-4)
5. [Navigating Between Pages](#chapter-5)
6. [Setting Up Your Database](#chapter-6)
7. [Fetching Data](#chapter-7)
8. [Static and Dynamic Rendering](#chapter-8)
9. Streaming
10. [Partial Prerendering](#chapter-10)
11. [Adding Search and Pagination](#chapter-11)
12. [Mutating Data](#chapter-12)
13. [Handling Errors](#chapter-13)
14. [Improving Accessibility](#chapter-14)
15. [Adding Authentication](#chapter-15)
16. [Adding Metadata](#chapter-16)

## Chapter 1: Cloning the Boilerplate and Installation

This project was initialized by cloning the boilerplate from the Vercel Next.js repository. The installation was done using `pnpm` for efficient package management.

## Chapter 2: CSS Styling

CSS styling in this project is managed using Tailwind CSS. The configuration can be found in the `tailwind.config.ts` file. Additionally, the project uses `@tailwindcss/forms` for form styling.

```json
"@tailwindcss/forms": "^0.5.8",
"tailwindcss": "3.4.10",
```

## Chapter 3: Optimizing Fonts and Images

Fonts and images are optimized using Next.js built-in features. The [`next/image`](command:_github.copilot.openSymbolFromReferences?%5B%22next%2Fimage%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22path%22%3A%22%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A3%2C%22character%22%3A14%7D%7D%5D%5D "Go to definition") component is used for image optimization, and custom fonts are loaded using the [`next/font`](command:_github.copilot.openSymbolFromReferences?%5B%22next%2Ffont%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22path%22%3A%22%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A3%2C%22character%22%3A14%7D%7D%5D%5D "Go to definition") module.

## Chapter 4: Creating Layouts and Pages

Layouts and pages are structured under the `app` directory. The main layout file is `app/layout.tsx`, and various pages are created under subdirectories like `dashboard`, `login`, etc.

## Chapter 5: Navigating Between Pages

Navigation between pages is handled using Next.js's `Link` component. This ensures client-side navigation and improves the user experience.

## Chapter 6: Setting Up Your Database

The database setup uses PostgreSQL, and the connection details are managed through environment variables defined in the `.env` file.

```env
POSTGRES_URL="postgres://default:SECRET/verceldb?sslmode=require"
```

## Chapter 7: Fetching Data

Data fetching is done using the `@vercel/postgres` package. Various functions for fetching data are defined in `app/lib/data.ts`.

```ts
import { sql } from '@vercel/postgres';
```

## Chapter 8: Static and Dynamic Rendering

The project uses both static and dynamic rendering techniques provided by Next.js. Static rendering is used for pages that do not change often, while dynamic rendering is used for pages that require real-time data.

## Chapter 9: Streaming

Streaming is implemented to improve the performance of data-heavy pages. This allows parts of the page to be rendered and sent to the client as soon as they are ready.

## Chapter 10: Partial Prerendering

Partial prerendering is used to prerender parts of the page that do not change frequently. This improves the initial load time of the application.

At the [dashboard](https://next-dashboard-app-gray.vercel.app/dashboard), you can see an artificial 3 seconds delay on the recent revenue graph.

## Chapter 11: Adding Search and Pagination

Search and pagination functionalities are added to the customers and invoices pages. The search component is located in `app/ui/search.tsx`, and pagination is handled in `app/ui/invoices/pagination.tsx`.

## Chapter 12: Mutating Data

Data mutation operations, such as creating, updating, and deleting records, are handled using SQL queries defined in `app/lib/data.ts`.

## Chapter 13: Handling Errors

Error handling is implemented to catch and display errors gracefully. This ensures a better user experience and easier debugging.

## Chapter 14: Improving Accessibility

Accessibility improvements are made using the [`eslint-plugin-jsx-a11y`](command:_github.copilot.openSymbolFromReferences?%5B%22eslint-plugin-jsx-a11y%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22path%22%3A%22%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A11%2C%22character%22%3A17%7D%7D%5D%5D "Go to definition") package. This ensures that the application is usable by people with disabilities.

```json
"eslint-plugin-jsx-a11y": "^6.9.0",
```

## Chapter 15: Adding Authentication

This app uses credentials provider for presentation only. It is good to note that OAuth or email provider authentication methods are the better and more secure choice. 

Authentication is implemented using the [`next-auth`](command:_github.copilot.openSymbolFromReferences?%5B%22next-auth%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22path%22%3A%22%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A3%2C%22character%22%3A14%7D%7D%5D%5D "Go to definition") package. The configuration is defined in [`auth.config.ts`](command:_github.copilot.openSymbolFromReferences?%5B%22auth.config.ts%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22path%22%3A%22%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A23%2C%22character%22%3A10%7D%7D%5D%5D "Go to definition") and [`auth.ts`](command:_github.copilot.openSymbolFromReferences?%5B%22auth.ts%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22path%22%3A%22%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A23%2C%22character%22%3A10%7D%7D%5D%5D "Go to definition").

```json
"next-auth": "5.0.0-beta.20",
```

## Chapter 16: Adding Metadata

Metadata is added to improve SEO and provide better information about the pages. This is done using the [`next/head`](command:_github.copilot.openSymbolFromReferences?%5B%22next%2Fhead%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22path%22%3A%22%2FUsers%2Fag%2FGitHub%2Fnextjs%2Fnextjs-dashboard%2Fpackage.json%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A3%2C%22character%22%3A14%7D%7D%5D%5D "Go to definition") component.

## Project Layout

```
.vscode/
  settings.json
nextjs-dashboard/
  .env
  .eslintrc.json
  .gitignore
  .next/
    ...
  app/
    dashboard/
      ...
    auth.config.ts
    auth.ts
    middleware.ts
    next-env.d.ts
    next.config.mjs
    package.json
    pnpm-lock.yaml
    postcss.config.js
    public/
    README.md
    tailwind.config.ts
    tsconfig.json
  seed/
    route.ts
```

## Database Schema

The database schema includes tables for `customers`, `invoices`, and `revenue`. The SQL queries for interacting with these tables are defined in `app/lib/data.ts`.

## Conclusion

This project demonstrates a wide range of features and best practices for building a modern web application with Next.js. Feel free to explore the codebase and the deployed application to learn more.
