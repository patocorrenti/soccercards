import CardImage from '../CardImage'

export default function SoccerCardDetail ({ card }) {
  return (
    <article>
      <CardImage card={card} size='big' />
      <div>
        <h2>{card.name}</h2>
        <div>{card.excerpt}</div>
      </div>
    </article>
  )
}
