import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      {/* Title handled on page level */}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta
        name="description"
        content="Michael Pierce's Blog"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />

      <link rel="manifest" href="/favicon/site.webmanifest" />

      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#444444"
      />

      <link rel="shortcut icon" href="/favicon/favicon.ico" />

      <meta name="msapplication-TileColor" content="#444444" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />

      <meta name="theme-color" content="#444444" />

      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    </Head>
  )
}