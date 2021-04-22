const alex = require("./alexa.js");
const ai = new alex();

ai.getReply("hey%sssd/;[';0)s", "spanish").then(console.log);
