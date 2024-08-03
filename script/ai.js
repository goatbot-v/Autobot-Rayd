const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai', 'assistant'],
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
    api.sendMessage(`𝙎𝙖𝙡𝙪𝙩 𝙟𝙚 𝙨𝙪𝙞𝙨 𝙪𝙣𝙚 𝙞𝙣𝙩𝙚𝙡𝙡𝙞𝙜𝙚𝙣𝙘𝙚 𝙖𝙧𝙩𝙞𝙛𝙞𝙘𝙞𝙚𝙡𝙡𝙚 𝙚𝙩 𝙟𝙚 𝙧𝙚𝙥𝙤𝙣𝙙 à 𝙩𝙤𝙪𝙩𝙚𝙨 𝙡𝙚𝙨 𝙦𝙪𝙚𝙨𝙩𝙞𝙤𝙣𝙨`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`☘️𝚂ｈ𝚎𝚊ｒ𝚌ｈ...\n━━━━━━━━━━━\n "${input}"`, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://metoushela-rest-api-tp5g.onrender.com/api/gpt4o?context=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage('⚘𝗔𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝘁⊰♔⊱\n\n⊰⊹⊱♡⊰⊹⊱♡⊰⊹⊱♡⊰⊹\n' + response + '\n╰┈➤⊹⊱✫⊰⊹⊱✫⊰🍀', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('🔴 An error occurred while processing your request..', event.threadID, event.messageID);
  }
};
