import Link from 'next/link'
import styles from '../styles/PageNav.module.scss'

export default function PageNav({imageName,title,content,linkTo,linkName}) {
  return (
    <Link href={linkTo} className={styles.pageNav}>
      <div className={styles.navImage}>
        <figure>
          <img
            src={imageName}
            alt={title}
          />
        </figure>
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
        <p className={styles.link}>{linkName}</p>
      </div>
    </Link>
  )
}