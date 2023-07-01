import AccordionFaq from '../../components/AccordionFaq'
import PageButtonMenu from '../../components/PageButtonMenu'
import PageButtonShop from '../../components/PageButtonShop'
import PageLayout from '../../components/layout/PageLayout'

export default function Faq() {
  return (
    <PageLayout
      pageEn="よくあるご質問"
      kvImage="/sources/image/keyVisual/bg_coffee.jpg"
      kvImageSp="/sources/image/keyVisual/bg_coffee_sp.jpg"
      pageContents={
        <section className="sectionArea">
        <div className="innerArea">
          <AccordionFaq />
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