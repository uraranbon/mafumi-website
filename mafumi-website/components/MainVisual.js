import { useEffect, useRef } from "react";
import styles from '../styles/MainVisual.module.scss'

export default function MainVisual() {
  return (
    <section className={styles.mainVisual}>
      <div className={styles.background}>
        <video
          src={require('../public/sources/video/kv.mp4')}
          poster="true"
          playsInline
          muted
          autoPlay
          loop
        />
      </div>
    </section>
  )
}