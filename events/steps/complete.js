import { EmbedBuilder } from 'discord.js';
import { primaryColor } from '../../utils/styles.js';
import { handleError } from '../../utils/errorHandler.js';

export default {
    async execute(interaction) {
        try {
            // Create the embed message
            const embed = new EmbedBuilder()
                .setColor(primaryColor)
                .setTitle('🎉 **Setup Complete**')
                .setDescription('Congratulations! Your setup is complete. If you have any further issues, please create a ticket in the #tickets channel.')
                .setFooter({ text: 'Thank you for using our guide!', iconURL: 'https://example.com/icon.png' });

            // Update the interaction with the embed and remove buttons (components)
            await interaction.update({ embeds: [embed], components: [] });
        } catch (error) {
            // Handle errors with a custom error handler
            await handleError(interaction, error, 'Failed to complete setup.');
        }
    }
};
