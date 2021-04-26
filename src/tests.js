const alex = require("./alexa.js");
const ai = new alex();

ai.getReply("hey%sssd/;[';0)s", "spanish").then((response) => {
    if (response == null || response == undefined) // Add more checks here if needed.
        exit(1); // If so, fail.
    else
        console.log(`Response: "${response}"`);
    exit(0); // Pass if still here.
});
