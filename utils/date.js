const {DateTime, Duration, Settings} = require("luxon");

Settings.defaultLocale = "en-US";

DateTime.defaultZone = 'Europe/Prague';

export {DateTime, Duration, Settings};
