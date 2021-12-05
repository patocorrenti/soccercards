import Link from 'next/link'

import Styles from './Navigation.module.scss'

export default function Navigation ({ active }) {
  return (
    <nav class={Styles.navigation}>
        <Link href="/">
          <a class={Styles.link}>Dashboard</a>
        </Link>
        <Link href="/">
          <a class={Styles.link}>My Cards</a>
        </Link>
        <Link href="/">
          <a class={Styles.link}>Market</a>
        </Link>
        <Link href="/">
          <a class={Styles.link}>Support</a>
        </Link>
    </nav>
  )
}
