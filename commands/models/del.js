
const redis = require('redis')
const client = redis.createClient()

module.exports = key => {
  return new Promise( (resolve, reject) => {
    client.del(key, (err, res) => err ? reject(err) : resolve(res))
  })
}
