This is a [Next.js](https://nextjs.org/) project created with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Background

Since the tech used by the Cancer Registry is React and Bootstrap I chose to use it here as well. To keep with best practices I kept to the documentation for both React and Bootstrap, using Nextjs as my preferred framework of choice.

In the interest of not bloating the repo I used native fetch for data fetching, and a small helper lib to convert json to csv for downloading. I also kept it simple by leaving fetching logic inside the components, which - of course - should be abstracted out into its own package/folder.

Lastely, since the API did not seem to support server side pagination, I implemented a very basic client side pagination.
