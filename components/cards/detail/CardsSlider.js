import SoccerCardsList from "../list/List";
import ALL_CARDS from "../../../lib/allCards";

import Styles from './CardsSlider.module.scss'

export default function SoccerCardsSlider () {
  return (
    <div className={Styles.slider}>
      <SoccerCardsList cards={ALL_CARDS} />
    </div>
  )
}
