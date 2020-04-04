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

  fetch(`${apiEndpoint}/categories`)
    .then(response => response.json())
    .then(data => {
      data.forEach(category => {
        const nodeData = processEntity('Categories', category)
        createNode(nodeData)
      })
    })

  fetch(`${apiEndpoint}/offerings`)
    .then(response => response.json())
    .then(data => {
      data.forEach(offering => {
        const nodeData = processEntity('Offerings', offering)
        createNode(nodeData)
      })
    })

  fetch(`${apiEndpoint}/addresses`)
    .then(response => response.json())
    .then(data => {
      data.forEach(address => {
        const nodeData = processEntity('Addresses', address)
        createNode(nodeData)
      })
    })

  return fetch(`${apiEndpoint}/businesses`)
    .then(response => response.json())
    .then(data => {
      data.forEach(business => {
        const enrichedBusiness = {
          ...business,
          businessId: business.id,
          slug: `${slugify(business.name)}-${business.id}`,
        }
        const nodeData = processEntity(`Businesses`, enrichedBusiness)
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
            businessId
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
