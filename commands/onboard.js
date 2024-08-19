import { Command } from '@sapphire/framework';
import { SlashCommandBuilder } from '@discordjs/builders';  // Import SlashCommandBuilder
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

export class OnboardCommand extends Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'onboard',
            description: 'Starts the onboarding process for the Pussio Gamepack',
        });
    }

    async chatInputRun(interaction) {
        try {
            // Create a simple embed
            const embed = new EmbedBuilder()
                .setColor(0x0099ff) // Use a hardcoded color
                .setTitle('Welcome to the Gamepack Onboarding!')
                .setDescription('Follow the steps below to set up your Pussio Gamepack with Zen++.');

            // Create the button for Step 1
            const step1Button = new ButtonBuilder()
                .setCustomId('step_1')
                .setLabel('Step 1: Download and Open the Keygen')
                .setStyle(ButtonStyle.Primary);

            // Create an action row to hold the button
            const row = new ActionRowBuilder().addComponents(step1Button);

            // Reply to the interaction with the embed and button
            await interaction.reply({ embeds: [embed], components: [row] });
        } catch (error) {
            // Log the error and notify the user
            this.container.logger.error(`Error executing onboard command: ${error.message}`, { error });
            await interaction.reply({ content: 'There was an error starting the onboarding process!', ephemeral: true });
        }
    }
}

// Export the command's data for registration with Discord
export const data = new SlashCommandBuilder()
    .setName('onboard')
    .setDescription('Starts the onboarding process for the Pussio Gamepack');

// Default export of the command class
export default OnboardCommand;
