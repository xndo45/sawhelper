import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType } from 'discord.js';
import logger from './logger.js';  // Assuming logger is in the same directory

export async function paginationEmbed(interaction, pages, timeout = 120000) {
    let page = 0;

    const row = () => new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('prev')
                .setLabel('Previous')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(page === 0),
            new ButtonBuilder()
                .setCustomId('next')
                .setLabel('Next')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(page === pages.length - 1)
        );

    // Initial reply
    await interaction.reply({
        embeds: [pages[page]],
        components: [row()],
        ephemeral: true
    });

    const filter = i => i.user.id === interaction.user.id;

    const collector = interaction.channel.createMessageComponentCollector({
        filter,
        componentType: ComponentType.Button,
        time: timeout
    });

    collector.on('collect', async i => {
        try {
            if (i.customId === 'prev') {
                page = page > 0 ? --page : pages.length - 1;
            } else if (i.customId === 'next') {
                page = page + 1 < pages.length ? ++page : 0;
            }

            await i.update({
                embeds: [pages[page]],
                components: [row()],
                ephemeral: true
            });

            logger.info(`Page changed to: ${page + 1}`);
        } catch (error) {
            logger.error(`Error updating page: ${error.message}`);
            await i.reply({ content: 'There was an error processing your interaction!', ephemeral: true });
        }
    });

    collector.on('end', async collected => {
        logger.info(`Collected ${collected.size} interactions.`);
        try {
            const disabledRow = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('prev')
                        .setLabel('Previous')
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(true),
                    new ButtonBuilder()
                        .setCustomId('next')
                        .setLabel('Next')
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(true)
                );

            await interaction.editReply({
                components: [disabledRow]
            });
        } catch (error) {
            logger.error(`Error ending pagination: ${error.message}`);
        }
    });
}
