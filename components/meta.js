import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Michael Pierce's Blog" />
      <meta content="#202B38" name="theme-color" />
      <meta content="#202B38" name="msapplication-TileColor" />

      <link href="/favicons/site.webmanifest" rel="manifest" />
      <link
        rel="shortcut icon"
        href="/favicon/favicon.ico"
        type="image/x-icon"
      />
      <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
      <link
        href="/favicons/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
    </Head>
  );
}
