import ChannelConfig from '../models/ChannelConfig.js';

export const saveChannelConfig = async (guildId, channelId, interval, category) => {
    await ChannelConfig.findOneAndUpdate(
        { guildId, channelId, category },
        { guildId, channelId, interval, category },
        { upsert: true }
    );
};

export const getChannelConfigs = async (guildId) => {
    return ChannelConfig.find({ guildId });
};

export const removeChannelConfig = async (guildId, channelId, category) => {
    await ChannelConfig.findOneAndDelete({ guildId, channelId, category });
};
