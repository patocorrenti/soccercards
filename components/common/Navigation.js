import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faStore, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-regular-svg-icons';

import Styles from './Navigation.module.scss'

export default function Navigation ({ active }) {
  return (
    <nav className={Styles.navigation}>
        <Link href="/">
          <a className={Styles.link} title="Dashboard">
            <FontAwesomeIcon icon={faFutbol} className={Styles.icon} />
            <span className={Styles.legend}>Dashboard</span>
          </a>
        </Link>
        <Link href="/">
          <a className={Styles.link} title="My Cards">
            <FontAwesomeIcon icon={faIdBadge} className={Styles.icon} />
            <span className={Styles.legend}>My Cards</span>
          </a>
        </Link>
        <Link href="/">
          <a className={Styles.link} title="Market">
            <FontAwesomeIcon icon={faStore} className={Styles.icon} />
            <span className={Styles.legend}>Market</span>
          </a>
        </Link>
        <Link href="/">
          <a className={Styles.link} title="Support">
            <FontAwesomeIcon icon={faQuestion} className={Styles.icon} />
            <span className={Styles.legend}>Support</span>
          </a>
        </Link>
    </nav>
  )
}
