import ChannelConfig from '../../models/ChannelConfig.js';

export const name = 'interactionCreate';

export const execute = async (interaction) => {
    if (!interaction.isModalSubmit()) return;

    const modalId = interaction.customId;

    if (modalId === 'setChannelModal') {
        const channel = interaction.fields.getTextInputValue('channelInput');
        const interval = parseInt(interaction.fields.getTextInputValue('intervalInput'), 10);
        const category = interaction.fields.getTextInputValue('categoryInput');

        // Save configuration to the database
        await ChannelConfig.findOneAndUpdate(
            { guildId: interaction.guild.id, category },
            { guildId: interaction.guild.id, channelId: channel, interval, category },
            { upsert: true }
        );

        return interaction.reply({ content: `Channel configuration saved: ${channel} (Interval: ${interval} minutes, Category: ${category})`, ephemeral: true });
    }
};
