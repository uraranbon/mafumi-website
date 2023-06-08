import Meta from '../../components/Meta'
import KeyVisual from '../../components/KeyVisual'
// import Image from 'next/image'
import PageButtonMenu from '../../components/PageButtonMenu'
import PageButtonShop from '../../components/PageButtonShop'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import styles from '../../styles/Menu.module.scss'

export default function Recipe() {

  const dataCoffee = [
    {
      name: "珈琲豆",
      amount: "20g"
    },
  ]

  const flowCoffee = [
    {
      name: "ゆっくり滴るように注ぐ。そのとき、できるだけ外側の珈琲豆を使わずに、中心部に湯を注ぐ。"
    },
    {
      name: "40ccほどは我慢し、ゆっくりと注ぎ、蒸らす。その後はある程度、注ぐ湯量を増やす。",
    },
    {
      name: "あらかじめあたためておいたカップに珈琲を注いで、完成。",
    },
  ]

  const dataIrish = [
    {
      name: "アイリッシュウイスキィ",
      amount: "15cc"
    },
    {
      name: "珈琲",
      amount: "100cc"
    },
    {
      name: "砂糖（アイスの場合はシロップ）",
      amount: "小さじ2杯"
    },
    {
      name: "八分立てした生クリーム",
      amount: "100cc"
    },
  ]

  const flowIrish = [
    {
      name: "グラス（耐熱）に砂糖小さじ2杯を入れる。"
    },
    {
      name: "ウイスキィ15ccを軽く温め、グラスに注ぐ。",
    },
    {
      name: "珈琲をグラスに注いで、よくステアする。",
    },
    {
      name: "生クリームをのせて完成。",
    },
  ]


  return (
    <>
    <Meta pageTitle="Recipe" />
      <Header />
      <main>
        <KeyVisual title ="Recipe" imageName="/sources/image/keyVisual/bg_coffee.jpg" />
        <section className="sectionArea">
          <div className="innerArea">
            <div className="contentWrap">
              <h2 className="title01">珈琲 琥珀</h2>
              <figure className={styles.thumbnail}>
                <img
                  src="/sources/image/menu/coffee_img_01.jpg"
                  alt="珈琲 琥珀"
                  fill={true}
                />
              </figure>
              <h3 className="title02">材料（2人分／200cc）</h3>
              <ul className={styles.itemList}>
                {dataCoffee.map(({ name,amount,index }) => (
                  <li key={index}>
                    <p>{name}</p>
                    <p>{amount}</p>
                  </li>
                ))}
              </ul>
              <p className={styles.kome}>※100ccあたり10gの珈琲豆の使用を基本とし、お好みに合わせて抽出量を調整してください。<br />一度に20g以上を使用した方が、抽出が安定しやすいのでこちらでは20g 200ccといたしました。</p>
              <h3 className="title02">作り方</h3>
              <ul className={styles.flowList}>
                {flowCoffee.map(({ name,index }) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
            <div className="contentWrap">
              <h2 className="title01">カフェ・アイランダイズ（ホット・アイス）</h2>
              <figure className={styles.thumbnail}>
                <img
                  src="/sources/image/menu/coffee_img_03.jpg"
                  alt="カフェ・アイランダイズ（ホット・アイス）"
                  fill={true}
                />
              </figure>
              <h3 className="title02">材料（1人分）</h3>
              <ul className={styles.itemList}>
                {dataIrish.map(({ name,amount,index }) => (
                  <li key={index}>
                    <p>{name}</p>
                    <p>{amount}</p>
                  </li>
                ))}
              </ul>
              <h3 className="title02">作り方</h3>
              <ul className={styles.flowList}>
                {flowIrish.map(({ name,index }) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
            <div className="pageButtonWrap">
              <PageButtonMenu />
              <PageButtonShop />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
