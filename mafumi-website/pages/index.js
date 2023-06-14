import Meta from '../components/Meta'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import MainVisual from '../components/MainVisual'
import Message from '../components/Message'
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
          initial={{ opacity: 0 }} // 初期状態
          animate={{ opacity: 1 }} // マウント時
          exit={{ opacity: 0 }}    // アンマウント時
          transition={{ duration: 0.5, ease: "ease" }}
        >
        <MainVisual />
        <Message />
        <section className="sectionArea bgBrown">
          <div className="innerArea">
            <PageNav
              linkTo="/menu"
              imageName="/sources/image/pageNav/nav_coffee.jpg"
              title="Coffee"
              content={<>ブラジル、サントスNo.2、<br />スクリーン19番を使用した<br />ストレート珈琲をご用意しております。<br /><br />ブラジルの苦み、そしてその中にある<br />仄かな甘味を、堪能ください。</>}
              linkName="Menu"
            />
            <PageNav
              linkTo="/about"
              imageName="/sources/image/pageNav/nav_books.jpg"
              title="Books"
              content={<>約3,000冊の本に囲まれながら<br />珈琲をお楽しみいただけます。</>}
              linkName="About Us"
            />
            <PageNav
              linkTo="#access"
              imageName="/sources/image/pageNav/nav_access.jpg"
              title="Access"
              content="店舗情報はこちらからご確認ください。"
              linkName="Shop Information"
            />
            <PageNav
              linkTo="https://mafumicoffee.square.site/"
              imageName="/sources/image/pageNav/nav_beans.jpg"
              title="Beans"
              content={<>珈琲豆をご購入いただける<br />オンラインショップを用意しております。</>}
              linkName="Online Shop"
            />
          </div>
        </section>
        <div className={styles.bgWrap}>
        <Gallery />
          <section className="sectionArea" id='access'>
            <div className="innerArea">
            <h2 className='title03'>Shop Information</h2>
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
