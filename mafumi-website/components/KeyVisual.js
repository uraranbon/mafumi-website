// import Image from 'next/image'
import styles from '../styles/KeyVisual.module.scss'

export default function KeyVisual({title,imageName,imageNameSp}) {
  return (
    <section className={styles.keyVisual}>
      <picture>
        <source srcset={imageName} media="(min-width: 768px)" />
        <img src={imageNameSp} alt="" />
      </picture>
      <div className="innerArea">
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  )
}