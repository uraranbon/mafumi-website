//// import Image from 'next/image'
import styles from '../styles/Gallery.module.scss'
import InView02 from '../components/InView'

export default function Gallery() {
  return (
    <section>
      <InView02 content={
      <div className={styles.galleryWrap}>
        <figure><img src="/sources/image/gallery/photo_img_01.jpg" alt="" /></figure>
        <figure><img src="/sources/image/gallery/photo_img_03.jpg" alt="" /></figure>
      </div>
      } />
    </section>
  )
}