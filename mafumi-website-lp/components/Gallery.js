//// import Image from 'next/image'
import styles from '../styles/Gallery.module.scss'
import InView02 from '../components/InView'

export default function Gallery() {
  return (
    <section>
      <InView02 content={
      <div className={styles.galleryWrap}>
          <div className={styles.video}>
          <video
            src={require('../public/sources/video/coffee.mp4')}
            poster="true"
            playsInline
            muted
            autoPlay
            loop
          />
        </div>
        <figure><img src="/sources/image/gallery/photo_img_02.jpg" alt="" /></figure>
        <figure><img src="/sources/image/gallery/photo_img_05.jpg" alt="" /></figure>
        <div className={styles.video}>
          <video
            src={require('../public/sources/video/ice.mp4')}
            poster="true"
            playsInline
            muted
            autoPlay
            loop
          />
        </div>
      </div>
      } />
    </section>
  )
}