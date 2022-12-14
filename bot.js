// Color log
const logger = require('node-color-log');
logger.setDate(() => new Date().toLocaleString(undefined, {
	year:   'numeric',
	month:  '2-digit',
	day:    '2-digit',
	hour:   '2-digit',
	hour12: false,
	minute: '2-digit',
	second: '2-digit',
}).replace(/\//g, '-'));
logger.setLevel('info');

// Environment
const dotenv = require('dotenv');
dotenv.config();
const token = process.env.TOKEN;
const { Client, GatewayIntentBits } = require('discord.js');