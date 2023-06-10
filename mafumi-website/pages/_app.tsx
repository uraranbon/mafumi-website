import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import React from 'react'

import '../styles/Globals.scss'

function MyApp ({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp