import pino from 'pino';
import pinoPretty from 'pino-pretty';

const prettyTransport = pinoPretty({
    colorize: true,
    translateTime: 'SYS:standard',
    ignore: 'pid,hostname',
});

const env = process.env.NODE_ENV || 'development';

const logger = pino({
    level: env === 'production' ? 'info' : 'debug',
    transport: env === 'production' ? undefined : { target: 'pino-pretty', options: { colorize: true } },
    base: {
        pid: false,
    },
    formatters: {
        level(label) {
            return { level: label };
        },
    },
}, env === 'production' ? undefined : prettyTransport);

export default logger;
