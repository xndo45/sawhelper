import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { primaryColor } from '../../utils/styles.js';
import { handleError } from '../../utils/errorHandler.js';

export default {
    async execute(interaction) {
        try {
            // Create the embed message
            const embed = new EmbedBuilder()
                .setColor(primaryColor)
                .setTitle('✅ **Activation Confirmed**')
                .setDescription('You have confirmed the activation of your PINCODE. Proceed to the next step.')
                .setFooter({ text: 'Make sure to follow each step carefully!', iconURL: 'https://example.com/icon.png' });

            // Create the buttons for navigation
            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('step_5')
                    .setLabel('➡️ Step 5: Download and Load Gamepack')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('step_4')
                    .setLabel('⬅️ Go Back to Step 4')
                    .setStyle(ButtonStyle.Secondary)
            );

            // Update the interaction with the embed and buttons
            await interaction.update({ embeds: [embed], components: [row] });
        } catch (error) {
            // Handle the error using a custom error handler
            await handleError(interaction, error, 'Failed to confirm activation.');
        }
    }
};
