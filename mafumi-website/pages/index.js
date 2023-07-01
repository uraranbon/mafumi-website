import Meta from '../components/Meta'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MainVisual from '../components/MainVisual'
import PageNav from '../components/PageNav'
import Gallery from '../components/Gallery'
import Map from '../components/Map'
import ShopInfo from '../components/ShopInfo'
import Sns from '../components/Sns'
import styles from '../styles/Home.module.scss'
import { motion } from "framer-motion"

// import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Meta />
      <Header />
      <main>
        <motion.div
             initial={{ opacity: 0, transition: { duration: 0.4 } }} // 初期状態
             animate={{ opacity: 1, transition: { duration: 0.4 } }} // マウント時
             exit={{ opacity: 0, transition: { duration: 0 } }}    // アンマウント時
        >
        <MainVisual />
        <section className="sectionArea bgBrown">
          <div className="innerArea">
            <PageNav
              linkTo="/menu"
              imageName="/sources/image/pageNav/nav_coffee.jpg"
              title="お品書き"
              content={<>ブラジル、サントスNo.2、<br />スクリーン19番を使用した<br />ストレート珈琲をご用意しております。<br /><br />ブラジルの苦み、そしてその中にある<br />仄かな甘味を、堪能ください。</>}
              linkName="詳細はこちら"
            />
            <PageNav
              linkTo="/about"
              imageName="/sources/image/pageNav/nav_books.jpg"
              title="眞踏珈琲店について"
              content={<>約3,000冊の本に囲まれながら<br />珈琲をお楽しみいただけます。</>}
              linkName="詳細はこちら"
            />
            <PageNav
              linkTo="/access"
              imageName="/sources/image/pageNav/nav_access.jpg"
              title="店舗情報"
              content="店舗情報はこちらからご確認ください。"
              linkName="詳細はこちら"
            />
            <PageNav
              linkTo="https://mafumicoffee.square.site/"
              imageName="/sources/image/pageNav/nav_beans.jpg"
              title="オンラインショップ"
              content={<>珈琲豆をご購入いただける<br />オンラインショップを用意しております。</>}
              linkName="詳細はこちら"
            />
          </div>
        </section>
        <div className={styles.bgWrap}>
        <Gallery />
          <section className="sectionArea" id='access'>
            <div className="innerArea">
            <h2 className='title03'>店舗情報</h2>
              <ShopInfo />
            </div>
          </section>
          <Map />
          <Sns />
        </div>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
