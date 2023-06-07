import Image from 'next/image'
import styles from '../styles/ShopInfo.module.scss'

export default function shopInfo() {
  return (
    <div className={styles.shopInfo}>
      <h2 className='title03'>Shop Information</h2>
      <div className={styles.shopWrap}>
        <div className={styles.image}>
          <figure>
            <Image
              src="/shop.jpg"
              alt=""
              fill
              cover
            />
          </figure>
        </div>
        <table className={styles.table}>
          <tbody>
            <tr>
              <th>住所</th>
              <td>〒101-0052  東京都千代田区神田小川町3-1-7</td>
            </tr>
            <tr>
              <th>営業時間</th>
              <td>
              平日・土　12:00 - 23:00（L.0. 22:30）<br />
              日・祝　　12:00 - 21:00（L.0. 20:30）
              </td>
            </tr>
            <tr>
              <th>定休日</th>
              <td>なし（年中無休）</td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>03-6873-9351</td>
            </tr>
            <tr>
              <th>メールアドレス</th>
              <td>mafumi.coffee@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}










