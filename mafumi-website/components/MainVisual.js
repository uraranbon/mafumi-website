import styles from '../styles/MainVisual.module.scss'

export default function MainVisual() {
  return (
    <section className="mainVisual">
      <div className='innerArea'>
        <div className="message">
          <h2 className="title">
            珈琲と、本と、<br />そして無駄話を愉しむ喫茶店。
          </h2>
          <div className="background">
            <video
              src={require('../public/sources/video/kv.mp4')}
              poster="true"
              playsInline
              muted
              autoPlay
              loop
            />
          </div>
          <p className="text">
            お酒を飲まない人のための<br />バーのような存在でありたい。<br /><br />
            お店の片隅で閑か珈琲を飲む。<br />
            読書に集中する。<br />
            たまたま隣に腰掛ける知らない誰かと、<br />
            とりとめもない無駄話に、ふける。
          </p>
        </div>
      </div>
    </section>
  )
}