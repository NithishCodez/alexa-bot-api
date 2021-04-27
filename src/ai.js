/* Code originated from Nithish#6593 */
/* Adapted and modified by BlobKat#0388 */
/* All rights reserved */
let md5 = require("md5"), axios = require("axios"), jar = null, contexts = {};
module.exports = async function(stim, id){
  let context = id;
  if(!Array.isArray(id)){
    context = contexts[id] || (contexts[id]=[])
  }
  if(!jar)jar = (await axios.get("https://www.cleverbot.com/", {
      headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/501.12 (KHTML, like Gecko) Chrome/90 Safari/501.12" },
    })).headers["set-cookie"];
  var payload = "stimulus=" + escape(escape(stim)).replace(/%u/g, "|") + "&islearning=1&icognocheck=";
  payload += md5(payload.substring(7, 33));  
  if(context.length > 10)context.splice(0,context.length-10)
  let l = context.length - 1;
  for (let i = 0; i <= l; i++) {
    payload += `&vText${i + 2}=${escape(context[l-i]).includes("%u") ? escape(escape(contect[l-i]).replace(/%u/g, "|")) : escape(context[l-i])}`;
  }
  let res = await axios.post("https://www.cleverbot.com/webservicemin?uc=UseOfficialCleverbotAPI", payload, {
    headers: {
      Cookie: jar[0].split(";")[0],
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/501.12 (KHTML, like Gecko) Chrome/90 Safari/501.12",
      "Content-Type": "text/plain",
    },
  });
  res = res.data.split("\r")[0];
  (id!=void 0) && context.push(stim);
  (id!=void 0) && context.push(res);
  return res;
}
