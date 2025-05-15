const { Client } = require('discord.js');

function readyEvent(client) {
    console.log(`Ready event triggered for ${client.user.tag}`);
    console.log(`Bot is online as: ${client.user.tag}`);
    console.log(`Bot is online, but user info is unavailable.`);
}

module.exports = { readyEvent };

