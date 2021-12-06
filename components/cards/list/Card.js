import Link from 'next/link'

import CardEmv from './CardEmv'

import Styles from './Card.module.scss'

export default function SoccerCard ({ card, id }) {

  const cardLink = `/card/${id}`;

  return (
    <article className={Styles.card}>
      <div className={Styles.data}>
        <div>
          <a href={cardLink}>
            IMAGE
          </a>
        </div>
        <header className={Styles.header}>
          <h2>
            <Link href={cardLink}>
              {card.name}
            </Link>
          </h2>
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
