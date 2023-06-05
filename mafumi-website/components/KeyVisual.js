import Image from 'next/image'
import styles from '../styles/KeyVisual.module.scss'

export default function KeyVisual({title,imageName}) {
  return (
    <div className={styles.keyVisual}>
      <figure>
        <Image
          src={imageName}
          alt=""
          layout='fill'
          objectFit='cover'
        />
      </figure>
      <div className="innerArea">
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  )
}