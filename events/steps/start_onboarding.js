import { Command } from '@sapphire/framework';
import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { primaryColor } from '../../utils/styles.js';
import { handleError } from '../../utils/errorHandler.js';

export class StartOnboardingCommand extends Command {
    constructor(context, options) {
        super(context, {
            ...options,
            name: 'start_onboarding',
            description: 'Starts the onboarding process for the Pussio Gamepack.',
        });
    }

    async chatInputRun(interaction) {
        try {
            const embed = new EmbedBuilder()
                .setColor(primaryColor)
                .setTitle('Welcome to the Pussio Gamepack Onboarding!')
                .setDescription('Follow the steps below to set up your Pussio Gamepack with Zen++.');

            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('step_1')
                    .setLabel('Step 1: Download and Open the Keygen')
                    .setStyle(ButtonStyle.Primary)
            );

            await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
        } catch (error) {
            await handleError(interaction, error, 'Failed to start onboarding.');
        }
    }
}
