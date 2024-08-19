import logger from './logger.js'; // Assuming you have a logger setup, like Winston
import { EmbedBuilder } from 'discord.js';
import { errorColor } from '../../utils/styles.js'; // Assuming you have different colors for different message types

export async function handleError(interaction, error, customMessage = 'An error occurred.') {
    // Log the error with the logging utility
    logger.error(`Error: ${error.message}`, { stack: error.stack });

    // Create an embed for the error message
    const errorEmbed = new EmbedBuilder()
        .setColor(errorColor) // Use a designated color for errors
        .setTitle('❌ An Error Occurred')
        .setDescription(`${customMessage} Please try again later.`)
        .addFields({ name: 'Error Details', value: error.message })
        .setFooter({ text: 'If this issue persists, please contact support.' });

    try {
        if (interaction.deferred || interaction.replied) {
            // If the interaction has already been deferred or replied to, use followUp
            await interaction.followUp({ embeds: [errorEmbed], ephemeral: true });
        } else {
            // Otherwise, reply normally
            await interaction.reply({ embeds: [errorEmbed], ephemeral: true });
        }
    } catch (err) {
        // Log the error that occurred while trying to send the error message
        logger.error(`Failed to send error message: ${err.message}`, { stack: err.stack });
    }
}
 