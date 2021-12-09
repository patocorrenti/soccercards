import SoccerCardsSlider from './CardsSlider'
import Styles from './SimilarItems.module.scss'

export default function SimilarItems () {
  return (
    <section className={Styles.similarItems}>
      <h3 className={Styles.similarItems_title}>
        Similar items for sale
      </h3>
      <div className={`sc_slider ${Styles.similarItems_slides}`}>
        <SoccerCardsSlider />
      </div>
    </section>
  )
}
