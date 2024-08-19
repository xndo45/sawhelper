import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { primaryColor } from '../../utils/styles.js';
import { handleError } from '../../utils/errorHandler.js';

export default {
    async execute(interaction) {
        try {
            // Create the embed message for Step 6
            const embed = new EmbedBuilder()
                .setColor(primaryColor)
                .setTitle('🔄 **Step 6: Upload and Configure Script with Zen++**')
                .setDescription(
                    '1. Open Zen++ and upload the saved zpu file.\n' +
                    '2. Follow the on-screen instructions to complete the upload.\n' +
                    '3. After uploading, adjust the script settings via the Zen menu.\n' +
                    '4. Hold LT and press the Option button when the script is loaded.'
                )
                .setFooter({ text: 'Make sure to follow each step carefully!', iconURL: 'https://example.com/icon.png' });

            // Create the buttons for proceeding to Step 7 and going back to Step 5
            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('step_7')  // Custom ID for moving to Step 7
                    .setLabel('➡️ Step 7: Additional Setup Details')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('step_5')  // Custom ID for going back to Step 5
                    .setLabel('⬅️ Go Back to Step 5')
                    .setStyle(ButtonStyle.Secondary)
            );

            // Reply to the interaction with the embed and buttons
            await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
        } catch (error) {
            // Handle errors using a custom error handler
            await handleError(interaction, error, 'Failed to execute Step 6.');
        }
    }
};
