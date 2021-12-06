export default function PurchaseData ({ data }) {

  if ( !data ) return ( <div>No data</div> );

  return (
    <section>
      <header>
        <div>Purchased on { data.date }</div>
      </header>
      <div>Delivered in { data.wallet }</div>
      <br />
      <div>
        Billed to:<br />{ data.billed }
      </div>
    </section>
  )
}
