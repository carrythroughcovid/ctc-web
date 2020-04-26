import fetch from 'node-fetch'
import categories from './src/utils/categoryMappings'

export const sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  delete configOptions.plugins

  const processEntity = (entityName, entity) => {
    const nodeId = createNodeId(`${entityName}-${entity.id}`)
    const nodeContent = JSON.stringify(entity)
    const nodeData = Object.assign({}, entity, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: entityName,
        content: nodeContent,
        contentDigest: createContentDigest(entity),
      },
    })
    return nodeData
  }

  const apiEndpoint = 'https://carrythroughcovid.herokuapp.com/api'

  const response = await fetch(`${apiEndpoint}/businesses`)
  const data = await response.json()
  data.forEach(business => {
    const nodeData_1 = processEntity(`Businesses`, business)
    createNode(nodeData_1)
  })
}

export const createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allBusinesses {
        edges {
          node {
            name
            id
            slug
          }
        }
      }
    }
  `)
  data.allBusinesses.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: `business/${slug}`,
      component: require.resolve(`./src/templates/BusinessDetailsPage.js`),
      context: { slug },
    })
  })
  categories.forEach(({ slug, name }) => {
    actions.createPage({
      path: `category/${slug}`,
      component: require.resolve(`./src/templates/CategoryLandingPage.js`),
      context: { slug, name },
    })
  })
}
