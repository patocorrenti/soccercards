import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

import Styles from './CardEmv.module.scss'

export default function CardEmv ({ emv }) {

  if ( ! emv ) return ( <div>No EMV data</div> )

  const evoStyle = getEvolutionStyle( emv.evolution );

  return (
    <div className={Styles.emv}>
      <span className={Styles.legend}>
        EMV
      </span>
      <span className={Styles.ethsym}>
        <FontAwesomeIcon icon={faEthereum} className={Styles.icon} />
      </span>
      <span className={`${Styles.value} ${evoStyle}`}>
        <span className={Styles.price}>
          { emv.emv || '???' }
        </span>
        <span className={Styles.evolution}>
          { emv.evolution === 'up' && <FontAwesomeIcon icon={faLongArrowAltUp} className={Styles.up} /> }
          { emv.evolution === 'down' && <FontAwesomeIcon icon={faLongArrowAltDown} className={Styles.down} /> }
        </span>
      </span>
    </div>
  )
}

function getEvolutionStyle( evo ) {
  if ( ! evo ) return '';
  return evo === 'up' ? Styles.up : Styles.down;
}
