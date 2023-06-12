import Link from 'next/link'
import Accordion from '../../components/Accordion'
import PageButtonMenu from '../../components/PageButtonMenu'
import PageButtonShop from '../../components/PageButtonShop'
import PageLayout from '../../components/layout/PageLayout'

export default function Faq() {
  return (
    <PageLayout
      pageEn="FAQ"
      kvImage="/sources/image/keyVisual/bg_coffee.jpg"
      kvImageSp="/sources/image/keyVisual/bg_coffee_sp.jpg"
      pageContents={
        <section className="sectionArea">
        <div className="innerArea">

          <div className="contentWrap" id='beans'>
            <h2 className="title01">珈琲豆について</h2>
            <Accordion heading="珈琲豆は何を使っていますか？" content="店内で焙煎されたブラジルサントスNo.2スクリーン19番を使用しております。" />
            <Accordion heading="珈琲豆は販売していますか？" content={<>販売しております。オンラインストアからご購入ください。クレジットカードを使えない方は<a href="mailto:mafumi.coffee@gmail.com?subject=%E7%8F%88%E7%90%B2%E8%B1%86%E3%81%AE%E6%B3%A8%E6%96%87&amp;body=%E4%BB%A5%E4%B8%8B%E3%81%AE%E6%83%85%E5%A0%B1%E3%82%92%E5%85%A5%E5%8A%9B%E3%81%97%E3%81%A6%E3%80%81%E9%80%81%E4%BF%A1%E3%82%92%E3%81%8A%E9%A1%98%E3%81%84%E3%81%84%E3%81%9F%E3%81%97%E3%81%BE%E3%81%99%E3%80%82%0A%0A%E3%81%8A%E5%90%8D%E5%89%8D:%0A%E9%83%B5%E4%BE%BF%E7%95%AA%E5%8F%B7:%0A%E4%BD%8F%E6%89%80:%0A%E9%9B%BB%E8%A9%B1%E7%95%AA%E5%8F%B7:%0A%E8%B1%86%E3%81%AE%E6%8C%BD%E3%81%8D%E6%96%B9:">メール</a>（mafumi.coffee@gmail.com）からご注文ください。100グラム650円、200グラムから発送を承ります。（送料、振込料別）</>} />
          </div>
          <div className="contentWrap" id='access'>
            <h2 className="title01">アクセスについて</h2>
            <Accordion heading="道に迷いました。" content="お店までお電話をいただければ道順をご案内いたします。" />
          </div>
          <div className="contentWrap" id='store'>
            <h2 className="title01">店内について</h2>
            <Accordion heading="携帯は充電できますか？" content="充電可能です。全席にコンセントを配置しており、ご自由にお使いいただけます。" />
            <Accordion heading="Wi-Fiは使えますか？" content="お使いいただけます。どうぞスタッフまでお声がけください。" />
            <Accordion heading="店内にある本は売っていますか？" content="申し訳ありません、マスターの私物のため販売しておりません。" />
            <Accordion heading="店内にある本は読んでいいのですか？" content="どなたでも自由にお読みいただけます。高いところにある本は2階に上がってすぐに置いてある青い脚立をお使いください。" />
            <Accordion heading="タバコは吸えますか？" content="申し訳ございません。全席禁煙となっています。お近くの喫煙所をご案内いたします。" />
            <Accordion heading="支払いは何が使えますか？" content="現金、クレジットカード、電子マネー、PayPayをご利用いただけます。" />
            <Accordion heading="忘れものをしました。" content={<><a href="mailto:mafumi.coffee@gmail.com">メール</a>（mafumi.coffee@gmail.com）あるいは<a href="https://twitter.com/mafumicoffee" target='_blank'>TwitterのDM</a>にてご連絡ください。</>} />
          </div>
          <div className="pageButtonWrap mt">
            <PageButtonMenu />
            <PageButtonShop />
          </div>
        </div>
      </section>
      }
    />
  )
}