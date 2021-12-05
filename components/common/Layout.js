import UtilStyles from '../../styles/utils.module.scss'
import Styles from './Layout.module.scss'
import DocumentHead from './DocumentHead'
import Header from './Header'
import SectionHeader from './SectionHeader'


export default function Layout ({ children, title, showTitle }) {
  return (
    <>
      <DocumentHead title={title} />
      <div className={Styles.layout}>
        <Header />
        <div className={Styles.content}>
          <SectionHeader showTitle={showTitle} />
          <div className={UtilStyles.container}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
