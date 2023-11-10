// import Image from 'next/image'
import styles from '../styles/MenuImage.module.scss'

export default function MenuImage({imageName,title}) {
  return (
    <div className={styles.itemPhoto}>
      <figure>
        <img
          src={imageName}
          alt={title}
        />
      </figure>
      <p className={styles.title}>{title}</p>
    </div>
  )
}