This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Fetch 
fetch in next.js caches the response by default. You can use the `cache` option to control caching behavior. For example, you can set `cache: 'no-store'` to disable caching for a specific request.

However, there are some exceptions, fetch requests are not cached when:

- Used inside a Server Component/ Actions
- Used inside a Route Handler that uses the POST method

## SSR - Server Side Rendering
This is default behavior of Next.js. The page is rendered on the server and sent to the client. This is useful for SEO and initial page load performance.

## SSG - Static Site Generation
Any content which does not have network calls is a static page by default

## ISG or ISR 
Incremental Static Generation or Incremental Static Regeneration is a feature of Next.js that allows you to update static content after the site has been built and deployed. This means that you can have static pages that can be updated without needing to rebuild the entire site. This is useful for content that changes frequently, such as blog posts or product listings.

To opt out use:
```
export const dynamic = 'force-dynamic' 
```
