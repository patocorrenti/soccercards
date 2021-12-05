import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

import Navigation from './Navigation'

import Styles from './Header.module.scss'

export default function Header () {
  return (
    <header className={Styles.header}>
      <Link href="/">
        <a className={Styles.hamburger} title="Menu">
          <FontAwesomeIcon icon={faBars} className={Styles.icon} />
        </a>
      </Link>
      LOGO
      <Navigation />
      <Link href="/" >
        <a className={Styles.myaccount} title="My Account">
          <FontAwesomeIcon icon={faUserCircle} className={Styles.icon} />
        </a>
      </Link>
    </header>
  )
}
