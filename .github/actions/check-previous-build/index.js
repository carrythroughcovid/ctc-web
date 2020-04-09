const axios = require('axios')
const { writeToS3, readFromS3 } = require('./utils/s3')
const { isEqual } = require('lodash')

const apiUrl = 'https://carrythroughcovid.herokuapp.com/api/businesses'
const rebuildUrl =
  'https://api.netlify.com/build_hooks/5e8b27b6a579bbfa61c420fa'

const checkPreviousBuild = async () => {
  const { data: currentBusinesses } = await axios.get(apiUrl)
  const previousBusinesses = await readFromS3()

  if (!previousBusinesses || !isEqual(previousBusinesses, currentBusinesses)) {
    await axios.post(rebuildUrl) // rebuild Netlify site
    console.log('Changes detected. Requested Netlify to rebuild site.')

    await writeToS3(currentBusinesses) // update s3 for next run
  } else {
    console.log('No changes detected. Did not rebuild.')
  }
}

checkPreviousBuild()
