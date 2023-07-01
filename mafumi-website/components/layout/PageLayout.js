import Meta from '../Meta'
import Header from './Header'
import Footer from './Footer'
import KeyVisual from '../KeyVisual'
import { motion } from "framer-motion"

export default function PageLayout({pageEn,kvImage,kvImageSp,pageContents}) {
  return (
    <>
      <Meta pageTitle={pageEn} />
      <Header />
      <motion.div
          initial={{ opacity: 0, transition: { duration: 0.4 } }} // 初期状態
          animate={{ opacity: 1, transition: { duration: 0.4 } }} // マウント時
          exit={{ opacity: 0, transition: { duration: 0 } }}    // アンマウント時
        >
        <main>
          <KeyVisual title={pageEn} imageName={kvImage} imageNameSp={kvImageSp} />
          {pageContents}
        </main>
        <Footer />
      </motion.div>
    </>
  )
}