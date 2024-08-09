const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Metoushela Walker',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`𝙌𝙪𝙚𝙡𝙡𝙚 𝙚𝙨𝙩 𝙫𝙤𝙩𝙧𝙚 𝙦𝙪𝙚𝙨𝙩𝙞𝙤𝙣 ☺?`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`💬 𝗚𝗣𝗧-4\n━━━━━━━━━━━━━━━━\n "${input}"`, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://metoushela-rest-api-tp5g.onrender.com/api/gpt4o?context=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage( '💬 𝗚𝗣𝗧-4\n━━━━━━━━━━━━━━━━\n' + response + '\n━━━━━━━━━━━━━━━━\n', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while processing your request.', event.threadID, event.messageID);
  }
};
