// Import necessary modules from Sapphire and Discord.js
import { SapphireClient } from '@sapphire/framework';
import { GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import logger from './utils/logger.js'; // Assuming you have a logger setup

// Load environment variables from .env file
dotenv.config();

// Create a new SapphireClient instance
const client = new SapphireClient({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
  defaultPrefix: '!', // Set a default prefix, can be adjusted based on your needs
  loadMessageCommandListeners: true, // Loads message command listeners
  logger: {
    level: 'info', // Adjust logging level
  },
  shards: 'auto', // Automatically handles sharding if necessary
});

// Event listener for when the bot is ready
client.once('ready', () => {
  logger.info(`Logged in as ${client.user.tag}!`);
});

// Handle any uncaught exceptions or rejections gracefully
process.on('unhandledRejection', (error) => {
  logger.error('Unhandled promise rejection:', error);
});

process.on('uncaughtException', (error) => {
  logger.error('Uncaught exception:', error);
});

// Graceful shutdown handling
process.on('SIGINT', () => {
  logger.info('Shutting down gracefully...');
  client.destroy();
  process.exit(0);
});

// Log in to Discord using your bot token
client.login(process.env.TOKEN).catch((error) => {
  logger.error('Failed to log in:', error);
});
