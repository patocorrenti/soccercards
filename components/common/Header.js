import Link from 'next/link'

import Navigation from './Navigation'

import Styles from './Header.module.scss'

export default function Header () {
  return (
    <header className={Styles.header}>
      <Link href="/">
        <a className={Styles.hamburger}>Hamburger</a>
      </Link>
      LOGO
      <Navigation />
      <Link href="/" className={Styles.myaccount}>
        <a>My Account</a>
      </Link>
    </header>
  )
}
