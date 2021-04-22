const fetch = require("node-fetch");
module.exports = async (e, t) => {
  return fetch(
    `https://alexa-bot-api-web-server.vercel.app/api/alexa?stimulus=${decodeURIComponent(e)}?lang=${decodeURIComponent(t)}`
  )
    .then((e) => e.json())
    .then((e) => e.reply);
};
