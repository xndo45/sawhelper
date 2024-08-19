import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { primaryColor } from '../../utils/styles.js';
import { handleError } from '../../utils/errorHandler.js';

export default {
    async execute(interaction) {
        try {
            // Create the embed message
            const embed = new EmbedBuilder()
                .setColor(primaryColor)
                .setTitle('✅ **Download Confirmed**')
                .setDescription('You have confirmed the download of the keygen. Proceed to the next step.')
                .setFooter({ text: 'Make sure to follow each step carefully!', iconURL: 'https://example.com/icon.png' });

            // Create the buttons for navigation
            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('step_3')
                    .setLabel('➡️ Step 3: Copy Your PINCODE')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('step_2')
                    .setLabel('⬅️ Go Back to Step 2')
                    .setStyle(ButtonStyle.Secondary)
            );

            // Update the interaction with the embed and buttons
            await interaction.update({ embeds: [embed], components: [row] });
        } catch (error) {
            // Handle any errors using a custom error handler
            await handleError(interaction, error, 'Failed to confirm download.');
        }
    }
};
