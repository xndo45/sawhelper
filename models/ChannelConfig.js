import mongoose from 'mongoose';

const ChannelConfigSchema = new mongoose.Schema({
    guildId: String,
    channelId: String,
    interval: Number,
    category: String
});

const ChannelConfig = mongoose.model('ChannelConfig', ChannelConfigSchema);
export default ChannelConfig;
