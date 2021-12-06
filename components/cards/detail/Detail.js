import CardImage from '../CardImage'
import PurchaseData from './PurchaseData'
import CardEmv from '../CardEmv'

export default function SoccerCardDetail ({ card }) {
  return (
    <article>
      <div>
        <CardImage card={card} size='big' />
        <h2>{card.name}</h2>
        <div>{card.excerpt}</div>
        <div>
          <p>
            Simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s when an unknown printer took.
          </p>
          <p>
            Mauris mattis leo nec lectus porta congue.
            Quisque id quam at velit elementum blandit sit amet id tortor.
            Proin convallis dui at magna pharetra aliquam ac nec nunc.
            Nullam fringilla eleifend risus, et porta elit gravida quis.
          </p>
        </div>
      </div>
      <PurchaseData data={card.purchase} />
      <div>
        <div>
          <div>Estimated Market Value</div>
          <div>(Based on similar items recently traded)</div>
        </div>
        <CardEmv emv={card.value} />
      </div>
      <div>
        <a href="#">Trade</a>
        <a href="#">Publish</a>
      </div>
    </article>
  )
}
