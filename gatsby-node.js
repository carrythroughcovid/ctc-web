const fetch = require('node-fetch')
const slugify = require('slugify')

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins
  // Helper function that processes a photo to match Gatsby's node structure
  const processBusiness = business => {
    const nodeId = createNodeId(`business-${business.id}`)
    const nodeContent = JSON.stringify(business)
    const nodeData = Object.assign({}, business, {
      id: nodeId,
      businessId: business.id,
      slug: `${slugify(business.name)}-${business.id}`,
      parent: null,
      children: [],
      internal: {
        type: `Businesses`,
        content: nodeContent,
        contentDigest: createContentDigest(business),
      },
    })
    return nodeData
  }

  const processEntity = (entityName, entity, name) => {
    const nodeId = createNodeId(`address-${entity.id}`)
    const nodeContent = JSON.stringify(entity)
    const nodeData = Object.assign({}, entity, {
      id: nodeId,
      name: name || '',
      slug: `${slugify(name || '')}-${entity.id}`,
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

  const allBusinesses = `https://carrythroughcovid.herokuapp.com/api/businesses`
  const allCategories = `https://carrythroughcovid.herokuapp.com/api/categories`
  const allOfferings = `https://carrythroughcovid.herokuapp.com/api/offerings`
  const allAddresses = `https://carrythroughcovid.herokuapp.com/api/addresses`

  fetch(allCategories)
    .then(response => response.json())
    .then(data => {
      data.forEach(category => {
        const nodeData = processEntity('Categories', category, category.name)
        createNode(nodeData)
      })
    })

  fetch(allOfferings)
    .then(response => response.json())
    .then(data => {
      data.forEach(offering => {
        const nodeData = processEntity('Offerings', offering, offering.name)
        createNode(nodeData)
      })
    })

  fetch(allAddresses)
    .then(response => response.json())
    .then(data => {
      data.forEach(address => {
        const nodeData = processEntity(
          'Addresses',
          address,
          address.suburb || ''
        )
        createNode(nodeData)
      })
    })

  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the allBusinesses
    fetch(allBusinesses)
      // Parse the response as JSON
      .then(response => response.json())
      // Process the response data into a node
      .then(data => {
        // For each business
        data.forEach(business => {
          // Process the photo data to match the structure of a Gatsby node
          const nodeData = processBusiness(business)
          // Use Gatsby's createNode helper to create a node from the node data
          createNode(nodeData)
        })
      })
  )
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
