const artificialIntelligence = require('./ai.js');
var translate = require('translation-google');

class Alexa {

  constructor() {
  }
  
  async getReply(message, language) {
    if(message === '' || null) {
      throw new TypeError('Message Cannot be empty in getReply()')
    }
    if(language === '' || null) {
      throw new TypeError('Language Cannot be empty')
    }
    try{
    const trans = await translate(await artificialIntelligence(message), {to: language})
    return trans.text
    }catch(err){
      console.error(err)
    }
  }

}

module.exports = Alexa;