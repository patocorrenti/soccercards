import SoccerCard from "./Card"
import Styles from './List.module.scss'

export default function SoccerCardsList ({ cards = [] }) {
  return (
    cards.length
      ? <ul className={Styles.list}>
          { cards.map(card => <li><SoccerCard card={card}/></li> ) }
        </ul>
      : <div>There are no cards</div>
  )
}
