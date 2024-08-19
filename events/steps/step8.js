import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { primaryColor } from '../../utils/styles.js';
import { handleError } from '../../utils/errorHandler.js';

export default {
    async execute(interaction) {
        try {
            // Create the embed message for Step 8
            const embed = new EmbedBuilder()
                .setColor(primaryColor)
                .setTitle('🎉 **Step 8: Complete Setup**')
                .setDescription(
                    'Congratulations! Your setup is complete. If you have any further issues, please create a ticket in the #tickets channel.'
                )
                .setFooter({ text: 'Thank you for using our guide!', iconURL: 'https://example.com/icon.png' });

            // Create the buttons for finishing the setup and going back to Step 7
            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('complete')  // Custom ID for finishing the setup
                    .setLabel('✅ Finish')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId('step_7')  // Custom ID for going back to Step 7
                    .setLabel('⬅️ Go Back to Step 7')
                    .setStyle(ButtonStyle.Secondary)
            );

            // Reply to the interaction with the embed and buttons
            await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
        } catch (error) {
            // Handle errors using a custom error handler
            await handleError(interaction, error, 'Failed to execute Step 8.');
        }
    }
};
