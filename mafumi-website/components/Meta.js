import Head from 'next/head'

export default function Meta({pageTitle}) {
  return (
    <Head>
      <title>{pageTitle} | 眞踏珈琲店</title>
      <link rel="canonical" href="" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content=" | 眞踏珈琲店" />
      <meta property="og:url" content="" />
      <meta property="og:site_name" content="眞踏珈琲店" />
      <meta property="og:image" content="" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}