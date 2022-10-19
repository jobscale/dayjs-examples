const { logger } = require('@jobscale/logger');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
dayjs.extend(utc);
dayjs.extend(timezone);

const timestamp = "2014-06-01 12:00";
const tz = "America/New_York";

debugger;
const dayjsLocal = dayjs(timestamp); //assumes UTC
logger.info(dayjsLocal.toISOString()) // 2014-06-01T12:00:00.000Z
logger.info(dayjsLocal.format('YYYY-MM-DDTHH:mm:ss')) // 2014-06-01T12:00:00

const dayjsAmerica = dayjsLocal.tz(tz) // existing time treated as UTC
logger.info(dayjsAmerica.toISOString()) // 2014-06-01T12:00:00.000Z
logger.info(dayjsAmerica.format('YYYY-MM-DDTHH:mm:ss')) // 2014-06-01T08:00:00

const dayjsAmericaKeep = dayjsLocal.tz(tz, true) // existing time treated as local time
logger.info(dayjsAmericaKeep.toISOString()) // 2014-06-01T16:00:00.000Z
logger.info(dayjsAmericaKeep.format('YYYY-MM-DDTHH:mm:ss')) // 2014-06-01T12:00:00

dayjs("2014-06-01 12:00").tz("America/New_York")
dayjs.tz.guess()
dayjs.tz.setDefault("America/New_York")

// default local time
logger.info(dayjs().format()) // 2019-03-06T17:11:55+08:00

// UTC mode
logger.info(dayjs.utc().format()) // 2019-03-06T09:11:55Z

// convert local time to UTC time
logger.info(dayjs().utc().format()) // 2019-03-06T09:11:55Z

// While in UTC mode, all display methods will display in UTC time instead of local time.
// And all getters and setters will internally use the Date#getUTC* and Date#setUTC* methods instead of the Date#get* and Date#set* methods.
logger.info(dayjs.utc().isUTC()) // true
logger.info(dayjs.utc().local().format()) // 2019-03-06T17:11:55+08:00
logger.info(dayjs.utc('2018-01-01', 'YYYY-MM-DD')) // with CustomParseFormat plugin
