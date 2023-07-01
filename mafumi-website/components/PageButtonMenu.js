// import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/PageButton.module.scss'

export default function PageButtonMenu() {
  return (
    <Link href="/menu/" className={styles.pageButton} scroll={false}>
      <figure>
        <img
          src="/sources/image/pageButton/menu.jpg"
          alt=""
        />
      </figure>
      <div className={styles.info}>
        <p>
          <span className={styles.ja}>お品書き</span>
          <span className={styles.en}>Menu</span>
        </p>
      </div>
    </Link>
  )
}