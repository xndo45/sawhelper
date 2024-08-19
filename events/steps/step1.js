import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { primaryColor } from '../../utils/styles.js';
import { handleError } from '../../utils/errorHandler.js';

export default {
    async execute(interaction) {
        try {
            // Create the embed message for Step 1
            const embed = new EmbedBuilder()
                .setColor(primaryColor)
                .setTitle('🎮 **Step 1: Download and Open the Keygen**')
                .setDescription(
                    '1. [**Download Keygen**](https://discord.com/channels/1050035729985712168/1256000754984943677/1256000930483146864)\n' +
                    '2. Locate and open the downloaded file.'
                )
                .setFooter({ text: 'Make sure to follow each step carefully!', iconURL: 'https://example.com/icon.png' });

            // Create the button for proceeding to Step 2
            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('step_2')  // Custom ID for Step 2 interaction
                    .setLabel('➡️ Step 2: Connect Zen')
                    .setStyle(ButtonStyle.Primary)
            );

            // Reply to the interaction with the embed and button
            await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
            console.log('Step 1 embed sent successfully.');
        } catch (error) {
            // Handle errors using a custom error handler
            await handleError(interaction, error, 'Failed to start Step 1.');
        }
    }
};
