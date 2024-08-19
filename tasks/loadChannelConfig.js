import fs from 'fs';
import path from 'path';

const configPath = path.join(__dirname, '../data/channelConfig.json');

export const loadChannelConfig = () => {
    if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    } else {
        return {};
    }
};
