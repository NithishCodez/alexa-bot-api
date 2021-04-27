const alex = require("./alexa.js");
const ai = new alex();

ai.getReply("hey%sssd/;[';0)s", []).then(console.log);
