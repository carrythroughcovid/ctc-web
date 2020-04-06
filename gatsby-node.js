const fetch = require('node-fetch')
const slugify = require('slugify')

exports.sourceNodes = (
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

  return fetch(`${apiEndpoint}/businesses`)
    .then(response => response.json())
    .then(data => {
      data.forEach(business => {
        const nodeData = processEntity(`Businesses`, business)
        createNode(nodeData)
      })
    })
}

exports.createPages = async function({ actions, graphql }) {
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
}
