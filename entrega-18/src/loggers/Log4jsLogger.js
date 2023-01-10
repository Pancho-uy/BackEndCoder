import log4js from 'log4js';
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

log4js.configure({
    appenders: {
        terminal: {type: 'console'},
        warnFile: {type: 'file', filename: __dirname + '../../../log/warn.log'},
        errorFile: {type: 'file', filename: __dirname + '../../../log/error.log'},

        // [INFO] al final lo dejo solo por terminal...
        /* infoFile: {type: 'file', filename: __dirname + '../../../log/info.log'}, */
        /* loggerInfo: {type: 'logLevelFilter', appender: 'infoFile', level: 'info', maxLevel:'info'}, */
        
        loggerWarn: {type: 'logLevelFilter', appender: 'warnFile', level: 'warn', maxLevel:'warn'},
        loggerError: {type: 'logLevelFilter', appender: 'errorFile', level: 'error', maxLevel: 'error'}
    },
    categories: {
        /* default: {appenders: ['loggerInfo', 'loggerWarn', 'loggerError'], level: 'info'} */
        default: {appenders: ['terminal', 'loggerWarn', 'loggerError'], level: 'info'}
    }
})

const logger = log4js.getLogger();

export default logger;