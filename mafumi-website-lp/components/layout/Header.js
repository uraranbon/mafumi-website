import { useState } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import styles from '../../styles/Header.module.scss'
import AnchorLink from "react-anchor-link-smooth-scroll";

//icon
import { RxOpenInNewWindow } from 'react-icons/rx';

export default function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }

  return (
    <motion.header className={styles.header}
      initial={{ opacity: 0, transition: { duration: 0.6, delay: 1.8  } }} // 初期状態
      animate={{ opacity: 1, transition: { duration: 0.6, delay: 1.8 } }} // マウント時
      exit={{ opacity: 0, transition: { duration: 0.6, delay: 1.8 } }}    // アンマウント時
    >
      <div className="innerAreaWide">
        <nav className={navIsOpen ? styles.isOpen : styles.isClose}>
          {navIsOpen && (
            <style jsx global>{`
              @media (max-width: 767px) {
                body {
                  width: 100%;
                }
              }
            `}</style>
          )}

          <button className={styles.button} onClick={toggleNav}>
            <span className={styles.bar}></span>
          </button>

          <Link href="/" className={styles.logo} scroll={false}>
            <img
              src="/sources/image/logo.png"
              alt="MAFUMI COFFEE Since 2016"
              width="80"
              height="80"
            />
          </Link>
          <ul className={styles.links}>
            <li><AnchorLink href="#menu" onClick={closeNav}>お品書き</AnchorLink></li>
            <li><AnchorLink href="#access" onClick={closeNav}>店舗情報</AnchorLink></li>
            <li><AnchorLink href="#faq" onClick={closeNav}>よくあるご質問</AnchorLink></li>
            <li><Link href="https://mafumicoffee.square.site/" target='_blank' onClick={closeNav}>豆販売<RxOpenInNewWindow /></Link></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}