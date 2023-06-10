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
            <li><Link href="/about/" onClick={closeNav} scroll={false}>About Us</Link></li>
            <li><Link href="/menu/" onClick={closeNav} scroll={false}>Menu</Link></li>
            <li><Link href="/access" onClick={closeNav} scroll={false}>Access</Link></li>
            <li><Link href="/faq/" onClick={closeNav} scroll={false}>FAQ</Link></li>
            <li><Link href="/recipe/" onClick={closeNav} scroll={false}>Recipe</Link></li>
            <li><Link href="/beans/" onClick={closeNav} scroll={false}>Online Shop</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}