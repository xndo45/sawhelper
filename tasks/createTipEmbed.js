import { EmbedBuilder } from 'discord.js';

export const createTipEmbed = (tip) => {
    const colors = {
        gaming: 0x00ff00,  // Green
        pc: 0x0000ff,       // Blue
        script: 0xffa500,   // Orange
        server: 0xffff00,   // Yellow
        zen: 0xff0000       // Red
    };

    const embed = new EmbedBuilder()
        .setTitle(tip.title || "Did You Know?")
        .setDescription(tip.description || "Discover interesting facts and helpful tips to enhance your experience!")
        .setColor(colors[tip.category] || 0xffd700) // Default to gold if no category match
        .setAuthor({ name: "SawHub Community", iconURL: "https://cdn.discordapp.com/attachments/1153445701125156924/1240483459114467388/saw.webhook.1.png", url: "https://discord.gg/sawhub" })
        .setFooter({ text: "Stay tuned for more tips!", iconURL: "https://cdn.discordapp.com/attachments/1153445701125156924/1240483476126568458/saw.webhook2.png" })
        .setThumbnail("https://cdn.discordapp.com/attachments/1153445701125156924/1265343371233202328/dyk.jpg");

    if (tip.steps && Array.isArray(tip.steps)) {
        tip.steps.forEach((step, index) => {
            embed.addFields([{ name: `Step ${index + 1}`, value: step, inline: false }]);
        });
    }

    return embed;
};
