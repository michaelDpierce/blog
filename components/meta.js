import Head from 'next/head'

export const FATHOM_SITE = process.env.FATHOM_SITE;

export default function Meta() {
  return (
    <Head>
      <title>Michael Pierce's Blog</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Michael Pierce's Blog" />

      <script
        src="https://cdn.usefathom.com/script.js"
        site={FATHOM_SITE}
        defer
      />
    </Head>
  );
}
