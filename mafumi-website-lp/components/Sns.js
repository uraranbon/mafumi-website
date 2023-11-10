import Link from 'next/link'
import styles from '../styles/Sns.module.scss'
import InView from '../components/InView'
import { Timeline } from "react-twitter-widgets";

export default function Sns() {
  return (
    <section className='sectionArea'>
      <div className="innerArea">
        <InView content={<h2 className='title03'>Follow us on SNS</h2>} />
        <div className={styles.snsWrap}>
          <div className={styles.timeline}>
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: "mafumicoffee",
            }}
            options={{
              lang: "ja",
              height: "500",
              chrome: "noheader, nofooter"
            }}
          />
          </div>
          <div className={styles.info}>
            <p className={styles.text}>
              新作メニューや営業情報など<br />
              さまざまな情報を発信しています。<br />
              ぜひフォローしてください。
            </p>
            <Link href="https://twitter.com/mafumicoffee" target='_blank' className="button01">
              <figure><img src="/sources/image/icon_twitter.png" alt="" /></figure>
              Twitter
            </Link>
            <Link href="https://www.facebook.com/mafumi.coffee" target='_blank' className="button01">
              <figure><img src="/sources/image/icon_facebook.png" alt="" /></figure>
              Facebook
            </Link>
            <Link href="https://www.instagram.com/mafumi.coffee/?hl=ja" target='_blank' className="button01">
              <figure><img src="/sources/image/icon_instagram.png" alt="" /></figure>
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}