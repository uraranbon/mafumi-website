import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/logo.png'
import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="innerArea">
        <Link href="/" className={styles.logo}>
          <Image
            src={Logo}
            alt="MAFUMI COFFEE Since 2016"
            width="80"
            height="80"
            priority
            placeholder='blur'
          />
        </Link>
        <ul className={styles.links}>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/menu">Menu</Link></li>
          <li><Link href="/access">Access</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
          <li><Link href="/recipe">Recipe</Link></li>
          <li><Link href="https://mafumicoffee.square.site/" target='_blank'>Online Shop</Link></li>
        </ul>
        <table  className={styles.info}>
          <tbody>
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
        <p className={styles.copyright}>©2016 Mafumi Coffee All Rights Reserved.</p>
      </div>
    </footer>
  )
}