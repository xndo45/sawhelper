import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const tipsDirectory = path.join(__dirname, '../data/tips');

export const loadTips = () => {
    const tips = {};
    const files = fs.readdirSync(tipsDirectory);
    files.forEach(file => {
        const filePath = path.join(tipsDirectory, file);
        try {
            const data = fs.readFileSync(filePath, 'utf-8');
            tips[file.replace('.json', '')] = JSON.parse(data);
            console.log(`Loaded tips from ${file}`);
        } catch (error) {
            console.error(`Failed to load tips from ${filePath}: ${error.message}`);
        }
    });
    return tips;
};
