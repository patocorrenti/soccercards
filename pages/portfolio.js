import client from '../lib/client'
import GET_PROJECTS from '../lib/queries/get-projects'
import Layout from '../components/common/layout'
import Projects from '../components/portfolio/projects'

const Portfolio = ({ projects }) => {
  return (
    <Layout
      title="Portfolio"
      showTitle="Portfolio"
    >
      <Projects projects={projects} />
    </Layout>
  )
}
export default Portfolio

export async function getStaticProps() {

  const { data } = await client.query({
    query: GET_PROJECTS
  })

  const projects = data.posts
    ? data.posts.edges.map(post => post.node)
    : []

  return {
    props: {
      projects: projects
    }
  }

}
