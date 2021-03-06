
const help = require('./help')
const register = require('./register')
const view = require('./view')
const remove = require('./remove')
const vote = require('./vote')
const suggestPost = require('./suggest-post')
const viewSuggests = require('./view-suggests')
const acceptSuggest = require('./accept-suggest')
const removeSuggest = require('./remove-suggest')
const huebr = require('./huebr')

module.exports = controller => {
  help(controller)
  register(controller)
  view(controller)
  remove(controller)
  suggestPost(controller)
  viewSuggests(controller)
  acceptSuggest(controller)
  removeSuggest(controller)
  vote(controller)
  huebr(controller)
}
