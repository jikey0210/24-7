const keepAliveServer = require('./keep_alive.js');
const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); // All partials are loaded automatically
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
  client.user.setActivity("Idle", { type: "STREAMING", url: "https://www.youtube.com/watch?v=Zming5TY_pQ" })
  setInterval(async () => {
    client.channels.fetch("1107975916191232076")
      .then((channel) => {
        const VoiceConnection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator
        });
      }).catch((error) => { return; });
  }, 1000)
});
client.login(process.env.token);