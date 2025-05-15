const { EmbedBuilder } = require('discord.js');

module.exports = {
    ban: async (message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("You don't have permission to use this command.");
        const user = message.mentions.users.first();
        if (!user) return message.reply("Please mention a user to ban.");
        const member = message.guild.members.cache.get(user.id);
        if (member) {
            await member.ban();
            message.channel.send(`${user.tag} has been banned.`);
        } else {
            message.reply("That user isn't in this guild!");
        }
    },

    kick: async (message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("You don't have permission to use this command.");
        const user = message.mentions.users.first();
        if (!user) return message.reply("Please mention a user to kick.");
        const member = message.guild.members.cache.get(user.id);
        if (member) {
            await member.kick();
            message.channel.send(`${user.tag} has been kicked.`);
        } else {
            message.reply("That user isn't in this guild!");
        }
    },

    mute: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("You don't have permission to use this command.");
        const user = message.mentions.users.first();
        if (!user) return message.reply("Please mention a user to mute.");
        const member = message.guild.members.cache.get(user.id);
        const muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
        if (!muteRole) return message.reply("Mute role does not exist. Please create a role named 'Muted'.");

        if (member) {
            await member.roles.add(muteRole);
            message.channel.send(`${user.tag} has been muted.`);
        } else {
            message.reply("That user isn't in this guild!");
        }
    }
};