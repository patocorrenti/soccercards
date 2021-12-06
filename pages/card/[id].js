import { useRouter } from 'next/router'

import Layout from '../../components/common/Layout'
import SoccerCardDetail from '../../components/cards/detail/Detail'
import ALL_CARDS from '../../lib/allCards'

const CardDetail = ( ) => {
  const router = useRouter()
  const { id } = router.query
  const card = ALL_CARDS[id] || {}

  return (
    <Layout title={card.name} showTitle="">
      <SoccerCardDetail card={ card } />
    </Layout>
  )
}
export default CardDetail
