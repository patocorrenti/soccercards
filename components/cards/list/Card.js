import Link from 'next/link'

import CardImage from '../CardImage'
import CardEmv from '../CardEmv'

import Styles from './Card.module.scss'

export default function SoccerCard ({ card, id }) {

  const cardLink = id ? `/card/${id}` : ''
  const primaryColor = { backgroundColor: `#${card?.team.color_1 || '8C8C8C'}` }
  const secondaryColor = { backgroundColor: `#${card?.team.color_2 || 'EEEEEE'}` }
  const image = `/cards/${card.image}`
  const teamLogo = card.team.logo ? `/teams/${card.team.logo}` : ''

  return (
    <article className={Styles.card}>
      <CardImage card={card} id={id} />
      <div className={Styles.data}>
        <header className={Styles.header}>
          <h2>
            {
              cardLink
                ? <Link href={cardLink}>{card.name}</Link>
                : card.name
            }
          </h2>
          <div className={Styles.desc}>
            { ! card.deliver_date ? card.excerpt : 'Random card waiting to be delivered' }
          </div>
        </header>
        <footer className={Styles.footer}>
          <div className={Styles.team}>
            { ( card.team.name && card.year ) && `${card.year} - ${card.team.name} ` }
          </div>
          <div className={Styles.emv}>
            <CardEmv emv={card.value} />
          </div>
        </footer>
      </div>
    </article>
  )
}
