Object.assign(process.env, {
  TZ: 'Utc/Gmt',
});

const { logger } = require('@jobscale/logger');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone'); // dependent on utc plugin

dayjs.extend(utc);
dayjs.extend(timezone);

const date = "2022-06-02";
const timestamp = "2023-06-01 21:00+0900";
const tz = "Asia/Tokyo";

logger.info(dayjs(date).format());
logger.info(dayjs(timestamp).format('YYYY-MM-DDTHH:mm:ss'));
logger.info();
logger.info(dayjs(date).tz(tz).format());
logger.info(dayjs(timestamp).tz(tz).format('YYYY-MM-DDTHH:mm:ss'));
