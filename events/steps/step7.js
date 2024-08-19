import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import { primaryColor } from '../../utils/styles.js';
import { handleError } from '../../utils/errorHandler.js';

export default {
    async execute(interaction) {
        try {
            // Create the embed message for Step 7
            const embed = new EmbedBuilder()
                .setColor(primaryColor)
                .setTitle('🔧 **Step 7: Additional Setup Details**')
                .setDescription(
                    '1. Ensure you have the necessary C++ libraries installed.\n' +
                    '[**Download and Install Visual C++ Redistributable**](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)\n' +
                    '2. Download and install the latest version of Zen Studio from the [Cronus website](https://www.cronusmax.com/downloads).\n' +
                    '3. Open Zen Studio and connect your Cronus Zen device using the provided USB cable.\n' +
                    '4. Connect your controller to the Cronus Zen via USB or Bluetooth.\n' +
                    '5. Drag and drop gamepacks into one of the eight memory slots in Zen Studio.\n' +
                    '6. Customize mods such as Rapid Fire, Anti-Recoil, and Aim Assist.'
                )
                .setFooter({ text: 'Make sure to follow each step carefully!', iconURL: 'https://example.com/icon.png' });

            // Create the buttons for proceeding to Step 8 and going back to Step 6
            const row = new ActionRowBuilder().addComponents(
                new ButtonBuilder()
                    .setCustomId('step_8')  // Custom ID for moving to Step 8
                    .setLabel('➡️ Step 8: Complete Setup')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('step_6')  // Custom ID for going back to Step 6
                    .setLabel('⬅️ Go Back to Step 6')
                    .setStyle(ButtonStyle.Secondary)
            );

            // Reply to the interaction with the embed and buttons
            await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
        } catch (error) {
            // Handle errors using a custom error handler
            await handleError(interaction, error, 'Failed to execute Step 7.');
        }
    }
};
