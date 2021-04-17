class Alexa {
  constructor() {
    /**
     * @type {require("./ai.js")}
     */

    this.ai = require("./ai.js");
  }

  async getReply(message, language) {
    if (language) {
      if (typeof language !== "string")
        throw new Error("[Alexa-Bot-Api: Error] Langauge must be a string");
    }
    if (typeof message !== "string")
      throw new Error("[Alexa-Bot-API: ERROR] Query paramter must be a string");
    if (message == null)
      throw new Error("[Alexa-Bot-API: ERROR] Query parameter must be passed");
    return await this.ai(message, language);
  }
}

module.exports = Alexa;
