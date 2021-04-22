const alex = require("./alexa.js");
const ai = new alex();

ai.getReply("hey", "spanish").then(console.log);
