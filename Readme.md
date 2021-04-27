<h1>ALEXA-BOT-API</h1>

### Enjoying alexa-bot-api?

**Consider Donating To Me:**
https://www.buymeacoffee.com/nithishpravin

**Join My Discord Server**:
https://discord.gg/m2G7YB3ttf

**Developers**:
[Nithish Pravin](https://github.com/Major-Thrust)
Discord: Nithish#6593

**Credits:**
[Pudochu](https://discord.gg/cortex/)
Discord: Pudochu 'D#0001
Involvement: Helped in the latest fix and suggestions about the package

BlobKat#0388: Updated to support contextual AI

**Whats new in v2.1.0**

- Fixed cleverbot's new API update that lead to package not working
- Added Context support

## Promise Based!

```js
const alexa = require("alexa-bot-api");
const ai = new alexa();

ai.getReply("Hello").then((reply) => {
  console.log(reply);
  //Do your stuffs with the reply
});
```

## Contextual AI:

```js
getReply(<message>, <context>)
//context: string | array
//string: a specific channel ID for context
//array: an array of previous messages
```

## Async / Await

```js
const alexa = require("alexa-bot-api");
const ai = new alexa();

async function main() {
  const reply = await ai.getReply("How are you mate?");

  console.log(reply);
  //Do your stuffs with reply
}
main();
```
