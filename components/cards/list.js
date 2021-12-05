import SoccerCard from "./card"

export default function SoccerCardsList ({ cards = [] }) {
  return (
    cards.length
      ? <ul>{ cards.map(card => <li><SoccerCard card={card}/></li> ) }</ul>
      : <div>There are no cards</div>
  )
}
