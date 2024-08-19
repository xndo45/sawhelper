import { EmbedBuilder } from 'discord.js';
import { primaryColor } from '../utils/styles.js';

export const name = 'onboarding';

export async function execute(message) {
    const embed = new EmbedBuilder()
        .setColor(primaryColor)
        .setTitle('📌 Important Steps')
        .setDescription('Follow these steps below to:\n\n- Generate your Pin\n- Activate your Pin\n- Get access to the script\n')
        .setThumbnail('https://nhstalentacademy.org.uk/wp-content/uploads/WhatsNextPostItTRANS.png')
        .addFields(
            { name: 'Step #1', value: 'To get and activate your Pin Code, go to [this channel](https://discord.com/channels/1167556384678744084/1237561524462288936).\n', inline: false },
            { name: 'Step #2', value: 'To download the Game Pack, visit [this channel](https://discord.com/channels/1247349569029799946).\n', inline: false },
            { name: 'Additional Help', value: 'For any additional help, please visit our support channels or contact a moderator.\n', inline: false },
            { name: 'Need More Information?', value: 'Check out our [FAQ](https://example.com/faq) or [User Guide](https://example.com/user-guide) for detailed instructions.\n', inline: false }
        )
        .setFooter({ text: 'Make sure to follow each step carefully!', iconURL: 'https://example.com/icon.png' });

    await message.reply({ embeds: [embed] });
}
