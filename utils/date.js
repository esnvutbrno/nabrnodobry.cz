const {DateTime, Duration, Settings} = require("luxon");

// Settings.defaultLocale = "cs";

DateTime.defaultZone = 'system';

export {DateTime, Duration, Settings};
