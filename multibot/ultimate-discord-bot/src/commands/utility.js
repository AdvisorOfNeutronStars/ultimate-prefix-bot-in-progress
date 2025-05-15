const { EmbedBuilder } = require('discord.js');

const utilityCommands = {
    ping: async (message) => {
        const pingEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Pong!')
            .setDescription(`🏓 Latency is ${Date.now() - message.createdTimestamp}ms.`);
        await message.channel.send({ embeds: [pingEmbed] });
    },
    info: async (message) => {
        const infoEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Bot Information')
            .setDescription('This bot is designed to assist with moderation and utility commands.')
            .addFields([
                { name: 'Author', value: '.folfy7#0', inline: true },
                { name: 'Version', value: '1.0.0', inline: true },
                { name: 'GitHub', value: '[GitHub Link](<>)', inline: true },
                { name: 'Invite Link', value: '[Invite Link](<>)', inline: true },
                { name: 'Support Server', value: '[Support Server Link](<>)', inline: true }
            ])
            .setTimestamp()
            .setFooter({ text: 'Bot Information', iconURL: message.client.user.displayAvatarURL() });
        await message.channel.send({ embeds: [infoEmbed] });
    }
};

module.exports = { utilityCommands };
