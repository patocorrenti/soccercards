import Image from 'next/image'

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
    <div className={Styles.image}>
      { size !== 'big' && <div className={Styles.colorsec} style={secondaryColor}></div> }
      { cardLink ? <a href={cardLink}>{ image }</a> : image }
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
