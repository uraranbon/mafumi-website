
import ShopInfo from '../../components/ShopInfo'
import Map from '../../components/Map'
import PageLayout from '../../components/layout/PageLayout'
import PageButtonMenu from '../../components/PageButtonMenu'
import PageButtonFaq from '../../components/PageButtonFaq'
import styles from '../../styles/About.module.scss'

export default function Beans() {
  return (
    <>
      <PageLayout
        pageEn="About Us"
        kvImage="/sources/image/keyVisual/bg_beans.jpg"
        pageContents={
        <>
          <section className="sectionArea">
            <div className="innerArea">
              <div className="contentWrap">
                <h2 className='title03'>Coffee</h2>
                <p className={styles.intro}>
                  ブラジル、サントスNo.2、スクリーン19番を使用したストレート珈琲をご用意しております。<br />
                  ブラジルの苦み、そしてその中にある仄かな甘味を、堪能ください。
                </p>
                <div className={styles.gallery}>
                  <div className={styles.image01}>
                    <figure><img src="/sources/image/about/coffee_img_01.jpg" alt="" /></figure>
                    <span className={styles.explain}>店の2階にて自家焙煎</span>
                  </div>
                  <div className={styles.image02}>
                    <figure><img src="/sources/image/about/coffee_img_02.jpg" alt="" /></figure>
                    <span className={styles.explain}>ネルドリップで丁寧に抽出</span>
                  </div>
                  <div className={styles.image03}>
                    <figure><img src="/sources/image/about/coffee_img_03.jpg" alt="" /></figure>
                    <span className={styles.explain}>丁寧に抽出された珈琲をお楽しみください</span>
                  </div>
                  <div className={styles.image04}>
                    <figure><img src="/sources/image/about/coffee_img_04.jpg" alt="" /></figure>
                    <span className={styles.explain}>水出し珈琲機</span>
                  </div>
                </div>
              </div>
              <div className="contentWrap">
                <h2 className='title03'>Books</h2>
                <p className={styles.intro}>
                階段から2階は本棚で囲まれており、マスターの蔵書約3,000冊を所蔵しています。<br />
                どなたでもお席でお読みいただけます。<br />
                <small>※本の販売はおこなっておりません。</small>
                </p>
                <div className={styles.gallery}>
                  <div className={styles.image01}>
                    <figure><img src="/sources/image/about/book_img_01.jpg" alt="" /></figure>
                    <span className={styles.explain}>階段</span>
                  </div>
                  <div className={styles.image02}>
                    <figure><img src="/sources/image/about/book_img_02.jpg" alt="" /></figure>
                    <span className={styles.explain}>2階：テーブル席</span>
                  </div>
                  <div className={styles.image03}>
                    <figure><img src="/sources/image/about/book_img_03.jpg" alt="" /></figure>
                    <span className={styles.explain}>1階：カウンター席</span>
                  </div>
                  <div className={styles.image04}>
                    <figure><img src="/sources/image/about/book_img_04.jpg" alt="" /></figure>
                    <span className={styles.explain}>2階：カウンター席</span>
                  </div>
                </div>
              </div>
              <div className="pageButtonWrap mt">
                <PageButtonMenu />
                <PageButtonFaq />
              </div>
            </div>
          </section>
        </>
        }
      />
    </>
  )
}
