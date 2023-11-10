import Meta from '../components/Meta'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import MainVisual from '../components/MainVisual'
import AccordionMenu from '../components/AccordionMenu'
import Gallery from '../components/Gallery'
import Gallery02 from '../components/Gallery02'
import Map from '../components/Map'
import ShopInfo from '../components/ShopInfo'
import Sns from '../components/Sns'
import MenuItem from '../components/MenuItem'
import MenuImage from '../components/MenuImage'
import AccordionFaq from '../components/AccordionFaq'
import InView from '../components/InView'

import { motion, useAnimationControls  } from "framer-motion"


export default function Home() {

  return (
    <>
      <Meta />
      <Header />
      <main>
        <motion.div
          initial={{ opacity: 0, transition: { duration: 0.4 } }} // 初期状態
          animate={{ opacity: 1, transition: { duration: 0.4 } }} // マウント時
          exit={{ opacity: 0, transition: { duration: 0 } }}    // アンマウント時
        >
        <MainVisual />

        <div className='bgWrap'>

        <InView content={
        <section className="sectionArea" id='menu'>
          <div className="innerArea">
            <h2 className='title03'>お品書き</h2>

            <AccordionMenu
              title="珈琲"
              content={
                <div className='twoColumn'>
                <div className="menuImageWrap">
                  <MenuImage imageName="/sources/image/menu/coffee_img_01.jpg" title="珈琲 琥珀" />
                  <MenuImage imageName="/sources/image/menu/coffee_img_02.jpg" title="珈琲 水瑠璃" />
                  <MenuImage imageName="/sources/image/menu/coffee_img_03.jpg" title="カフェ・アイランダイズ" />
                </div>
                <div className="menuWrap">
                  <MenuItem
                    ja="珈琲 琥珀"
                    en="Cafe Amber (Regular Coffee)"
                    explain="自家焙煎したブラジル・サントスNo.2 スクリーンNo.19 をネルドリップで丁寧に淹れます。琥珀は100ccでご提供いたします。"
                    price="900"
                  />
                  <MenuItem
                    ja="珈琲 眞紅"
                    en="Cafe Crimson Lake (Demitasse)"
                    explain="自家焙煎したブラジル・サントスNo.2 スクリーンNo.19 をネルドリップで丁寧に淹れます。眞紅は50ccでご提供いたします。"
                    price="1,200"
                  />
                  <MenuItem
                    ja="珈琲 水瑠璃"
                    en="Cafe Lapis Lazuli (Iced Coffee)"
                    explain="15時間かけて抽出する水出しの珈琲。ウイスキィのような、官能的な、味わい。"
                    price="900"
                  />
                  <MenuItem
                    ja="珈琲 紺碧"
                    en="Cafe Azure (Iced Demitasse)"
                    explain="濃厚な珈琲と、クリィム。苦味と、甘み。"
                    price="1,200"
                  />
                  <MenuItem
                    ja="カフェ・オ・レ"
                    en="Cafe au Lait"
                    explain="珈琲と、ミルク。"
                    price="900"
                  />
                  <MenuItem
                    ja="カフェ・ヴィエヌワ"
                    en="Cafe Viennois"
                    explain="珈琲のうえに、たっぷりのクリィムを。"
                    price="1,000"
                  />
                  <MenuItem
                    ja="カフェ・ロワイヤル"
                    en="Cafe Royal"
                    explain="ブランデの染み込んだ角砂糖に、火を、灯す。"
                    price="1,000"
                  />
                  <MenuItem
                    ja="ブラン・エ・ノワール"
                    en="Blanc et noir"
                    explain="珈琲と、クリィム。黒と白。甘くて、冷たい珈琲。"
                    price="1,000"
                  />
                  <MenuItem
                    ja="カフェ・アイランダイズ"
                    en="Irlandais"
                    explain="ウイスキィ、珈琲、生クリィム。身も心も、温まる。"
                    price="1,100"
                  />
                </div>
              </div>
              }
            />

            <AccordionMenu
              title="紅茶"
              content={
                <div className='twoColumn'>
                <div className="menuImageWrap">
                  <MenuImage imageName="/sources/image/menu/tea_img_01.jpg" title="紅茶" />
                </div>
                <div className="menuWrap">
                  <MenuItem ja="紅茶" en="Tea" price="900" />
                  <MenuItem ja="アイスティ" en="Iced Tea" price="900" />
                  <MenuItem ja="ミルクティ" en="Tea with Milk" price="900" />
                  <MenuItem ja="ロイヤルミルクティ" en="Stewed Tea" price="1,000" />
                </div>
              </div>
              }
            />

            <AccordionMenu
              title="他お飲み物"
              content={
                <div className='twoColumn'>
                <div className="menuImageWrap">
                  <MenuImage imageName="/sources/image/menu/other_img_01.jpg" title="浅葱色のくりぃむそぉだ" />
                  <MenuImage imageName="/sources/image/menu/other_img_02.jpg" title="熱帯のシトロナード" />
                </div>
                <div className="menuWrap">
                  <MenuItem ja="ホット・チョコレート" en="Hot Chocolate" price="1,000" />
                  <MenuItem ja="オレンジジュース" en="Orange Juice" price="1,000" />
                  <MenuItem ja="グレープフルーツジュース" en="Grapefruit Juice" price="1,000" />
                  <MenuItem ja="浅葱色のくりぃむそぉだ" en="Soda Float" price="1,100" />
                  <MenuItem ja="熱帯のシトロナード" en="Citronnade" price="1,100" />
                </div>
              </div>
              }
            />

            <AccordionMenu
              title="お酒"
              content={
                <div className='twoColumn'>
                <div className="menuImageWrap">
                  <MenuImage imageName="/sources/image/menu/liquor_img_01.jpg" title="パーリンカ" />
                  <MenuImage imageName="/sources/image/menu/liquor_img_03.jpg" title="コレクションの一部" />
                </div>
                <div className="menuWrap">
                  <MenuItem ja="ビール [ハートランド]" en="Beer" price="900" />
                  <MenuItem ja="ハウスワイン [赤／白]" en="Wine" price="900" />
                  <MenuItem ja="ジン [ヘンドリクス]" en="Gin" price="1,000~" />
                  <MenuItem ja="ウイスキィ [シングルモルト各種]" en="Whisky" price="1,000~" />
                  <MenuItem ja="ブランデー [各種]" en="Whisky" price="1,000" />
                  <MenuItem ja="サングリアは燃える星のことを想う" en="Sangria" price="1,200" />
                  <MenuItem ja="パーリンカ [各種]" en="Pálinka" price="1,500~" />
                </div>
              </div>
              }
            />

            <AccordionMenu
              title="甘味・軽食"
              content={
                <div className='twoColumn'>
                <div className="menuImageWrap">
                  <MenuImage imageName="/sources/image/menu/snack_img_01.jpg" title="プリン" />
                  <MenuImage imageName="/sources/image/menu/snack_img_02.jpg" title="季節のレアチーズケーキ（マスカット）" />
                </div>
                <div className="menuWrap">
                  <MenuItem
                    ja="お飲物と、ケーキ"
                    en="Cake Combo"
                    explain="（季節のレアチーズケーキ・ベイクドチーズケーキ・ガトォショコラ）"
                    price="1,450~" />
                  <MenuItem ja="お飲物と、珈琲ゼリィ" en="Coffee Jelly Combo" price="1,450~" />
                  <MenuItem ja="お飲物と、プリン" en="Pudding Combo" price="1,450~" />
                  <MenuItem ja="珈琲と、3種のチーズ" en="Coffee with Three Kinds of Cheese" price="1,450~" />
                </div>
              </div>
              }
            />

            <AccordionMenu
              title="お食事"
              content={
                <div className='twoColumn'>
                  <div className="menuImageWrap">
                    <MenuImage imageName="/sources/image/menu/food_img_01.jpg" title="カレーライス" />
                    <MenuImage imageName="/sources/image/menu/food_img_02.jpg" title="ルッコラの海に溺れるクロックムッシュ" />
                  </div>
                  <div className="menuWrap">
                    <MenuItem
                      ja="カレーライス"
                      en="Curry and Rice"
                      explain="お飲物がお付きいたします。"
                      price="1,600" />
                    <MenuItem
                      ja="ルッコラの海に溺れるクロックムッシュ"
                      en="Croque Monsieur"
                      explain="お飲物がお付きいたします。"
                      price="1,600" />
                  </div>
                </div>
              }
            />

            <AccordionMenu
              title="珈琲豆・珈琲券・お持ち帰り"
              content={
                <div className="menuWrap">
                  <MenuItem ja="珈琲豆 200g" en="Coffee Beans 200g" price="1,300" />
                  <MenuItem ja="珈琲券 10枚つづり" en="Coffee Ticket (a sheet of 10 coupons)" price="8,000" />
                  <MenuItem ja="おもちかえり珈琲" en="Take Out Coffee" price="600" />
                  <MenuItem ja="瓶詰水瑠璃" en="Bottled Cafe Lapis Lazuli (Iced Coffee)" price="1,500" />
                </div>
              }
            />

          </div>
        </section>
        } />

        <Gallery />

        <InView content={
          <section className="sectionArea" id='access'>
            <div className="innerArea">
              <h2 className='title03'>店舗情報</h2>
            </div>
            <Map />
            <ShopInfo />
          </section>
          } />

        <Gallery02 />
        <InView content={
          <section className="sectionArea" id='faq'>
            <div className="innerArea">
              <h2 className='title03'>よくあるご質問</h2>
              <AccordionFaq />
            </div>
          </section>
        } />

        <Sns />

        </div>

        </motion.div>
      </main>
      <Footer />
    </>
  )
}
