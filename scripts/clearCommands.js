import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { token, clientId, guildId } from '../config.js';

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
    try {
        console.log('Started clearing guild application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: [] }
        );

        console.log('Successfully cleared guild application (/) commands.');
    } catch (error) {
        console.error(`Error clearing guild application commands: ${error.message}`);
    }

    try {
        console.log('Started clearing global application (/) commands.');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: [] }
        );

        console.log('Successfully cleared global application (/) commands.');
    } catch (error) {
        console.error(`Error clearing global application commands: ${error.message}`);
    }
})();
