import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getEmojiByName(name) {
    const filePath = path.join(__dirname, '..', 'data', 'emojis.json');
    if (!fs.existsSync(filePath)) {
        throw new Error('Emoji data file not found. Please run the /fetchemojis command first.');
    }

    const emojiData = JSON.parse(fs.readFileSync(filePath));
    return emojiData.find(emoji => emoji.name === name);
}
