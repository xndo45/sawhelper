import { EmbedBuilder } from 'discord.js';

export const name = 'vmspeed';

export async function execute(message) {
    const embed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle('**VM Speed**')
        .setDescription('Adjust the speed of the Virtual Machine. This is the update speed of the script. For advanced users.')
        .setThumbnail('https://cdn.discordapp.com/attachments/1153445699866865694/1187510879000997908/mikecrowne_jigsaw_villain_super_detailed_dramatic_look_icon_ava_b94432e8-e793-425a-9ecb-18bed5e04095.png?ex=65a06130&is=658dec30&hm=266e7c0bc1167a1d8316a5df589862f3438cbaf5bc3eb7f8955a3899917d411a')
        .addFields(
            { name: 'Default Speed', value: 'The default speed of the Cronus VM is **10ms**.', inline: false },
            { name: 'Recommended Values', value: 'Try these values for different speeds:\n- **8ms**\n- **6ms**\n- **4ms**\nLower values may cause issues, especially on Xbox controllers.', inline: false },
            { name: 'Input Delay', value: 'If input delay is a concern and you are using a wired headset, consider switching to a wireless one.', inline: false },
            { name: 'Disclaimer', value: 'Faster is not always better when using Zen and Scripts. Test different speeds to find what feels best. Incorrect VM speed can cause input delays and other issues.', inline: false }
        )
        .setFooter({ text: '💢 ❗ DISCLAIMER ❗ 💢 Faster is not always better. Test and see what feels best.' });

    await message.channel.send({ embeds: [embed] });
}
