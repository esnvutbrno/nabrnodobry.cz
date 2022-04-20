const {DateTime, Duration, Settings} = require("luxon");

// Settings.defaultLocale = "cs";

DateTime.defaultZone = 'Europe/Prague';

export {DateTime, Duration, Settings};
