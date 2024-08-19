import { saveChannelConfig } from '../utils/dbFunctions.js';

export const name = 'interactionCreate';

export const execute = async (interaction) => {
    if (!interaction.isModalSubmit()) return;

    if (interaction.customId === 'setChannelModal') {
        const channelInput = interaction.fields.getTextInputValue('channelInput');
        const intervalInput = interaction.fields.getTextInputValue('intervalInput');
        const categoryInput = interaction.fields.getTextInputValue('categoryInput');

        // Validate inputs
        const channel = interaction.guild.channels.cache.get(channelInput.replace(/[<#>]/g, ''));
        const interval = parseInt(intervalInput, 10);
        const category = categoryInput.trim().toLowerCase();

        if (!channel || !interval || !category) {
            return interaction.reply({ content: 'Invalid input. Please ensure all fields are filled correctly.', ephemeral: true });
        }

        // Save configuration to the database
        await saveChannelConfig(interaction.guild.id, channel.id, interval, category);

        await interaction.reply(`Channel configuration saved: ${channel} (Interval: ${interval} minutes, Category: ${category})`);
    }
};
