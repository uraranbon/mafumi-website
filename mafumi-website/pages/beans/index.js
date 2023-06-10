
import Link from 'next/link'
import PageLayout from '../../components/layout/PageLayout'
import PageButtonMenu from '../../components/PageButtonMenu'
import PageButtonFaq from '../../components/PageButtonFaq'
import styles from '../../styles/OnlineShop.module.scss'


export default function Beans() {
  return (
    <>
      <PageLayout
        pageEn="Online Shop"
        kvImage="/sources/image/keyVisual/bg_beans.jpg"
        pageContents={
          <section className="sectionArea">
          <div className="innerArea">
            <div className="contentWrap">
              <h2 className="title01">自家焙煎珈琲豆</h2>
              <figure className={styles.thumbnail}>
                <img
                  src="/sources/image/onlineShop/beans.jpg"
                  alt=""
                />
              </figure>
              <p className={styles.intro}>
                眞踏珈琲店で焙煎したブラジル サントスNO.2 スクリーン19番の珈琲豆です。<br />
                ブラジルの苦み、そしてその中にある仄かな甘味を、堪能ください。<br /><br />
              </p>
              <h3 className="title02">料金</h3>
              <p>100グラム650円、200グラムから発送を承ります。（送料、振込料別）</p>
              <h3 className="title02">注文方法</h3>
              <p>
                お電話またはメールにてご連絡いただくか、オンラインショップからご購入ください。
              </p>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <th>メール</th>
                    <td>mafumicoffee@gmail.com</td>
                  </tr>
                  <tr>
                    <th>お電話</th>
                    <td>03-6873-9351</td>
                  </tr>
                  <tr>
                    <th>オンラインショップ</th>
                    <td><Link href="https://mafumicoffee.square.site/" target='_blank' className={styles.link01}>https://mafumicoffee.square.site/</Link></td>
                  </tr>
                </tbody>
              </table>
              <h3 className="title02">豆について</h3>
              <table className={styles.table}>
                <tbody>
                  <tr>
                    <th>名称</th>
                    <td>レギュラーコーヒー</td>
                  </tr>
                  <tr>
                    <th>原材料</th>
                    <td>コーヒー豆（生豆生産国名：ブラジル）</td>
                  </tr>
                  <tr>
                    <th>保存方法</th>
                    <td>直射日光・高温多湿を避けて保存してください。</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pageButtonWrap">
              <PageButtonMenu />
              <PageButtonFaq />
            </div>
          </div>
        </section>
        }
      />
    </>
  )
}
