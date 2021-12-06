import Link from 'next/link'
import Styles from './Breadcrumb.module.scss'

export default function Breadcrumb ({ data }) {
  return (
    <div className={Styles.breadcrumb}>
      {data.map( link => getLink( link ) )}
    </div>
  )
}

function getLink ( link ) {
    return ( link[ 1 ] )
      ? <span className={Styles.link}>
          <Link href={link[ 1 ]}><a>{link[ 0 ]}</a></Link>
          &nbsp;>&nbsp;
        </span>
      : <span className={Styles.current}>{link[ 0 ]}</span>
}
