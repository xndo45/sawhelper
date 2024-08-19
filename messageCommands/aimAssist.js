import { EmbedBuilder } from 'discord.js';
import { primaryColor } from '../utils/styles.js';

export const name = 'aimAssist';

export async function execute(message) {
    const embed = new EmbedBuilder()
        .setColor(primaryColor) // Use the primary color for this embed
        .setTitle('🎯 **Aim Assist Settings**')
        .setDescription('Detailed explanation of various aim assist settings and their impact on gameplay.')
        .addFields(
            { name: '**AA Size**', value: 'Size of the circle for main aim assist.' },
            { name: '**AI Size**', value: 'Size of AI aim; interacts with the main aim assist circle.' },
            { name: '**AI Time**', value: 'Duration of AI aim; interacts with AI aim assist speed.' },
            { name: '**AA Time**', value: 'Speed at which aim assist completes its circular movement.' },
            { name: '**Tracker Sensitivity**', value: 'Lower values result in slower, less responsive tracking. Best between 90-100.' },
            { name: '**Left St. Aim**', value: 'Similar to rotational aim but can put off aim if main aim assist is set high.' },
            { name: '**Long Range Adjustment**', value: 'Fine-tunes long-distance micro movements. Higher values slow movement; useful for long-range sniping.' },
            { name: '**Prediction**', value: 'Extends aim assist coverage based on stick movement. High values increase stick sensitivity.' },
            { name: '**In-game FPS**', value: 'Frames per second on your PC or console. Correct setting smooths aim assist.' },
            { name: '**Smoothing**', value: 'Reduces shakes; high values negatively impact tracking performance.' },
            { name: '**Dynamic Sensitivity (Dynamic Sens)**', value: 'Auto-adjusts sensitivity based on actions like ADS, firing, or looking.' }
        )
        .setFooter({ text: 'Adjust these settings to enhance your gameplay experience.', iconURL: 'https://example.com/icon.png' });

    await message.reply({ embeds: [embed] });
}
