import styles from '../styles/Message.module.scss'

export default function Message() {
  return (
    <section className="sectionArea">
      <div className='innerArea'>
        <h2 className={styles.title}>
          珈琲と、本と、<br />そして無駄話を愉しむ喫茶店。
        </h2>
        <p className={styles.text}>
          眞踏珈琲店は、<br />
          神保町にて2016年9月に開店しました。<br /><br />
          約3,000冊の蔵書に囲まれ、<br />
          お酒を飲めない人でもバーのような雰囲気を<br />
          楽しんでほしい。<br />
          そのような想いから生まれました。<br /><br />
          スタッフ一同、<br />
          皆様のお越しを心よりお待ちしております。
        </p>
      </div>
    </section>
  )
}