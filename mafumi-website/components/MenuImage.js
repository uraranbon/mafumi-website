import Image from 'next/image'
import styles from '../styles/MenuImage.module.scss'

export default function MenuImage({imageName,title}) {
  return (
    <div className={styles.itemPhoto}>
      <figure>
        <Image
          src={imageName}
          alt={title}
          fill
          cover
        />
      </figure>
      <p className={styles.title}>{title}</p>
    </div>
  )
}