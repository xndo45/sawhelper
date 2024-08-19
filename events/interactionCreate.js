import logger from '../utils/logger.js';
import { ComponentType } from 'discord.js';
import * as stepHandlers from '../events/steps/index.js';

export const name = 'interactionCreate';

export async function execute(interaction, client) {
    try {
        if (interaction.isCommand()) {
            logger.info(`Received command: ${interaction.commandName}`);
            const command = client.commands.get(interaction.commandName);
            if (!command) {
                logger.error(`No command found for: ${interaction.commandName}`);
                return;
            }
            try {
                await command.execute(interaction);
                logger.info(`Successfully executed command: ${interaction.commandName}`);
            } catch (error) {
                logger.error(`Error executing command: ${interaction.commandName} - ${error.message}`);
                await interaction.reply({ content: 'There was an error executing that command!', ephemeral: true });
            }
        } else if (interaction.isButton()) {
            logger.info(`Received button interaction: ${interaction.customId}`);
            const handler = stepHandlers[interaction.customId];
            if (handler && typeof handler.execute === 'function') {
                try {
                    await handler.execute(interaction);
                    logger.info(`Successfully handled button interaction: ${interaction.customId}`);
                } catch (error) {
                    logger.error(`Error handling button interaction: ${interaction.customId} - ${error.message}`);
                    await interaction.reply({ content: 'There was an error processing your interaction!', ephemeral: true });
                }
            } else {
                logger.error(`No handler found for button interaction: ${interaction.customId}`);
                await interaction.reply({ content: 'There was an error processing your interaction!', ephemeral: true });
            }
        }
    } catch (error) {
        logger.error(`Error handling interaction: ${error.message}`);
    }
}

// Set up a collector to handle button interactions
export function setupCollector(interaction) {
    const collector = interaction.channel.createMessageComponentCollector({
        componentType: ComponentType.Button,
        time: 60000 // 1 minute
    });

    collector.on('collect', async (i) => {
        const handler = stepHandlers[i.customId];
        if (handler && typeof handler.execute === 'function') {
            await handler.execute(i);
            logger.info(`Successfully handled button interaction: ${i.customId}`);
        } else {
            logger.error(`No handler found for button interaction: ${i.customId}`);
            await i.reply({ content: 'There was an error processing your interaction!', ephemeral: true });
        }
    });

    collector.on('end', collected => {
        logger.info(`Collected ${collected.size} interactions.`);
    });
}
