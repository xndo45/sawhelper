import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';  // Import pathToFileURL to convert paths
import 'dotenv/config';
import logger from './utils/logger.js';

// Determine the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Retrieve environment variables
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const token = process.env.TOKEN;

if (!clientId || !guildId || !token) {
    logger.error('Missing required environment variables: CLIENT_ID, GUILD_ID, or TOKEN.');
    process.exit(1);
}

const commands = [];
const commandPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith('.js'));

// Dynamically import all command files and prepare the data
for (const file of commandFiles) {
    const filePath = path.join(commandPath, file);
    try {
        // Convert the file path to a file URL
        const fileUrl = pathToFileURL(filePath).href;
        const { data } = await import(fileUrl);
        if (data && data.toJSON) {
            commands.push(data.toJSON());
        } else {
            logger.warn(`Command at ${filePath} is missing a "data" export or "toJSON" method.`);
        }
    } catch (error) {
        logger.error(`Failed to load command at ${filePath}: ${error.stack || error}`);
    }
}

// Initialize the REST client
const rest = new REST({ version: '9' }).setToken(token);

// Deploy the commands
(async () => {
    try {
        logger.info('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );

        logger.info('Successfully reloaded application (/) commands.');
    } catch (error) {
        logger.error('Failed to reload application (/) commands:', error.stack || error);
    }
})();
