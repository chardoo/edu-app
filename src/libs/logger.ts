// import pino, { Logger } from 'pino';
// import dotenv from "dotenv";
// import { createWriteStream } from "pino-sentry";


// dotenv.config();


// function prodLogger():Logger {
// 	const stream = createWriteStream({ dsn: process.env.SENTRY_DSN, serverName: process.env.TENANT_NAME});

// 	return pino({}, stream);
// }

// function devLogger(): Logger {
// 	return pino({
// 		timestamp: true,
// 		transport: {
// 			target: 'pino-pretty',
// 			options: {
// 				colorize: true,
// 				destination: 2,
// 				sync: process.env.SENTRY_ENVIRONMENT === 'testing',
// 			},
// 		},
// 	});
// }

// function logger(): Logger {
// 	return ['production', 'staging',"develop"].includes(process.env.SENTRY_ENVIRONMENT ?? '')
// 		? prodLogger()
// 		: devLogger();
// }

// export default logger();
