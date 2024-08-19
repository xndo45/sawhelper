import { Listener } from '@sapphire/framework';
import logger from '../utils/logger.js';

export class MessageCreateListener extends Listener {
    constructor(context, options) {
        super(context, {
            ...options,
            event: 'messageCreate',
        });
    }

    async run(message) {
        const { client } = this.container;

        // Ignore messages from bots or DMs
        if (!message.guild || message.author.bot) return;

        // Check for ?sh trigger
        if (message.content.startsWith('?sh')) {
            const args = message.content.slice(3).trim().split(/\s+/); // Split by whitespace
            const subcommand = args.shift().toLowerCase();

            const subcommandHandlers = {
                'vmspeed': 'vmspeed',
                'resources': 'freeScriptResources',
                'aa': 'aimAssist',
                'setup': 'onboarding', // Added onboarding subcommand
                // Add more subcommands here as needed
            };

            const commandName = subcommandHandlers[subcommand];
            if (commandName) {
                const command = client.messageCommands.get(commandName);
                if (command) {
                    try {
                        await command.execute(message, args);
                        logger.info(`Successfully executed message command: ${commandName}`);
                    } catch (error) {
                        logger.error(`Error executing message command: ${commandName} - ${error.message}`);
                        message.reply('There was an error executing your command. Please try again later.');
                    }
                } else {
                    message.reply(`Unknown subcommand: ${subcommand}`);
                }
            } else {
                message.reply(`Unknown subcommand: ${subcommand}`);
            }
        }
    }
}

