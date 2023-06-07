import styles from '../styles/MainVisual.module.scss'

export default function MainVisual() {
  return (
    <section className={styles.mainVisual}>
      <div class={styles.background}>
        <video src="/video/kv.mp4" poster="" playsinline="" muted="" autoplay="" loop=""></video>
      </div>
    </section>
  )
}