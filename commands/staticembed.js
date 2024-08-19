import { Command } from '@sapphire/framework';
import { SlashCommandBuilder } from '@discordjs/builders';  // Import SlashCommandBuilder
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { primaryColor } from '../utils/styles.js';
import { getEmojiByName } from '../utils/emojiUtil.js';

export class StaticEmbedCommand extends Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'staticembed',
            description: 'Provides general information about the bot',
        });
    }

    async chatInputRun(interaction) {
        try {
            // Optionally check if the user is an admin or owner
            if (!this.isAdminOrOwner(interaction.member)) {
                return interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
            }

            // Fetch emojis
            const infoEmoji = getEmojiByName('info');
            const helpEmoji = getEmojiByName('help');
            const zenEmoji = getEmojiByName('Zen');

            // Create the embed
            const embed = new EmbedBuilder()
                .setColor(primaryColor)
                .setTitle(`${infoEmoji ? `<:${infoEmoji.name}:${infoEmoji.id}>` : ''} **Welcome to the Zen++ Helper Bot** ${zenEmoji ? `<:${zenEmoji.name}:${zenEmoji.id}>` : ''}`)
                .setDescription('This bot is here to assist you with setting up and using the Zen++ gamepack. Here are some things you can do:')
                .addFields(
                    { name: `${helpEmoji ? `<:${helpEmoji.name}:${helpEmoji.id}>` : ''} **Start Onboarding**`, value: 'Use the button below to begin the step-by-step setup process.', inline: false },
                    { name: `${helpEmoji ? `<:${helpEmoji.name}:${helpEmoji.id}>` : ''} **Get Help**`, value: 'Use the `/help` command to get information on various features and commands.', inline: false },
                    { name: `${helpEmoji ? `<:${helpEmoji.name}:${helpEmoji.id}>` : ''} **Create a Ticket**`, value: 'If you encounter any issues, create a ticket in the `#tickets` channel for further assistance.', inline: false }
                )
                .setFooter({ text: 'Need more help? Create a ticket in the #tickets channel.', iconURL: 'https://example.com/icon.png' });

            // Create an action row with a button
            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('start_onboarding')
                    .setLabel('Start Onboarding')
                    .setStyle(ButtonStyle.Primary)
            );

            // Reply to the interaction with the embed and button
            await interaction.reply({ embeds: [embed], components: [row], ephemeral: false });
        } catch (error) {
            // Log the error and notify the user
            this.container.logger.error(`Error executing staticembed command: ${error.message}`, { error });
            await interaction.reply({ content: 'There was an error displaying the information embed!', ephemeral: true });
        }
    }

    // Helper function to check if the user is an admin or owner
    isAdminOrOwner(member) {
        return member.permissions.has('ADMINISTRATOR') || this.container.client.ownerId === member.id;
    }
}

// Export the command's data for registration with Discord
export const data = new SlashCommandBuilder()
    .setName('staticembed')
    .setDescription('Provides general information about the bot');

// Export the command as default
export default StaticEmbedCommand;
