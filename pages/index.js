import Layout from '../components/common/Layout'
import SoccerCardsList from '../components/cards/list/List'
import ALL_CARDS from '../lib/allCards'

const MyCards = ( ) => {
  return (
    <Layout title="My Cards" showTitle="My Cards">
      <SoccerCardsList cards={ALL_CARDS} />
    </Layout>
  )
}
export default MyCards
