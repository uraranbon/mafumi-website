import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/PageButton.module.scss'

export default function PageButtonFaq() {
  return (
    <Link href="/faq" className={styles.pageButton}>
      <figure>
        <Image
          src="/pageButton/faq.jpg"
          alt=""
          fill
          cover
        />
      </figure>
      <p className={styles.info}>
        <span className={styles.en}>FAQ</span>
        <span className={styles.ja}>よくある質問はこちら</span>
      </p>
    </Link>
  )
}