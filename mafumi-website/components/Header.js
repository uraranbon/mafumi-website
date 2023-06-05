import { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.scss'

export default function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
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

      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only"></span>
      </button>
      <ul className={styles.list}>
      <li>
          <Link href="/" onClick={closeNav}>
            <span className={styles.en}>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/faq" onClick={closeNav}>
            <span className={styles.en}>faq</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}