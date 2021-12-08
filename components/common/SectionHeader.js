import Breadcrumb from './Breadcrumb'
import Styles from './SectionHeader.module.scss'

export default function SectionHeader ({ showTitle, breadCrumb, color }) {
  return (
    <>
      <header className={`${Styles.header} ${color && Styles.detailView}`}>
        { showTitle && <h1>{showTitle}</h1> }
        { breadCrumb && <Breadcrumb data={breadCrumb} /> }
      </header>
      { color && <div style={{backgroundColor: `#${color}`}} className={Styles.colorBar}></div> }
    </>
  )
}
