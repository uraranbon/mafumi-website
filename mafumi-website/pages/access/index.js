
import ShopInfo from '../../components/ShopInfo'
import Map from '../../components/Map'
import PageLayout from '../../components/layout/PageLayout'
import PageButtonMenu from '../../components/PageButtonMenu'
import PageButtonFaq from '../../components/PageButtonFaq'

export default function Beans() {
  return (
    <>
      <PageLayout
        pageEn="店舗情報"
        kvImage="/sources/image/keyVisual/bg_flower.jpg"
        kvImageSp="/sources/image/keyVisual/bg_flower_sp.jpg"
        pageContents={
        <>
          <section className="sectionArea">
            <Map />
            <ShopInfo />
          </section>

          <section className="sectionArea">
            <div className="innerArea">
              <div className="pageButtonWrap">
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
