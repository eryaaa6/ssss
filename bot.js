const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("653353510859046955")
setInterval(function() {
channel.send(`سعد خضر سعد خضر سعد خضر سعد خضر سعد خضر`);
}, 30)
})

client.login(process.env.BOT_TOKEN);