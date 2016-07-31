
const help = require('./help')
const register = require('./register')
const view = require('./view')
const remove = require('./remove')

module.exports = controller => {
  help(controller)
  register(controller)
  view(controller)
  remove(controller)
}