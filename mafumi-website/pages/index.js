import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainVisual from '../components/MainVisual'
import Message from '../components/Message'
import Gallery from '../components/Gallery'
import Map from '../components/Map'
import ShopInfo from '../components/ShopInfo'
import Sns from '../components/Sns'
import styles from '../styles/Home.module.scss'

// import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Meta />
      <Header />
      <main>
        <MainVisual />
        <Message />
        <Gallery />
        <div className={styles.bgWrap}>
          <section className="sectionArea">
            <div className="innerArea">
              <ShopInfo />
            </div>
          </section>
          <Map />
          <Sns />
        </div>
      </main>
      <Footer />
    </>
  )
}
