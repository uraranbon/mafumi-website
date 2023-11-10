import Link from 'next/link'
import styles from '../../styles/Footer.module.scss'
import AnchorLink from "react-anchor-link-smooth-scroll";

//icon
import { RxOpenInNewWindow } from 'react-icons/rx';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="innerArea">
        <Link href="/" className={styles.logo} scroll={false}>
          <img
            src="/sources/image/logo.png"
            alt="MAFUMI COFFEE Since 2016"
            width="80"
            height="80"
          />
        </Link>
        <ul className={styles.links}>
          <li><AnchorLink href="#menu">お品書き</AnchorLink></li>
          <li><AnchorLink href="#access">店舗情報</AnchorLink></li>
          <li><AnchorLink href="#faq">よくあるご質問</AnchorLink></li>
          <li><Link href="https://mafumicoffee.square.site/" target='_blank'>豆販売<RxOpenInNewWindow /></Link></li>
        </ul>
        <div className={styles.wrap}>
          <table className={styles.info}>
            <tbody>
              <tr>
                <th>店名</th>
                <td>眞踏珈琲店</td>
              </tr>
              <tr>
                <th>住所</th>
                <td>〒101-0052 東京都千代田区神田小川町3-1-7</td>
              </tr>
              <tr>
                <th>営業時間</th>
                <td>平日・土　12:00 - 23:00（L.0. 22:30）<br />日・祝　　12:00 - 21:00（L.0. 20:30）</td>
              </tr>
              <tr>
                <th>定休日</th>
                <td>年中無休</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.snsLinks}>
            <Link href="https://twitter.com/mafumicoffee" target='_blank'>
              <figure><img src="/sources/image/icon_twitter.png" alt="" /></figure>
            </Link>
            <Link href="https://www.facebook.com/mafumi.coffee" target='_blank'>
              <figure><img src="/sources/image/icon_facebook.png" alt="" /></figure>
            </Link>
            <Link href="https://www.instagram.com/mafumi.coffee/?hl=ja" target='_blank'>
              <figure><img src="/sources/image/icon_instagram.png" alt="" /></figure>
            </Link>
          </div>
        </div>
        <p className={styles.copyright}>©2016 Mafumi Coffee All Rights Reserved.</p>
      </div>
    </footer>
  )
}