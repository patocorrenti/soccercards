import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import Styles from './CardImage.module.scss'

export default function CardImage ({ card, id, size }) {

  const cardLink = id ? `/card/${id}` : '';

  const primaryColor = { backgroundColor: `#${card.team?.color_1 || '8C8C8C'}` }
  const secondaryColor = { backgroundColor: `#${card.team?.color_2 || 'EEEEEE'}` }

  const imageUrl = `/cards/${card.image}`
  const imageSize = size === 'big' ? [346, 255] : [290, 214]
  const image = getImage(imageUrl, imageSize)

  const teamLogo = card.team?.logo ? `/teams/${card.team.logo}` : ''
  const teamLogoSize = size === 'big' ? 98 : 70

  return (
    <div className={Styles.image} style={{maxWidth: imageSize[ 0 ]}}>
      { size !== 'big' && <div className={Styles.colorsec} style={secondaryColor}></div> }
      { cardLink ? <a href={cardLink}>{ image }</a> : image }
      { card.deliver_date &&
        <div className={Styles.deliver}>
          <div className={Styles.question}>
            <FontAwesomeIcon icon={faQuestionCircle} className={Styles.icon} />
          </div>
          <div className={Styles.date}>
            1 day, 22:55:24
          </div>
        </div>
      }
      <div className={Styles.colorpri} style={primaryColor}></div>
      <div className={Styles.logo}>
        { teamLogo && <Image src={teamLogo} width={teamLogoSize} height={teamLogoSize} alt="Team logo"/> }
      </div>
    </div>
  )

}

function getImage(image, imageSize) {
  return (
    <Image
      src={image}
      width={imageSize[ 0 ]}
      height={imageSize[ 1 ]}
      alt="Player picture"
    />
  )
}
