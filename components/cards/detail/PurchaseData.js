import { useState } from 'react'

import ButtonExpand from '../../common/ButtonExpand'

import Styles from './PurchaseData.module.scss'

export default function PurchaseData ({ data }) {

  if ( !data ) return ( <div>No data</div> )

  const [ open, setOpen ] = useState( false )

  return (
    <section className={`${Styles.purchaseData} ${ open ? Styles.open : '' }`} >
      <header>
        <div>Purchased on { data.date }</div>
        <ButtonExpand expanded={ open } onclick={ () => setOpen( ! open ) } />
      </header>
      <div className={Styles.detail}>
        <div>Delivered in { data.wallet }</div>
        <br />
        <div>
          Billed to:<br />{ data.billed }
        </div>
      </div>
    </section>
  )
}
