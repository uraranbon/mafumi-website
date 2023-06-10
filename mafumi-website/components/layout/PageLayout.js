import Meta from '../Meta'
import Header from './Header'
import Footer from './Footer'
import KeyVisual from '../KeyVisual'
import { motion } from "framer-motion"

export default function PageLayout({pageEn,kvImage,pageContents}) {
  return (
    <>
      <Meta pageTitle={pageEn} />
      <Header />
      <main>
        <motion.div
          initial={{ opacity: 0 }} // 初期状態
          animate={{ opacity: 1 }} // マウント時
          exit={{ opacity: 0 }}    // アンマウント時
          transition={{ duration: 0.5, ease: "ease" }}
        >
          <KeyVisual title={pageEn} imageName={kvImage} />
          {pageContents}
        </motion.div>
      </main>
      <Footer />
    </>
  )
}