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
          <div className='logo'>
            <img
              src="/sources/image/logoText.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}