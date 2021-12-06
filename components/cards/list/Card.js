import Link from 'next/link'

import CardEmv from './CardEmv'

import Styles from './Card.module.scss'

export default function SoccerCard ({ card, id }) {

  const cardLink = `/card/${id}`
  const primaryColor = { backgroundColor: `#${card.team.color_1 || 'fff'}` }
  const secondaryColor = { backgroundColor: `#${card.team.color_2 || 'fff'}` }

  return (
    <article className={Styles.card}>
      <div className={Styles.image}>
        <div className={Styles.colorsec} style={secondaryColor}></div>
        <a href={cardLink}>
          IMAGE
        </a>
        <div className={Styles.colorpri} style={primaryColor}></div>
      </div>
      <div className={Styles.data}>
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
