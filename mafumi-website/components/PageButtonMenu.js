import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/PageButton.module.scss'

export default function PageButtonMenu() {
  return (
    <Link href="/menu" className={styles.pageButton}>
      <figure>
        <Image
          src="/pageButton/menu.jpg"
          alt=""
          fill
          cover
        />
      </figure>
      <p className={styles.info}>
        <span className={styles.en}>Menu</span>
        <span className={styles.ja}>メニューはこちら</span>
      </p>
    </Link>
  )
}