import Head from 'next/head'

export default function Meta({pageTitle}) {
  const siteTitle = "眞踏珈琲店"
  const siteCatchcopy = "珈琲と、本と、そして無駄話を愉しむ喫茶店。"
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : `${siteTitle} | ${siteCatchcopy}`;
  const siteDescription = "珈琲と本の喫茶店『眞踏珈琲店』公式。全席禁煙。月-土12-23時 日祝12-21時(ラストオーダー30分前) 年中無休"

  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/sources/image/favicon.ico" />
      <link rel="apple-touch-icon" href="/sources/image/apple-touch-icon.png" sizes="180x180" />
      <link rel="icon" type="image/png" href="/sources/image/android-chrome.png" sizes="192x192" />
      <link rel="canonical" href="" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="http://coffeemafumi.html.xdomain.jp/" />
      <meta property="og:description" content="" />
      <meta property="og:site_name" content={siteDescription} />
      <meta property="og:image" content="http://coffeemafumi.html.xdomain.jp/sources/image/ogp.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}