import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import ReactMomentCountDown from 'react-moment-countdown'
import moment from 'moment'

import Styles from './Delivery.module.scss'

export default function Deliver ({ deliveryDate }) {

  const deliveryDateObj = new Date(deliveryDate);

  return (
    <div className={Styles.delivery}>
      <div className={Styles.question}>
        <FontAwesomeIcon icon={faQuestionCircle} className={Styles.icon} />
      </div>
      <div className={Styles.date}>
        <ReactMomentCountDown toDate={deliveryDateObj} targetFormatMask='DD \d\a\y\s, HH:mm:ss' />
      </div>
    </div>
  )
}
