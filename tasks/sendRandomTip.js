import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { EmbedBuilder } from 'discord.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const sendRandomTip = async (channel, category) => {
    const tipsPath = path.join(__dirname, `../data/tips/${category}_tips.json`);

    if (!fs.existsSync(tipsPath)) {
        console.error(`Tips file for category "${category}" not found!`);
        return;
    }

    const tips = JSON.parse(fs.readFileSync(tipsPath, 'utf-8'));

    if (tips.length === 0) return;

    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    const embed = new EmbedBuilder()
        .setTitle(randomTip.title || "Did You Know?")
        .setDescription(randomTip.description || "Discover interesting facts and helpful tips to enhance your experience!")
        .setColor(0xffd700) // Set your desired color here
        .setAuthor({ name: "SawHub Community", iconURL: "https://cdn.discordapp.com/attachments/1153445701125156924/1240483459114467388/saw.webhook.1.png", url: "https://discord.gg/sawhub" })
        .setFooter({ text: "Stay tuned for more tips!", iconURL: "https://cdn.discordapp.com/attachments/1153445701125156924/1240483476126568458/saw.webhook2.png" })
        .setThumbnail("https://cdn.discordapp.com/attachments/1153445701125156924/1265343371233202328/dyk.jpg");

    if (randomTip.steps && Array.isArray(randomTip.steps)) {
        randomTip.steps.forEach((step, index) => {
            embed.addFields([{ name: `Step ${index + 1}`, value: step, inline: false }]);
        });
    }

    try {
        await channel.send({ embeds: [embed] });
    } catch (error) {
        console.error(`Failed to send tip: ${error.message}`);
    }
};
