const alex = require("./alexa.js");
const ai = new alex();

ai.getReply("hey%s", "spanish").then(console.log);
