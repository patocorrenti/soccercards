import Link from 'next/link'

import Styles from './Navigation.module.scss'

export default function Navigation ({ active }) {
  return (
    <nav className={Styles.navigation}>
        <Link href="/">
          <a className={Styles.link}>Dashboard</a>
        </Link>
        <Link href="/">
          <a className={Styles.link}>My Cards</a>
        </Link>
        <Link href="/">
          <a className={Styles.link}>Market</a>
        </Link>
        <Link href="/">
          <a className={Styles.link}>Support</a>
        </Link>
    </nav>
  )
}
