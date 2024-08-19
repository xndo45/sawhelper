import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { primaryColor } from '../../utils/styles.js';
import { handleError } from '../../utils/errorHandler.js';

export default {
    async execute(interaction) {
        try {
            // Create the embed message for Step 4
            const embed = new EmbedBuilder()
                .setColor(primaryColor)
                .setTitle('🔓 **Step 4: Activate Your PINCODE**')
                .setDescription(
                    '1. Open your Discord channel.\n' +
                    '2. Type the command:\n```\n/addpin [paste your PINCODE here]\n```\n' +
                    '3. Press Enter and look for a confirmation message from the NexusNinja bot.'
                )
                .setFooter({ text: 'Make sure to follow each step carefully!', iconURL: 'https://example.com/icon.png' });

            // Create the buttons for confirming activation and going back to Step 3
            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('confirm_activation')  // Custom ID for confirming activation
                    .setLabel('✅ Confirm Activation')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('step_3')  // Custom ID for going back to Step 3
                    .setLabel('⬅️ Go Back to Step 3')
                    .setStyle(ButtonStyle.Secondary)
            );

            // Reply to the interaction with the embed and buttons
            await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
        } catch (error) {
            // Handle errors using a custom error handler
            await handleError(interaction, error, 'Failed to execute Step 4.');
        }
    }
};
