import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { primaryColor } from '../../utils/styles.js';
import { handleError } from '../../utils/errorHandler.js';

export default {
    async execute(interaction) {
        try {
            // Create the embed message for Step 5
            const embed = new EmbedBuilder()
                .setColor(primaryColor)
                .setTitle('📥 **Step 5: Download and Load Gamepack**')
                .setDescription(
                    '1. Click [Pussio v4](https://discord.com/channels/1050035729985712168/1256001388564189295/1256002398762307696).\n' +
                    '2. Click the download link to save the gamepack file to your computer.\n' +
                    '3. Open the gamepack loader software on your PC.\n' +
                    '4. Configure the settings and values as needed.\n' +
                    '5. Save the configuration as a zpu file.'
                )
                .setFooter({ text: 'Make sure to follow each step carefully!', iconURL: 'https://example.com/icon.png' });

            // Create the buttons for proceeding to Step 6 and going back to Step 4
            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('step_6')  // Custom ID for moving to Step 6
                    .setLabel('➡️ Step 6: Upload and Configure Script with Zen++')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('step_4')  // Custom ID for going back to Step 4
                    .setLabel('⬅️ Go Back to Step 4')
                    .setStyle(ButtonStyle.Secondary)
            );

            // Reply to the interaction with the embed and buttons
            await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
        } catch (error) {
            // Handle errors using a custom error handler
            await handleError(interaction, error, 'Failed to execute Step 5.');
        }
    }
};
