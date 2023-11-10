import { motion } from "framer-motion"

export default function InView02({content}) {
  return (
  <motion.div
    variants={{
      offscreen: {
        opacity: 0,
      },
      onscreen: {
        opacity: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        },
      },
    }}
    initial='offscreen' // 初期表示はoffscreen
    whileInView='onscreen' // 画面内に入ったらonscreen
    viewport={{ once: false, amount: 0 }}
  >
    {content}
  </motion.div>
  )
}