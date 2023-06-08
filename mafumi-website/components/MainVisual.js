import styles from '../styles/MainVisual.module.scss'

export default function MainVisual() {
  return (
    <section className={styles.mainVisual}>
      <div className={styles.background}>
        <video src={require('../public/video/kv.mp4')} poster="" playsInline="" muted="" autoPlay="" loop=""></video>
      </div>
    </section>
  )
}