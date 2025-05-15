const { Client } = require('discord.js');
const { token, prefix } = require('./config/config');
const { moderationCommands } = require('./commands/moderation');
const { utilityCommands } = require('./commands/utility');
const { readyEvent } = require('./events/ready');
// Make sure readyEvent is a function exported from './events/ready'
const { GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent // <-- Add this line
    ]
});

client.once('ready', () => {
    readyEvent(client);
    if (client.user) {
        console.log(`Bot is online as: ${client.user.tag}`);
    } else {
        console.log('Bot is online, but user info is unavailable.');
    }
    if (client.user) {
        console.log(`Bot is online as: ${client.user.tag}`);
    } else {
        console.log('Bot is online, but user info is unavailable.');
    }
});

client.on('messageCreate', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ban') {
        moderationCommands.ban(message, args);
    } else if (command === 'kick') {
        moderationCommands.kick(message, args);
    } else if (command === 'mute') {
        moderationCommands.mute(message, args);
    } else if (command === 'ping') {
        utilityCommands.ping(message);
    } else if (command === 'info') {
        utilityCommands.info(message);
    }
});

client.login(token);