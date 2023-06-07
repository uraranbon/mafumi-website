import Image from 'next/image'
import styles from '../styles/Gallery.module.scss'

export default function Gallery() {
  return (
    <section>
      <div className={styles.galleryWrap}>
        <figure><Image src="/gallery/photo_img_01.jpg" alt="" fill cover /></figure>
        <figure><Image src="/gallery/photo_img_02.jpg" alt="" fill cover /></figure>
        <figure><Image src="/gallery/photo_img_03.jpg" alt="" fill cover /></figure>
        <figure><Image src="/gallery/photo_img_04.jpg" alt="" fill cover /></figure>
        <figure><Image src="/gallery/photo_img_05.jpg" alt="" fill cover /></figure>
        <figure><Image src="/gallery/photo_img_06.jpg" alt="" fill cover /></figure>
      </div>
    </section>
  )
}