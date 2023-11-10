// import Image from 'next/image'
import styles from '../styles/KeyVisual.module.scss'
import { motion } from "framer-motion"

export default function KeyVisual({title,imageName,imageNameSp}) {
  return (
    <section className={styles.keyVisual}>
      <motion.div
        initial={{ opacity: 0}} // 初期状態
        animate={{ opacity: 1 }} // マウント時
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
      <picture>
        <source srcSet={imageName} media="(min-width: 768px)" />
        <img src={imageNameSp} alt="" />
      </picture>
      </motion.div>
      <div className="innerArea">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // 初期状態
          animate={{ opacity: 1, y: 0 }} // マウント時
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
        <h1 className={styles.title}>{title}</h1>
        </motion.div>
      </div>
    </section>
  )
}