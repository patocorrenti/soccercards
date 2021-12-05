import Styles from './SectionHeader.module.scss'

export default function SectionHeader ({ showTitle }) {
  return (
    <header className={Styles.header}>
      {showTitle && <h1>{showTitle}</h1>}
    </header>
  )
}
