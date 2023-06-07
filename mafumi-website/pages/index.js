import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Map from '../components/Map'
import Gallery from '../components/Gallery'
import ShopInfo from '../components/ShopInfo'
import Sns from '../components/Sns'
import styles from '../styles/Home.module.scss'

//import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Meta />
      <Header />
      <main>
        <Gallery />
        <section className="sectionArea">
          <div className="innerArea">
            <ShopInfo />
          </div>
        </section>
        <Map />
        <Sns />
      </main>
      <Footer />
    </>
  )
}
