import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        name="description"
        content="Michael Pierce's Blog"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
    </Head>
  )
}