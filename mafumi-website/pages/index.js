import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.scss'
//import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Meta />
      <Header />
      <main>
        <section className="sectionArea">
          <div className={styles.map}>

          </div>
          <div className="innerArea">
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
