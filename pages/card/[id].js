import { useRouter } from 'next/router'

import Layout from '../../components/common/Layout'
import SoccerCardDetail from '../../components/cards/detail/Detail'
import ALL_CARDS from '../../lib/allCards'

const CardDetail = ( ) => {
  const router = useRouter()
  const { id } = router.query
  const card = ALL_CARDS[id] || {}
  const breadCrumb = [
    ['My Cards', '/'],
    [card.name, ''],
  ]

  return (
    <Layout
      breadCrumb={breadCrumb}
      color={card?.team?.color_2}
      showTitle=""
      title={card.name}
    >
      <SoccerCardDetail card={ card } />
    </Layout>
  )
}
export default CardDetail
