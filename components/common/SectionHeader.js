import Breadcrumb from './Breadcrumb'
import Styles from './SectionHeader.module.scss'

export default function SectionHeader ({ showTitle, breadCrumb }) {
  return (
    <header className={Styles.header}>
      {showTitle && <h1>{showTitle}</h1>}
      { breadCrumb && <Breadcrumb data={breadCrumb} /> }
    </header>
  )
}
