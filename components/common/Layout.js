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
        <main className={Styles.main}>
          <SectionHeader showTitle={showTitle} />
          <div className={Styles.content}>
            {children}
          </div>
        </main>
      </div>
    </>
  )
}
