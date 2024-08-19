import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { primaryColor } from '../../utils/styles.js';
import { handleError } from '../../utils/errorHandler.js';

export default {
    async execute(interaction) {
        try {
            // Create the embed message for Step 2
            const embed = new EmbedBuilder()
                .setColor(primaryColor)
                .setTitle('🔌 **Step 2: Connect Zen to Your PC**')
                .setDescription(
                    '1. Use the console port to plug your Zen device into your PC.\n' +
                    '2. Hold down the rear button on your Zen device while connecting it.\n' +
                    '3. Continue holding until it enters Bootloader Mode (you’ll see a message on the screen).'
                )
                .setFooter({ text: 'Make sure to follow each step carefully!', iconURL: 'https://example.com/icon.png' });

            // Create the buttons for confirming download and going back to Step 1
            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('confirm_download')  // Custom ID for confirming download
                    .setLabel('✅ Confirm Download')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('start_onboarding')  // Custom ID for going back to Step 1
                    .setLabel('⬅️ Go Back to Step 1')
                    .setStyle(ButtonStyle.Secondary)
            );

            // Reply to the interaction with the embed and buttons
            await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
        } catch (error) {
            // Handle errors using a custom error handler
            await handleError(interaction, error, 'Failed to execute Step 2.');
        }
    }
};
