// import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/PageButton.module.scss'

export default function PageButtonShop() {
  return (
    <Link href="https://mafumicoffee.square.site/" target='_blank' className={styles.pageButton} scroll={false}>
      <figure>
        <img
          src="/sources/image/pageButton/shop.jpg"
          alt=""
        />
      </figure>
      <div className={styles.info}>
        <p>
          <span className={styles.ja}>オンラインショップ</span>
          <span className={styles.en}>Online Shop</span>
        </p>
      </div>
    </Link>
  )
}