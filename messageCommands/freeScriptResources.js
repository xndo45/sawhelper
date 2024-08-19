import { EmbedBuilder } from 'discord.js';
import { paginationEmbed } from '../utils/pagination.js';
import logger from '../utils/logger.js';  // Assuming logger is in the utils directory

export const name = 'freeScriptResources';

export async function execute(interaction) {
    try {
        const pages = [
            new EmbedBuilder()
                .setColor('#ff0000')
                .setTitle('Free Script Resources - Page 1')
                .setDescription('If you are looking for Saw Script values or JigSaw values, please check below:')
                .setThumbnail('https://cdn.discordapp.com/attachments/1153445699866865694/1187510879000997908/mikecrowne_jigsaw_villain_super_detailed_dramatic_look_icon_ava_b94432e8-e793-425a-9ecb-18bed5e04095.png?ex=65a06130&is=658dec30&hm=266e7c0bc1167a1d8316a5df589862f3438cbaf5bc3eb7f8955a3899917d411a')
                .addFields(
                    { name: 'FS Discussion', value: '[FS Discussion](https://discord.com/channels/1050035729985712168/1247356971087171616)', inline: false },
                    { name: 'FS Bug Reports', value: '[FS Bug Reports](https://discord.com/channels/1050035729985712168/1247357009481957407)', inline: false },
                    { name: 'FS Values', value: '[FS Values](https://discord.com/channels/1050035729985712168/1247357091543253104)', inline: false },
                    { name: 'FS Download', value: '[FS Download](https://discord.com/channels/1050035729985712168/1247654976323588298)', inline: false },
                    { name: 'AFK Script', value: '[AFK Script](https://discord.com/channels/1050035729985712168/1167624706724200468)', inline: false }
                ),
            new EmbedBuilder()
                .setColor('#ff0000')
                .setTitle('Free Script Resources - Page 2')
                .addFields(
                    { name: 'Legacy Scripts', value: '[Legacy Scripts](https://discord.com/channels/1050035729985712168/1247357091543253104)', inline: false },
                    { name: 'Legacy Values', value: '[Legacy Values](https://discord.com/channels/1050035729985712168/1167624569432064120)', inline: false },
                    { name: 'JigSaw Values', value: '[JigSaw Values](https://discord.com/channels/1050035729985712168/1167624569432064120)', inline: false },
                    { name: 'PimplePop Values', value: '[PimplePop Values](https://discord.com/channels/1050035729985712168/1181433641746837604)', inline: false },
                    { name: 'FS Public Values', value: '[FS Public Values](https://discord.com/channels/1050035729985712168/1247357298746064929)', inline: false }
                ),
            new EmbedBuilder()
                .setColor('#ff0000')
                .setTitle('Free Script Resources - Page 3')
                .addFields(
                    { name: 'FS Script Guides', value: '[FS Script Guides](https://discord.com/channels/1050035729985712168/1214581841911095296)', inline: false },
                    { name: 'Grave House Bug Report', value: '[Grave House Bug Report](https://discord.com/channels/1050035729985712168/1214916651896799253)', inline: false },
                    { name: 'Grave House Chat', value: '[Grave House Chat](https://discord.com/channels/1050035729985712168/1167624284315844608)', inline: false },
                    { name: 'Saw Script Values', value: '[Saw Script Values](https://discord.com/channels/1050035729985712168/1167624592651722772)', inline: false },
                    { name: 'Jig Guide', value: '[Jig Guide](https://discord.com/channels/1050035729985712168/1181404411612889168)', inline: false }
                ),
            new EmbedBuilder()
                .setColor('#ff0000')
                .setTitle('Free Script Resources - Page 4')
                .addFields(
                    { name: 'Saw Download', value: '[Saw Download](https://discord.com/channels/1050035729985712168/1153445750294986802)', inline: false },
                    { name: 'JigSaw Download', value: '[JigSaw Download](https://discord.com/channels/1050035729985712168/1153445753692377199)', inline: false },
                    { name: 'PimplePop Download', value: '[PimplePop Download](https://discord.com/channels/1050035729985712168/1194041976430022730)', inline: false }
                )
        ];

        await paginationEmbed(interaction, pages);
        logger.info('Successfully executed freeScriptResources command.');
    } catch (error) {
        logger.error(`Error executing freeScriptResources command: ${error.message}`);
        await interaction.reply({ content: 'There was an error executing the command.', ephemeral: true });
    }
}
