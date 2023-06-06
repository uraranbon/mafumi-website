import Meta from '../../components/Meta'
import Accordion from '../../components/Accordion'
import KeyVisual from '../../components/KeyVisual'
import PageButtonMenu from '../../components/PageButtonMenu'
import PageButtonShop from '../../components/PageButtonShop'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Faq() {
  return (
    <>
    <Meta pageTitle="FAQ" />
      <Header />
      <main>
        <KeyVisual title ="FAQ" imageName="/keyVisual/bg_coffee.jpg" />
        <section className="sectionArea">
          <div className="innerArea">
            <div className="contentWrap">
              <h2 className="title01">珈琲豆について</h2>
              <Accordion heading="珈琲豆は何を使っていますか？" content="ブラジルサントスNo.2スクリーン19番を使っています。" />
              <Accordion heading="珈琲豆は販売していますか？" content={<>販売しております。メールにてご連絡いただくか、<a href="https://mafumicoffee.square.site/" target='_blank'>オンラインストア</a>からご購入ください。</>} />
            </div>
            <div className="contentWrap">
              <h2 className="title01">アクセスについて</h2>
              <Accordion heading="道に迷いました。" content="お店までお電話をいただければ道順をご案内いたします。" />
            </div>
            <div className="contentWrap">
              <h2 className="title01">店内について</h2>
              <Accordion heading="携帯は充電できますか？" content="充電可能です。2階は全席にコンセントを配置しており、ご自由にお使いいただけます。" />
              <Accordion heading="Wi-Fiは使えますか？" content="使えます。スタッフまでお声がけください。" />
              <Accordion heading="店内にある本は売っていますか？" content="申し訳ありません、マスターの私物のため販売しておりません。" />
              <Accordion heading="店内にある本は読んでいいのですか？" content="どなたでも自由に閲覧いただけます。高いところにある本は2階に上がってすぐに置いてある青い脚立をお使いください。" />
              <Accordion heading="タバコは吸えますか？" content="申し訳ありません、全席禁煙となっています。" />
              <Accordion heading="支払いは何が使えますか？" content="現金、クレジットカード、電子マネー、PayPayをご利用いただけます。" />
              <Accordion heading="忘れものをしました。" content={<><a href="mailto:mafumi.coffee@gmail.com">メール</a>あるいは<a href="https://twitter.com/mafumicoffee" target='_blank'>TwitterのDM</a>にてご連絡ください。</>} />
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
