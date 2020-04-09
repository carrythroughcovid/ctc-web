const AWS = require('aws-sdk')
const core = require('@actions/core')

AWS.config.update({
  accessKeyId: core.getInput('s3AccessKey'),
  secretAccessKey: core.getInput('s3SecretKey'),
})

const s3 = new AWS.S3()
const bucket = 'ctc-previous-build'
const file = 'businesses.json'

const writeToS3 = body => {
  return new Promise((resolve, reject) => {
    s3.upload(
      {
        Bucket: bucket,
        Body: JSON.stringify(body),
        Key: file,
      },
      (err, data) => {
        err && reject(err)
        console.log(`S3 successfully wrote ${file} to ${bucket}`)
        data && resolve(data)
      }
    )
  })
}

const readFromS3 = () => {
  return new Promise((resolve, reject) => {
    s3.getObject(
      {
        Bucket: bucket,
        Key: file,
      },
      (err, data) => {
        if (err) {
          err.code === 'NoSuchKey' ? resolve(null) : reject(err)
        }
        data && resolve(JSON.parse(data.Body))
      }
    )
  })
}

module.exports = {
  readFromS3,
  writeToS3,
}
