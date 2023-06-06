import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/PageButton.module.scss'

export default function PageButtonShop() {
  return (
    <Link href="https://mafumicoffee.square.site/" target='_blank' className={styles.pageButton}>
      <figure>
        <Image
          src="/pageButton/shop.jpg"
          alt=""
          fill
          cover
        />
      </figure>
      <p className={styles.info}>
        <span className={styles.en}>Online Shop</span>
        <span className={styles.ja}>豆のご購入はこちら</span>
      </p>
    </Link>
  )
}