import { useState } from 'react'

import CardImage from '../CardImage'
import ButtonExpand from '../../common/ButtonExpand'
import PurchaseData from './PurchaseData'
import CardEmv from '../CardEmv'
import SimilarItems from './SimilarItems'
import DummyText from './DummyText'

import Styles from './Detail.module.scss'

export default function SoccerCardDetail ({ card }) {

  const [ dummyText, setDummyText ] = useState( false )

  return (
    <article className={Styles.detail}>
      <div className={Styles.deskLeft}>
        <div className={Styles.data}>
          <div className={Styles.image}>
            <CardImage card={card} size='big' />
          </div>
          <div className={`${Styles.dataMobile} ${ dummyText ? Styles.open : '' }`}>
            <h2 className={Styles.title}>
              {card.name}
            </h2>
            <div className={Styles.excerpt}>
              <div className={Styles.text}>
                {card.excerpt}
              </div>
              <ButtonExpand expanded={ dummyText } onclick={ () => setDummyText( ! dummyText ) } />
            </div>
            <div className={Styles.DummyText}>
              <DummyText />
            </div>
          </div>
        </div>
        <PurchaseData data={card.purchase} />
        <section className={Styles.emv}>
          <div>
            <div className={Styles.emv_title}>
              Estimated Market Value
              </div>
            <div className={Styles.emv_tooltip}>
              (Based on similar items recently traded)
              </div>
          </div>
          <CardEmv emv={card.value} />
        </section>
        <div className={Styles.actions}>
          <a href="#" className="button">Trade</a>
          <a href="#" className="button">Publish</a>
        </div>
      </div>
      <div className={Styles.deskRight}>
        <div className={Styles.dataDesk}>
          <h2 className={Styles.title}>{card.name}</h2>
          <div className={Styles.excerpt}>{card.excerpt}</div>
          <DummyText />
        </div>
        <div className={Styles.similarItems}>
          <SimilarItems />
        </div>
      </div>
    </article>
  )
}
