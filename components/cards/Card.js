import CardEmv from './CardEmv'

import Styles from './Card.module.scss'

export default function SoccerCard ({ card }) {
  return (
    <article className={Styles.card}>
      <div className={Styles.data}>
        <header className={Styles.header}>
          <h2>{card.name}</h2>
          <div className={Styles.desc}>
            { ! card.deliver_date ? card.excerpt : 'Random card waiting to be delivered' }
          </div>
        </header>
        <footer className={Styles.footer}>
          <div className={Styles.team}>
            { ( card.team.name && card.year ) && `${card.year} - ${card.team.name} ` }
          </div>
          <CardEmv emv={card.value} />
        </footer>
      </div>
    </article>
  )
}
