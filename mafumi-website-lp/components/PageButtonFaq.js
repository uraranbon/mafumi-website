// import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/PageButton.module.scss'

export default function PageButtonFaq() {
  return (
    <Link href="/faq/" className={styles.pageButton} scroll={false}>
      <figure>
        <img
          src="/sources/image/pageButton/faq.jpg"
          alt=""
        />
      </figure>
      <div className={styles.info}>
        <p>
          <span className={styles.ja}>よくあるご質問</span>
          <span className={styles.en}>FAQ</span>
        </p>
      </div>
    </Link>
  )
}