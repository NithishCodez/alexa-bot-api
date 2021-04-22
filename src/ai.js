const fetch = require("node-fetch");
module.exports = async (e, t) => {
  return fetch(
    encodeURI(`https://alexa-bot-api-web-server.vercel.app/api/alexa?stimulus=${e}?lang=${t}`)
  )
    .then((e) => e.json())
    .then((e) => e.reply);
};
