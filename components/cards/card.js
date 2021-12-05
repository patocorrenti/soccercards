export default function SoccerCard ({ card }) {
  return (
    <article>
      <h2>{card.name}</h2>
      <div>
        { ! card.deliver_date ? card.excerpt : 'Random card waiting to be delivered' }
      </div>
      <div>
        <div>
          { card.team.name && `${card.team.name} ${card.year}` }
        </div>
        <div>
          EMV
          { card.value.emv || '???' }
          { card.value.evolution && card.value.evolution }
        </div>
      </div>
    </article>
  )
}
