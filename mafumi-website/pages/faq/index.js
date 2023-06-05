import Accordion from '../../components/Accordion'
import KeyVisual from '../../components/KeyVisual'
import Footer from '../../components/Footer'

export default function Faq() {
  return (
    <>
      <main>
        <KeyVisual title ="FAQ" imageName="/keyVisual/bgCoffee.jpg" />
        <section className="sectionArea">
          <div className="innerArea">
            <div className="faqWrap">
              <h2 className="title01">珈琲豆について</h2>
              <Accordion heading="珈琲豆は何を使っていますか？" content="ブラジルサントスNo.2スクリーン19番を使っています。" />
              <Accordion heading="珈琲豆は販売していますか？" content="販売しております。メールにてご連絡いただくか、オンラインストア（ https://mafumicoffee.square.site/ ）からご購入ください。" />
            </div>
            <div className="faqWrap">
              <h2 className="title01">アクセスについて</h2>
              <Accordion heading="道に迷いました。" content="お店までお電話をいただければ道順をご案内いたします。" />
            </div>
            <div className="faqWrap">
              <h2 className="title01">店内について</h2>
              <Accordion heading="携帯は充電できますか？" content="充電可能です。2階は全席にコンセントを配置しており、ご自由にお使いいただけます。" />
              <Accordion heading="Wi-Fiは使えますか？" content="使えます。スタッフまでお声がけください。" />
              <Accordion heading="店内にある本は売っていますか？" content="申し訳ありません、マスターの私物のため販売しておりません。" />
              <Accordion heading="店内にある本は読んでいいのですか？" content="どなたでも自由に閲覧いただけます。高いところにある本は2階に上がってすぐに置いてある青い脚立をお使いください。" />
              <Accordion heading="タバコは吸えますか？" content="申し訳ありません、全席禁煙となっています。" />
              <Accordion heading="支払いは何が使えますか？" content="現金、クレジットカード、電子マネー、PayPayをご利用いただけます。" />
              <Accordion heading="忘れものをしました。" content="メールあるいはTwitterのDM（ https://twitter.com/mafumicoffee ）にてご連絡ください。" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
