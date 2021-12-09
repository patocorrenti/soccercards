import Link from 'next/link'
import Styles from './Breadcrumb.module.scss'

export default function Breadcrumb ({ data }) {
  return (
    <section className={Styles.breadcrumb}>
      {data.map( ( link, index ) => getLink( link, index ) )}
    </section>
  )
}

function getLink ( link, index ) {
    return link[ 1 ]
      ? <span className={Styles.link} key={index}>
          <Link href={link[ 1 ]}><a>{link[ 0 ]}</a></Link>
          &nbsp;>&nbsp;
        </span>
      : <span className={Styles.current} key={index} title={link[ 0 ]}>{link[ 0 ]}</span>
}
