
const util = require('./utils')
const register = require('./messages/register')
const keys = require('./models/keys')
const del = require('./models/del')

module.exports = controller => {
  controller.hears(['^remover-sugestão*','^remove-suggest*','^remover-sugestao*'], 'direct_message,direct_mention,mention', (bot, message) => {
    let { text } = message

    // Test if syntax is true
    if (/:+/.test(text) && !util.checkSyntax(text.split(/\s:/)[1], 'suggest')) {
      text = text.split(/\s:/)

      keys(`suggest:${text[1]}:theme`)
        .then( key => {

          // Delete
          del(`suggest:${text[1]}:theme`)
            .then( res => {
              bot.reply(message, `*${util.replace(text[1])}* deletado!`)
            })
            .catch( err => {
              bot.reply(message, `Deu ruim xD dá um confere no erro: ${JSON.stringify(err)}`)
            })
        })
        .catch( err => {
          bot.reply(message, `Deu ruim xD dá um confere no erro: ${JSON.stringify(err)}`)
        })
    } else {
      bot.reply(message, 'Syntax errada! Dá um confere aí *`<:meu-titulo>`*')
    }
  })
}
