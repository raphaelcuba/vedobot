
const redis = require('redis')
const client = redis.createClient()

module.exports = (...hashKey) => {
  return new Promise( (resolve, reject) => {
    client.hget(hashKey, (err, res) => err ? reject(err) : resolve(res))
  })
}
