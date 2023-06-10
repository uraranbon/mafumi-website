// import Image from 'next/image'
import styles from '../styles/KeyVisual.module.scss'

export default function KeyVisual({title,imageName}) {
  return (
    <section className={styles.keyVisual}>
      <figure>
        <img
          src={imageName}
          alt=""
        />
      </figure>
      <div className="innerArea">
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
  )
}