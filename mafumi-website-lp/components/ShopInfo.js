// import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/ShopInfo.module.scss'

//icon
import { BsTelephone } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';

export default function shopInfo() {
  return (
    <div className={styles.shopInfo}>
      <p className={styles.shopText}>
        <b>眞踏珈琲店</b>（<Link href="https://goo.gl/maps/BPDsnHnpeWf6SfAd7" target='_blank'>Google Map</Link>）<br />
        〒101-0052 東京都千代田区神田小川町3-1-7<br /><br />
        <b>最寄り駅</b><br />
        ・JR 御茶ノ水駅　徒歩8分<br />
        ・都営新宿線 小川町駅　徒歩6分<br />
        ・東京メトロ 神保町駅　徒歩6分<br /><br />

        ※もし道に迷われてしまった場合、<br />
        　お電話をいただければ道順をご案内いたします。
      </p>
      <p className={styles.shopText}>
        <b>営業時間</b><br />
        平日・土：12:00 - 23:00（L.0. 22:30）<br />
        日・祝　：12:00 - 21:00（L.0. 20:30）<br />
        定休日	：なし（年中無休）<br /><br />
        <BsTelephone />	<a href='tel:03-6873-9351'>03-6873-9351</a><br />
        <CiMail />	mafumi.coffee@gmail.com<br />
      </p>
    </div>
  )
}










