import Styles from './Layout.module.scss'
import DocumentHead from './DocumentHead'
import Header from './Header'
import SectionHeader from './SectionHeader'

export default function Layout ({ children, title, showTitle, breadCrumb }) {
  return (
    <>
      <DocumentHead title={title} />
      <div className={Styles.layout}>
        <Header />
        <main className={Styles.main}>
          <SectionHeader showTitle={showTitle} breadCrumb={breadCrumb} />
          <div className={Styles.content}>
            {children}
          </div>
        </main>
      </div>
    </>
  )
}
