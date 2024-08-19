import { getChannelConfigs } from '../utils/dbFunctions.js';
import { sendRandomTip } from './sendRandomTip.js';

export const startTimedMessages = async (client) => {
    const configs = await getChannelConfigs();

    configs.forEach(({ guildId, channelId, interval, category }) => {
        const guild = client.guilds.cache.get(guildId);
        if (!guild) {
            console.error(`Guild with ID ${guildId} not found!`);
            return;
        }

        const channel = guild.channels.cache.get(channelId);
        if (!channel) {
            console.error(`Channel with ID ${channelId} not found!`);
            return;
        }

        setInterval(() => sendRandomTip(channel, category), interval * 60000);
    });
};
