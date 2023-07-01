import { useState } from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import styles from '../../styles/Header.module.scss'

export default function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className="innerAreaWide">
        <nav className={navIsOpen ? styles.isOpen : styles.isClose}>
          {navIsOpen && (
            <style jsx global>{`
              @media (max-width: 767px) {
                body {
                  overflow: hidden;
                  position: fixed;
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
            <li><Link href="/about/" onClick={closeNav} scroll={false}>眞踏珈琲店について</Link></li>
            <li><Link href="/menu/" onClick={closeNav} scroll={false}>お品書き</Link></li>
            <li><Link href="/access" onClick={closeNav} scroll={false}>店舗情報</Link></li>
            <li><Link href="/faq/" onClick={closeNav} scroll={false}>よくあるご質問</Link></li>
            <li><Link href="/recipe/" onClick={closeNav} scroll={false}>レシピ</Link></li>
            <li><Link href="https://mafumicoffee.square.site/" target='_blank' onClick={closeNav}>オンラインショップ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}