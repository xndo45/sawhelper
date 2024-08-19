import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { primaryColor } from '../../utils/styles.js';
import { handleError } from '../../utils/errorHandler.js';

export default {
    async execute(interaction) {
        try {
            // Create the embed message for Step 3
            const embed = new EmbedBuilder()
                .setColor(primaryColor)
                .setTitle('🔑 **Step 3: Copy Your PINCODE**')
                .setDescription(
                    '1. Use the keygen software to generate a PINCODE.\n' +
                    '2. Highlight the generated PINCODE, right-click, and select "Copy."'
                )
                .setFooter({ text: 'Make sure to follow each step carefully!', iconURL: 'https://example.com/icon.png' });

            // Create the buttons for proceeding to Step 4 and going back to Step 2
            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('step_4')  // Custom ID for moving to Step 4
                    .setLabel('➡️ Step 4: Activate Your PINCODE')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('step_2')  // Custom ID for going back to Step 2
                    .setLabel('⬅️ Go Back to Step 2')
                    .setStyle(ButtonStyle.Secondary)
            );

            // Reply to the interaction with the embed and buttons
            await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
        } catch (error) {
            // Handle errors using a custom error handler
            await handleError(interaction, error, 'Failed to execute Step 3.');
        }
    }
};
